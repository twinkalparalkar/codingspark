import Card from "../UI/Card";

const UserList=(props)=>{
    return(
        <li>
        <Card>{props.username} ---{props.age}</Card>  
        </li>
    )
}
export default UserList;