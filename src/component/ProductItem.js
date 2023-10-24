import { useContext } from "react"
import CartContext from "../store/cart-contex"

function ProductItem(props){
    const cartctx=useContext(CartContext)
    const LargeHandler=(id)=>{
        if(props.LargeNumber>=1){
            console.log(props.Key,props.tshirtName,props.Price,props.LargeNumber)
            const product={id:props.Key,tshirtName:props.tshirtName,Price:props.Price,LargeNumber:1,SmallNumber:0,MediumNumber:0}
            cartctx.addItem(product)
        }
        console.log(cartctx)
    }
    const MediumHandler=(id)=>{
        if(props.MediumNumber>=1){
            console.log(props.Key,props.tshirtName,props.Price,props.MediumNumber)
            const product={id:props.Key,tshirtName:props.tshirtName,Price:props.Price,MediumNumber:1,SmallNumber:0,LargeNumber:0}
            cartctx.addItem(product)
        }
        console.log(cartctx)
    }
    const SmallHandler=(id)=>{
        if(props.SmallNumber>=1){
            console.log(props.Key,props.tshirtName,props.Price,props.SmallNumber)
            const product={id:props.Key,tshirtName:props.tshirtName,Price:props.Price,SmallNumber:1,LargeNumber:0,MediumNumber:0}
            cartctx.addItem(product)
        }
        console.log(cartctx)
    }
    return(
        <div>
        <li Key={props.id}>
         {props.tshirtName} &#160;-- &#160;
           {props.Description} &#160; -- &#160;
            {props.Price}&#160;
            <button onClick={LargeHandler}>Buy Large:{props.LargeNumber} </button>&#160;
            <button  onClick={MediumHandler}>Buy Medium:{props.MediumNumber}</button> &#160;
            <button  onClick={SmallHandler}>Buy Small:{props.SmallNumber}</button>
            </li>
        </div>
    )
}
export default ProductItem