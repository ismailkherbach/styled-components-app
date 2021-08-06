import { SIDEBAR_CLASSNAME } from "../actions";

const INIT_STATE = {
  error: "",
  loading: false,
  sidebarClassName: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIDEBAR_CLASSNAME:
      return { ...state, sidebarClassName: action.payload };

    default:
      return { ...state };
  }
};
