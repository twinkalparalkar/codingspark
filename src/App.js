
import { useState } from 'react';
import './App.css';
import NewProduct from './component/NewProduct/NewProduct';
import Product from './component/Product/Product';
function App() {
  let Productdata=[]
  const [ProductData,setData]=useState(Productdata)
  

  const AddProductDataHandler=(newdata)=>{
    console.log('kl',newdata)
    setData((prev)=>{
      return [newdata,...prev]
    })

  }
  return (
    <div className="App">
      <NewProduct onAddProductData={AddProductDataHandler}/>
      <Product items={ProductData}/>
    </div>
  );
}

export default App;
