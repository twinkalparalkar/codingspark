import {useParams} from 'react-router-dom'

function ProductDetail(props){
    const param=useParams()
    const element=props.items.filter((item)=>(
        item.id===param.productId
    ))[0]
    console.log(element)
    return (
<div>
Product Price: {element.price}<br/>
Product Review: {element.review}

</div>
    )
}
export default ProductDetail;