import { Fragment } from "react";
import Header from "./component/Layout/Header";
import Intro from "./component/Layout/Intro";
import AvailableMeals from "./component/Meals/AvailableMeals";

function App() {
  return (
    <Fragment>
    <Header/>
    <Intro/>
    <AvailableMeals/>
    </Fragment>
  );
}

export default App;
