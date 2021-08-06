import { SIDEBAR_CLASSNAME } from "../actions";

export const setSideBarClass = (className) => ({
  type: SIDEBAR_CLASSNAME,
  payload: className,
});
