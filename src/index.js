import "./assets/styles/vendor/bootstrap.min.css";
import "./assets/styles/vendor/bootstrap.rtl.only.min.css";

let render = () => {
  import("./assets/styles/knack.main.scss").then((x) => {
    require("./AppRenderer");
  });
};
render();
