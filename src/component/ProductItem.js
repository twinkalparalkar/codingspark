
function ProductItem(props){
    return(
        <div>
        <li key={props.id}> {props.shoeName} &#160;-- &#160;
           {props.Description} &#160; -- &#160;
            {props.Price}&#160;
            <button>Buy Large:{props.LargeNumber}</button>&#160;
            <button>Buy Medium:{props.MediumNumber}</button> &#160;
            <button>Buy Small:{props.SmallNumber}</button>
            </li>
        </div>
    )
}
export default ProductItem