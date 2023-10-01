import { Card,Button } from "react-bootstrap";
import React,{ useContext} from "react";
import CartContext from "../../store/cart-context";
import './AlbumItem.css'

function AlbumItem(props){
    const cartCxt=useContext(CartContext)

    const AddItemHandler=()=>{
        const new_item={
            id:props.itemKey,
            title: props.title,
            price: props.price,
            imageUrl:props.imageUrl ,
            quantity:1
            }
        cartCxt.addItem({...new_item,})
        console.log("Cart context after adding item:",cartCxt.items);
    }
    return(
        <Card style={{ width: '18rem',border:"None"}}>
            <Card.Title>{props.title}</Card.Title>
            <div className="image-container ">
            <Card.Img style={{width:"250px",height:"250px"}} src={props.imageUrl} className="zoom-image" />
            </div>
             <Card.Body>
                
                <Card.Text>
                <span style={{marginLeft:"-60px"}}>Rs.{props.price}</span>
                <Button  style={{ backgroundColor:"#56CCF2",marginLeft:"60px"}} 
                onClick={AddItemHandler}>ADD TO CART</Button>
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}
export default AlbumItem;