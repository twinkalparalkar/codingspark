import { Fragment } from "react";
import {useState} from "react";
import Header from "./component/Layout/Header";
import Intro from "./component/Layout/Intro";
import AvailableMeals from "./component/Meals/AvailableMeals";
import CartContent from "./component/Cart/CartContent";


function App() {
  let [Iscart1,setCart]=useState(false)
  const OnCartHandler=(IsCart)=>{
    setCart(IsCart)
    
  }
  const OnCancelHandler=(IsCart)=>{
    setCart(IsCart)
  }
  return (
    <Fragment>
    <Header OnCart={OnCartHandler}/>
    <Intro/>OnCart
    <AvailableMeals/>
    {Iscart1 && <CartContent OnCancel={OnCancelHandler}/>}
    </Fragment>
  );
}

export default App;
