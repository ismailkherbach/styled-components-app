import { GET_EMPLOYEES_LIST, GET_EMPLOYEES_LIST_SUCCESS } from "../actions";

const INIT_STATE = {
  error: "",
  loading: false,
  employees: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_EMPLOYEES_LIST:
      return { ...state, loading: true, error: "" };
    case GET_EMPLOYEES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        employees: action.payload,
      };

    default:
      return { ...state };
  }
};
