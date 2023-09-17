import ProductForm from "./ProductForm";
import Card from '../UI/Card'
function NewProduct(props){

    const ProductDataHandler=(data)=>{
        props.onAddProductData(data)
    }
    return (<Card>
        <ProductForm onSaveData={ProductDataHandler}/>
        </Card>)
}
export default NewProduct;