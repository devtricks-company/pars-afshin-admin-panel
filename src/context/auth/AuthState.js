import React,{useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import {LOGIN_SUCCESS,LOGIN_PENNDING,LOGIN_FAIL} from '../types'


const AuthState = (props) => {
    const initialState = {
        admin:null,
        loading:false,
        errors:null
    }
   
    const [state,dispatch] = useReducer(authReducer,initialState);


    if(localStorage.getItem('pars-afshin-admin-token')){
        const decodeToken = jwtDecode(localStorage.getItem('pars-afshin-admin-token'));
        console.log(decodeToken);
        if(decodeToken.exp * 1000 < Date.now()){
                localStorage.removeItem('pars-afshin-admin-token');
        }else{
            initialState.admin = decodeToken;
        }
    }

    const login = async (adminData) => {
        
        const headerConfig = {
            "Content-Type":"application/json",

        }
        
        try {
            dispatch({
                type:LOGIN_PENNDING
            })
            
            const admin = await axios.post(`http://localhost:5000/auth`,{...adminData},headerConfig);
        console.log(admin.data)    
            localStorage.setItem('pars-afshin-admin-token',admin.data.token);
            console.log(admin.data)
            dispatch({
                type:LOGIN_SUCCESS,
                payload:admin.data
            })    
        } catch (error) {
            console.log(error.response.data.msg);
            dispatch({
                type:LOGIN_FAIL,
                payload:error.response.data.msg
            })
        }
        

    }

    const logout = () => {

    }

    return(
        <AuthContext.Provider value={{
            admin:state.admin,
            loading:state.loading,
            errors:state.errors,
            login,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )


   
    
}

export default AuthState;