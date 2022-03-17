import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";

// imported from react-router-dom for the purpose of routing.
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
