import  ReactDOM  from "react-dom";
import App from "./app";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter} from "react-router-dom";
ReactDOM.render(<BrowserRouter>
<App/>
</BrowserRouter>,document.getElementById("root"));