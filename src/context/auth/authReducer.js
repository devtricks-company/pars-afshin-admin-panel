import {LOGIN_FAIL,LOGIN_PENNDING,LOGIN_SUCCESS} from '../types'
export default (state,action) => {
    switch(action.type){
        case LOGIN_PENNDING:
            return {
                ...state,
                loading:true,
                admin:null,
                errors:null
            }

        case LOGIN_SUCCESS:
         
            return{
                ...state,
                admin:action.payload,
                loading:false,
                errors:null
            }    

        case LOGIN_FAIL:
            return{
                ...state,
                admin:null,
                loading:false,
                errors:action.payload
            }    
    }
}