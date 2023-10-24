import ProductItem from "./ProductItem"

function ProductList(props){
    const LargeReduce=(id)=>{
        console.log(id)
        props.onLarge(id)
    }
    console.log(props.data)
    return(
        <div>
        <h3>List Of Tshirt</h3>
        {props.data.map((product)=>(
            <ProductItem Large={LargeReduce} Key={product.id} tshirtName={product.tshirtName}
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