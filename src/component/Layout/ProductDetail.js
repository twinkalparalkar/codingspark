import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row,Col } from 'react-bootstrap';

function ProductDetail(props) {
   
    const { productId } = useParams();
    const element = props.items.find((item) => item.id === productId);
    console.log("ooppp",element.imageUrl[0], productId)
    const [mainImage,setMainImage]=useState(element.imageUrl[0])
   
    if (!element) {
        return <div>Product not found</div>;
    }
    if (!element.imageUrl || !Array.isArray(element.imageUrl)) {
        return <div>No images available for this product</div>;
    }

   
    let items=element.review.map((item)=>(
        <li>{item}</li>
    ))
    return (
<div>
<Container>
    <Row>
        <Col style={{marginLeft: "-300px"}}>
        <Container>
            <div className='main-screen'>
                <img style={{margin:"20px 20px 0px 400px",width:"400px",height:"400px"}} src={mainImage} alt={`main-image1`} />
            </div>
            <div >
                <Col style={{margin:"-380px 0px 0px -200px"}}>
                {element.imageUrl.map((current, index) => (
                    <figure key={index}>
                        <img style={{width:"100px",height:"100px"}} src={current}
                        alt={`image1-${index}`} className='box-image-style' 
                        onClick={()=>setMainImage(current)}/>
                    </figure>
                ))}
                </Col>
            </div>
            
        </Container>
        </Col>
    </Row>
    <Row>
        <Col style={{margin: "-400px 0px 0px 500px",}}>
            <h2>{element.title}</h2>
            <h5>Product Price: {element.price}</h5>
            <br />
            Product Review:
            {items}
        </Col>
    </Row>
</Container>
            
           

            
        </div>
    );
}

export default ProductDetail;
