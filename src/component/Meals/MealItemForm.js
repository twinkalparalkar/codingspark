import {useContext} from 'react';
import {useState} from 'react'
import './MealItemForm.css'
import CartContext from '../../store/cart-contex';

function MealItemForm(props) {
    const [quantity, setQuantity] = useState(1);
const handleQuantityChange = (event) => {
  setQuantity(event.target.value);
};
    const cartctx = useContext(CartContext)
    const AddItemHandler = (e) => {
        e.preventDefault()
        const quantity = document.getElementById('amount_' + props.id).value
        cartctx.addItem({...props.item1,quantity: quantity})
        console.log("kkk", cartctx, props.item1, {...props.item1,quantity: quantity})
    }
    return (
        <div>
            <form className='form'>
                <b>
                    Amount
                </b>
                <input id={
                        'amount_' + props.id
                    }
                    label="Amount"
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}/>
                <br/>
                <button onClick={AddItemHandler}>+ Add</button>
            </form>
        </div>
    )
}
export default MealItemForm;
