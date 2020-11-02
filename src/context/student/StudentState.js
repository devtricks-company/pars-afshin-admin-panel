import React ,{useReducer} from 'react';
import StudentContext from './studentContext';
import studentReducer from './studentReducer';
import axios from 'axios';
import {ADD_STUDENT_SUCCESS,ADD_STUDENT_PENNDING,ADD_STUDENT_FAIL} from '../types';

const StudentState = (props) =>{

    const initialState = {
        student:[],
        loading:false,
        errors:null
    }

    const [state,dispatch] = useReducer(studentReducer,initialState);

    const addNewStudent = async (studentData,token) => {
        try {
            const config = {
                headers:{
                    'Content-Type':'application/json',
                    'x-auth-token':token
                }
            }
    
            const student = await axios.post('http://localhost:5000/student/primary',{...studentData},config);
            console.log(student)
            dispatch({
                type:ADD_STUDENT_SUCCESS,
                payload:student.data
            })

            return null;
    
    
        } catch (error) {
            console.log(error.response.data.msg);
            dispatch({
                type:ADD_STUDENT_FAIL,
                payload:error.response.data.msg
            });
            return error;    
        }
    }

    return (<StudentContext.Provider value={{
        student:state.student,
        loading:state.loading,
        errors:state.errors,
        addNewStudent
    }}>
        {props.children}
    </StudentContext.Provider>)
}


export default StudentState;