import "./App.css"

import {useState,useEffect} from "react"

import { BrowserRouter, Route,Link, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";


/* import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; */






function App () {

    function entrar() {

		return (<p>Hola</p>)

	}

	let [usuario,setUsuario] = useState("")

  function guardarUsuario(e) {
    setUsuario(e.target.value)
  }

    return (<BrowserRouter>
	<Route exact path="/">
        <div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" class="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label for="user" className="label">Usuario</label>
					<input id="user" type="text" className="input" onChange={guardarUsuario}/>
				</div>
				<div className="group">
					<label for="pass" className="label">Contraseña</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				
				<div className="group">
					<Link to ="/admin/dashboard"><button onClick={entrar} className="button">Entrar</button></Link>

                    
                    
				</div>
				
			</div>
			<div className="sign-up-htm">
				<div className="group">
					<label for="user" className="label">Usuario</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Contraseña</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Repetir contraseña</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Email</label>
					<input id="pass" type="text" className="input"/>
				</div>
				<div className="group">
                   
					<input type="submit" className="button" value="Registrarse"/>
                    
				</div>
				
				
			</div>
		</div>
	</div>
</div>
</Route>
<Switch>
          <Route path="/admin" render={() => <AdminLayout usuario={usuario}/>} />{/* <Route path="/admin/Dashboard" /> */}
         {/*  <Route path="/rtl" render={(props) => <RTLLayout {...props} />} /> */}
          {/*  <Redirect from="/" to="/admin/dashboard" /> */}
        </Switch>
   </BrowserRouter> )

}

export default App;