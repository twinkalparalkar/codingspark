import React,{useState} from 'react'
function ProductForm(props){
    const [enteredProductId,setProductId]=useState('')
    const [enteredPrice,setPrice]=useState('')
    const [enteredProductName,setProductName]=useState('')
    const [enteredCategory,setCategory]=useState('')

    const ChangeProductIdHandler=(e)=>{
        setProductId(e.target.value)
    }

    const ChangePriceHandler=(e)=>{
        setPrice(e.target.value)
    }
    const ChangeProductNameHandler=(e)=>{
        setProductName(e.target.value)
    }
    const ChangeCategoryHandler=(e)=>{
        setCategory(e.target.value)
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
    }
    return (<div>
        <form onSubmit={onSubmitHandler}>
                <label htmlFor='ProductId'>Product ID:</label><br/>
                <input id="productId" type="number"
                    value={enteredProductId}
                    onChange={ChangeProductIdHandler}/><br/>

                <label htmlFor='price'>Selling Price:</label><br/>
                <input id="price" type="number"
                    value={enteredPrice}
                    onChange={ChangePriceHandler}/><br/>

                <label htmlFor='ProductName'>Product Name:</label><br/>
                <input id="product" type="text"
                    value={enteredProductName}
                    onChange={ChangeProductNameHandler}/><br/>

                <label htmlFor='Category'>Choose Category:</label>
                <select id="Category"
                    value={enteredCategory}
                    onChange={ChangeCategoryHandler}>
                    <option>Electronic</option>
                    <option>Food</option>
                    <option>Skincare</option>
                    </select><br/><br/>

                <input type="submit" className='button' value="Add User"/><br/>
            </form>
        </div>)
}
export default ProductForm;