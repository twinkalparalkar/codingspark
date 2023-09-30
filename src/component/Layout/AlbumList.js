import AlbumItem from "./AlbumItem";
import { Container,Row,Col,Button } from "react-bootstrap";
function AlbumList(props){
    const items=props.items
    function chunkedArr(arr,chunksize){
        let chunkArray=[]
        for(let i=0;i<arr.length;i+=chunksize){
            chunkArray.push(arr.slice(i,i+chunksize))
        }
        return chunkArray
    }
    const chunkedArray=chunkedArr(items,2)

    return(
<div>
    <p style={{fontFamily:"Cursive",fontSize:"30px", padding:"40px"}}><b>MUSIC</b></p>
    <Container>
    {chunkedArray.map((row,rowIndex)=>(
        <Row key={rowIndex} style={{marginLeft:"235px",paddingBottom: "40px"}}>
            {row.map((item)=>
                <Col xs={5} key={item.id}>
                    <AlbumItem itemKey={item.id} 
                    title={item.title} 
                    price={item.price} 
                    imageUrl={item.imageUrl}/>
                </Col>
                )
            }
        </Row>))}
    </Container>  
    <Button style={{backgroundColor:"#777",color:"#56CCF2"}}><b>See the cart</b></Button>  
</div>
    )
}
export default AlbumList;