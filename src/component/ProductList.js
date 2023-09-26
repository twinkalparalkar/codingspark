import ProductItem from "./ProductItem"

function ProductList(props){
    return(
        <div>
        {props.items.map((product)=>(
            <ProductItem key={product.id} shoeName={product.shoeName}
            Description={product.Description}
            Price={product.Price}
            LargeNumber={product.LargeNumber}
            MediumNumber={product.MediumNumber}
            SmallNumber={product.SmallNumber}
            />
        ))}
        </div>
    )
}
export default ProductList