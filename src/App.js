
import {useState} from "react";
import Header from "./component/Layout/Header";
import Intro from "./component/Layout/Intro";
import AvailableMeals from "./component/Meals/AvailableMeals";
import CartContent from "./component/Cart/CartContent";
import CartProvider from "./store/CartProvider";


function App() {
  let [Iscart1,setCart]=useState(false)
  const OnCartHandler=(IsCart)=>{
    setCart(IsCart)
    
  }
  const OnCancelHandler=(IsCart)=>{
    setCart(IsCart)
  }
  return (
    <CartProvider>
    <Header OnCart={OnCartHandler}/>
    <Intro/>
    <AvailableMeals/>
    {Iscart1 && <CartContent OnCancel={OnCancelHandler}/>}
    </CartProvider>
  );
}

export default App;
