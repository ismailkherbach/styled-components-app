import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_EMPLOYEES_LIST } from "../actions";
import axios from "axios";
import { getEmployeesSuccess } from "./actions";

const getEmployeesAsync = async () =>
  await axios({
    url: `https://api.sellship.co/api/admin/getproducts/`,
    method: "get",
  });

function* getEmployees({ payload }) {
  try {
    const getResponse = yield call(getEmployeesAsync);
    if (getResponse.status === 200) {
      yield put(getEmployeesSuccess(getResponse.data));
    } else {
    }
  } catch (error) {}
}

export function* watchGetEmployees() {
  yield takeEvery(GET_EMPLOYEES_LIST, getEmployees);
}
export default function* rootSaga() {
  yield all([fork(watchGetEmployees)]);
}
