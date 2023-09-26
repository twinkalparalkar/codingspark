
import { useState } from 'react';
import './App.css';
import ProductForm from './component/ProductForm';
import ProductList from './component/ProductList';
import CartContent from './component/Cart/CartContent';
let Dummy=[]
function App() {
  const [Productlist,setProduct]=useState(Dummy)

  const OnAddProductData=(data)=>{
    console.log("kk",data)
    setProduct((pre)=>{
    return [...pre,data]})
  }
  return (
    <div>
    <div className="header" ><header ><h2>Shoe Shopping</h2>
    <CartContent/>
    </header></div>
    
    <div className="ProductForm"><ProductForm  onAdd={OnAddProductData}/></div>
    <hr/>
    <ProductList items={Productlist}/>
    </div>
  );
}

export default App;
