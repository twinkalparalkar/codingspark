import './App.css';
import Header from './component/Layout/Header';
import AlbumList from './component/Layout/AlbumList';
import Footer from './component/Layout/Footer';
import CartProvider from "./store/CartProvider";

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import {Route,Switch,Redirect} from 'react-router-dom'
import About from './component/Layout/About';
import Home from './component/Layout/Home';
import Contact from './component/Layout/Contact';
import ProductDetail from './component/Layout/ProductDetail';
import AuthPage from './component/Auth/AuthPage';

let Dummy_data= [
  {
    id:"a1",
    title: 'Colors', 
    price: 100,
    imageUrl: ['https://prasadyash2411.github.io/ecom-website/img/Album%201.png','https://prasadyash2411.github.io/ecom-website/img/Album%202.png','https://prasadyash2411.github.io/ecom-website/img/Album%203.png','https://prasadyash2411.github.io/ecom-website/img/Album%204.png'],
    review:["Good Product","Best Quantity"]
  },
  {
    id:"a2",
  title: 'Black and white Colors',
  price: 50,
  imageUrl: ['https://prasadyash2411.github.io/ecom-website/img/Album%202.png','https://prasadyash2411.github.io/ecom-website/img/Album%203.png','https://prasadyash2411.github.io/ecom-website/img/Album%201.png','https://prasadyash2411.github.io/ecom-website/img/Album%204.png'],
  review:["bad Product","poor Quantity"]
  },
  {
    id:"a3",
  title: 'Yellow and Black Colors',
  price: 70,
  imageUrl: ['https://prasadyash2411.github.io/ecom-website/img/Album%203.png','https://prasadyash2411.github.io/ecom-website/img/Album%202.png','https://prasadyash2411.github.io/ecom-website/img/Album%201.png','https://prasadyash2411.github.io/ecom-website/img/Album%204.png'],
  review:["okay,not that much","Best Quantity"]
  },
  {
    id:"a4",
  title: 'Blue Color',
  price: 100,
  imageUrl: ['https://prasadyash2411.github.io/ecom-website/img/Album%204.png','https://prasadyash2411.github.io/ecom-website/img/Album%202.png','https://prasadyash2411.github.io/ecom-website/img/Album%203.png','https://prasadyash2411.github.io/ecom-website/img/Album%201.png'],
  review:["Nice","Best Quantity"]
  }
]

function App() {
  return (
    <CartProvider >
    <div className="App">
      <Header/>
      <Switch>
      <Route path='/auth'><AuthPage/></Route>
      <Route path='/' exact><Redirect to="/product"/></Route>
      <Route path='/product' exact><AlbumList items={Dummy_data}/></Route>
      <Route path='/about'><About/></Route>
      <Route path='/home'><Home/></Route>
      <Route path='/contact'><Contact/></Route>
      <Route path='/product/:productId' ><ProductDetail items={Dummy_data}/></Route>
      </Switch>
      <Footer/>
    </div>
    </CartProvider>
  );
}

export default App;
