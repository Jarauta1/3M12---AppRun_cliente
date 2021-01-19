

import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
import App from "./App.js"

/* import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; */

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";



ReactDOM.render (
  
   
      <BrowserRouter>
        <Switch>
          <Route path="/" ><App /></Route>{/* <Route path="/admin/Dashboard" /> */}
         {/*  <Route path="/rtl" render={(props) => <RTLLayout {...props} />} /> */}
          {/*  <Redirect from="/" to="/admin/dashboard" /> */}
        </Switch>
      </BrowserRouter>
   
  ,
  document.getElementById("root")
);


