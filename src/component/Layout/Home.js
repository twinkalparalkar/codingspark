import { Container,Row,Col,Button } from "react-bootstrap"
function Home(){
    return (
<div>
    <div style={{backgroundColor:"gray",marginTop:"-15px",height:"180px",width:"100%",color:"white",
    fontSize:"30px",alignItems:"center"}}>
        <p style={{border:"solid 2px #56CCF2",width:"300px",marginLeft:"480px"}}>Get our Latest Album</p>
        <div style={{border:"solid 2px #56CCF2",borderRadius:"100%",width:"80px",height:"80px",marginLeft:"580px"}}>
        <div style={{border:"0",
        background: "transparent",
        boxSizing: "border-box",
        width: "0",
        height: "20px",
        borderColor:"transparent transparent transparent #56CCF2",
        transition: "100ms all ease",
        cursor: "pointer",
        borderStyle: "solid",
        borderWidth: "17px 0 17px 30px",margin:"20px 0px 0px 23px"}}>
        </div>
        </div>
    </div>
    <p style={{fontFamily:"Cursive",fontSize:"30px", padding:"40px"}}><b>TOURS</b></p>
    <Container style={{width:"75%"}}>
        <Row>
            <Col>JUL16</Col>
            <Col>DETROIT, MI</Col>
            <Col>DTE ENERGY MUSIC THEATRE</Col>
            <Col><Button>BUY TICKETS</Button></Col>
        </Row><hr/>
        <Row>
            <Col>JUL19</Col>
            <Col>TORONTO,ON</Col>
            <Col>BUDWEISER STAGE</Col>
            <Col><Button>BUY TICKETS</Button></Col>
        </Row><hr/>
        <Row>
            <Col>JUL 22</Col>
            <Col>BRISTOW, VA</Col>
            <Col>JIGGY LUBE LIVE</Col>
            <Col><Button>BUY TICKET</Button></Col>
        </Row><hr/>
    </Container>
</div>
    )
}
export default Home