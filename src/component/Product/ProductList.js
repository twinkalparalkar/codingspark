import Card from "../UI/Card";

function ProductList(props){
    return (<Card>
        <li>
        {props.name}  - {props.price} - <b>{props.category}</b>
        </li>
        </Card>)
}
export default ProductList;