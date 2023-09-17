import ProductList from "./ProductList";
import './Product.css'
function Product(props){
    const electronic=props.items.filter((product)=>{
        return product.category==="Electronic"
    })

    const food=props.items.filter((product)=>{
        return product.category==="Food"
    })
    const skincare=props.items.filter((product)=>{
        return product.category==="Skincare"
    })

    return (<ul className="ul">
    <h4>Product List:</h4>

        <h3>Electronic :</h3>
        {electronic.map((product)=>(
            <ProductList 
            key={product.productid} 
            name={product.productname}
            price={product.price}
            category={product.category}/>))}

        <h3>Food :</h3>
        {food.map((product)=>(
            <ProductList 
            key={product.productid} 
            name={product.productname}
            price={product.price}
            category={product.category}/>))}

        <h3>Skincare:</h3>
        {skincare.map((product)=>(
            <ProductList 
            key={product.productid} 
            name={product.productname}
            price={product.price}
            category={product.category}/>))}
        </ul>)
}
export default Product;