import { Fragment } from "react";
import Header from "./component/Layout/Header";
import Intro from "./component/Layout/Intro";
import AvailableMeals from "./component/Meals/AvailableMeals";
import CartContent from "./component/Cart/CartContent";

function App() {
  return (
    <Fragment>
    <Header/>
    <Intro/>
    <AvailableMeals/>
    <CartContent/>
    </Fragment>
  );
}

export default App;
