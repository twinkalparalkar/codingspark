import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import "./App.css"
// import React, { useContext } from "react";
import AuthPage from './component/AuthPage';

import Welcome from "./component/Welcome";
// import ContextProvider from "./store/ContextProvider";
import {Switch,Route} from 'react-router-dom'
import Header1 from "./component/Header1";
// import Contextapi from "./store/context-api";
import ForgetPassword from "./component/ForgetPassword";

import { useSelector} from 'react-redux';
// import {authActions} from '../store/auth'

function App() {
  // const contctx=useContext(Contextapi)
  // const Islogin=contctx.IsLoggedIn
  // const dispatch=useDispatch()
  const isAuth=useSelector((state)=>state.auth.isAuth)

  console.log(isAuth)
  return (
<div className="Main">
    <Header1/>
    <Switch>

      <Route path='/forgetpassword'>
        <ForgetPassword/>
      </Route>
      {!isAuth &&<Route path='/auth' exact>
        <AuthPage/> 
      </Route>}

      {isAuth &&<Route path="/home" exact>
        <Welcome/>
      </Route>}
    </Switch> 
   
</div>
  );
}

export default App;
