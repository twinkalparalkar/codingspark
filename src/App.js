
import { useState } from 'react';
import HeaderCartButton from './component/HeaderCartButton';
import ProductForm from './component/ProductForm';
import ProductList from './component/ProductList';
import CartProvider from './store/CartProvider';
import CartContent from './component/Cart/CartContent';

function App() {
  const [listProduct,setproduct]=useState([])
  const [IsCart,setCart]=useState(false)
  const OnAddData=(data)=>{
    console.log(data)
    setproduct((prev)=>{
      return [...prev,data]
    })
  }
  const onCartHadler=(IsCart)=>{
    console.log(IsCart)
    setCart(IsCart)
  }
  const OnCancelHaddler=(IsCart)=>{
    setCart(IsCart)
  }
  return (
<div className="App">
<CartProvider>
  <HeaderCartButton OpenCart={onCartHadler}/>
  {IsCart && <CartContent OnCancel={OnCancelHaddler}/>}
  <ProductForm onAdd={OnAddData}/>
  <hr/>
  <hr/>
  <ProductList data={listProduct} />
</CartProvider>
</div>
  );
}

export default App;
