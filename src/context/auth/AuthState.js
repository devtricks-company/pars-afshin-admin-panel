import React,{useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import {LOGIN_SUCCESS,LOGIN_PENNDING,LOGIN_FAIL} from '../types'


const AuthState = (props) => {
    const initialState = {
        admin:null,
        loading:false
    }
    if(localStorage.getItem('pars-afshin-admin-token')){
        const decodeToken = jwtDecode(localStorage.getItem('pars-afshin-admin-token'));
        if(decodeToken.exp * 1000 < Date.now()){
                localStorage.removeItem('pars-afshin-admin-token');
        }else{
            initialState.admin = decodeToken;
        }
    }

    const [state,dispatch] = useReducer(authReducer,initialState);

    const login = async (adminData) => {
        
        const headerConfig = {
            "Content-Type":"application/json",

        }

        try {
            const admin = await axios.post(`http://localhost:5000/auth`,{...adminData},headerConfig);
            localStorage.setItem('pars-afshin-admin',admin.data.token);
    
            dispatch({
                type:LOGIN_SUCCESS,
                payload:admin.data
            })    
        } catch (error) {
            
        }
        

    }

    const logout = () => {

    }

    return(
        <AuthContext.Provider value={{
            admin:state.admin,
            loading:state.loading,
            login,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )


   
    
}

export default AuthState;