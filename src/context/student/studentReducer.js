import {
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_PENNDING,
  ADD_STUDENT_FAIL,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_STUDENT_SUCCESS:
      return {
        ...state,
        student: [...state.student, action.payload],
        loading: false,
        errors: null,
      };

    case ADD_STUDENT_PENNDING:
      return {
        ...state,
        loading: true,
        
      };

    case ADD_STUDENT_FAIL:
        console.log(action.payload);
      return {
        ...state,
        loading: false,
        errors:action.payload
      };
  }
};
