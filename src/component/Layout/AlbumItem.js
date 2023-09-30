import { Card,Button } from "react-bootstrap";
import './AlbumItem.css'
function AlbumItem(props){
    return(
    
        <Card style={{ width: '18rem',border:"None"}}>
            <Card.Title>{props.title}</Card.Title>
            <div className="image-container ">
            <Card.Img style={{width:"250px",height:"250px"}} src={props.imageUrl} className="zoom-image" />
            </div>
             <Card.Body>
                
                <Card.Text>
                <span style={{marginLeft:"-60px"}}>Rs.{props.price}</span>
                <Button  style={{ backgroundColor:"#56CCF2",marginLeft:"60px"}}>ADD TO CART</Button>
                </Card.Text>
                
            </Card.Body>
        </Card>
        
    )
}
export default AlbumItem;