import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import "./App.css"
import React from "react";
import AuthPage from './component/AuthPage';
import Header from "./component/Header1";
import Welcome from "./component/Welcome";
import ContextProvider from "./store/ContextProvider";
import {Switch,Route} from 'react-router-dom'
function App() {
  return (
<div className="Main">
  <ContextProvider>
  <Header/>
    <Switch>
      
      <Route path='/auth'>
        <AuthPage/> 
      </Route>

      <Route path="/" exact>
        <Welcome/>
      </Route>
    </Switch> 
  </ContextProvider>   
</div>
  );
}

export default App;
