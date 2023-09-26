import {useState} from 'react'
const ProductForm=(props)=>{
    const [shoeName,setShoe]=useState("")
    const shoeNameHandler=(e)=>{setShoe(e.target.value)}
    const [Description,setDescription]=useState("")
    const DescriptionHandler=(e)=>{setDescription(e.target.value)}
    const [Price,setPrice]=useState("")
    const PriceHandler=(e)=>{setPrice(e.target.value)}
    const [LargeNumber,setLargeNumber]=useState("")
    const LargeNumberHandler=(e)=>{setLargeNumber(e.target.value)}
    const [MediumNumber,setMediumNumber]=useState("")
    const MediumNumberHandler=(e)=>{setMediumNumber(e.target.value)}
    const [SmallNumber,setSmallNumber]=useState("")
    const SmallNumberHandler=(e)=>{setSmallNumber(e.target.value)}

    const OnAddPoduct=(e)=>{
        e.preventDefault()
       const data={id:Math.random(),shoeName:shoeName,Description:Description,Price:Price,LargeNumber:LargeNumber,MediumNumber:MediumNumber,SmallNumber:SmallNumber }
      
       props.onAdd(data)
       setShoe("")
       setDescription("")
       setPrice("")
       setLargeNumber("")
       setMediumNumber("")
       setSmallNumber("")
    }
    return (
        <form onSubmit={OnAddPoduct}>
        <label>Shoe Name</label>
        <input type="text" value={shoeName} onChange={shoeNameHandler}/>

        <label>Description</label>
        <input type="text" value={Description} onChange={DescriptionHandler}/>

        <label>Price</label>
        <input type="number" value={Price} onChange={PriceHandler}/>
        <h4>Quantity Available:</h4>
        <label>L</label>
        <input type="number"  value={LargeNumber} onChange={LargeNumberHandler}/>
        <label>M</label>
        <input type="number"  value={MediumNumber} onChange={MediumNumberHandler}/>
        <label>S</label>
        <input type="number" value={SmallNumber} onChange={SmallNumberHandler}/>
        <button type="submit">Add Product</button>
        </form>
    )
}

export default ProductForm;