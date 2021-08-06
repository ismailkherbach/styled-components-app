import { GET_EMPLOYEES_LIST, GET_EMPLOYEES_LIST_SUCCESS } from "../actions";

export const getEmployees = () => ({
  type: GET_EMPLOYEES_LIST,
});
export const getEmployeesSuccess = (employees) => ({
  type: GET_EMPLOYEES_LIST_SUCCESS,
  payload: employees,
});
