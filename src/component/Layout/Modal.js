import { Modal,Button } from "react-bootstrap";
import './Modal.css'
function Modalcart(props){
    return (
<Modal show={props.show} onHide={props.onHide} style={{
    width: "400px",
    height: "700px",
    minHeight:"100vh",
    bottom: "0",
    display: "block", 
    margin: "20px 0px 0px 870px",
    textAlign: "center",
  }}>
  
    <Modal.Header closeButton>
        <Modal.Title style={{marginLeft:"145px"}}>CART</Modal.Title>
    </Modal.Header>
    <Modal.Body><b>
        Item Price Quantity<br/>
        <span>Total Rs.5000</span></b><br/><br/>
        <Button variant="primary" style={{marginBottom:"300px"}}  onClick={props.onHide}>
           PURCHASE
        </Button>
    </Modal.Body>
</Modal>
    )
}
export default Modalcart;