import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import "./App.css"
import React, { useContext } from "react";
import AuthPage from './component/AuthPage';

import Welcome from "./component/Welcome";
import ContextProvider from "./store/ContextProvider";
import {Switch,Route} from 'react-router-dom'
import Header1 from "./component/Header1";
import Contextapi from "./store/context-api";
import ForgetPassword from "./component/ForgetPassword";
function App() {
  const contctx=useContext(Contextapi)
  const Islogin=contctx.IsLoggedIn
  console.log(Islogin)
  return (
<div className="Main">
  <ContextProvider>
  <Header1/>
    <Switch>

    <Route path='/forgetpassword'>
    <ForgetPassword/>
  </Route>
      <Route path='/auth' exact>
        <AuthPage/> 
      </Route>

      <Route path="/home" exact>
        <Welcome/>
        
      </Route>
    </Switch> 
  </ContextProvider>   
</div>
  );
}

export default App;
