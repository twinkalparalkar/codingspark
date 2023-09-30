import { Modal,Button, Container,Row,Col } from "react-bootstrap";
import './Modal.css'
function Modalcart(props){
    const cartElements = [
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
        }]
        
        
    return (
<Modal  show={props.show} onHide={props.onHide} style={{
    width: "500px",
    height: "700px",
    minHeight:"100vh",
    bottom: "0",
    display: "flex", 
    margin: "20px 0px 0px 800px",
    textAlign: "center",
  }}>
  
    <Modal.Header closeButton>
        <Modal.Title style={{marginLeft:"145px"}}>CART</Modal.Title>
    </Modal.Header>
    <Modal.Body><b>
    <Container>
        <Row>
            <Col>Item<hr/></Col>
            <Col>Price<hr/></Col>
            <Col>Quantity<hr/></Col>
        </Row>
        {cartElements.map((item)=>(
            <Row>
                <Col>
                    <img style={{width:"50px",height:"50px"}} src={item.imageUrl} alt="item"/>
                    {item.title}<hr/>
                </Col>
                <Col>
                    <p style={{marginTop: "30px"}}>{item.price}</p><hr/>
                </Col>
                <Col>
                    <span style={{padding:"7px",border:"solid 2px #56CCF2",marginRight:"10px"}}>{item.quantity}</span>
                    <Button variant="danger">Remove</Button>
                    <hr/>
                </Col>
            </Row>
        ))}
    </Container>
       <br/>
        <span>Total Rs.5000</span></b><br/><br/>
        <Button variant="primary" style={{marginBottom:"300px"}}  onClick={props.onHide}>
           PURCHASE
        </Button>
    </Modal.Body>
</Modal>
    )
}
export default Modalcart;