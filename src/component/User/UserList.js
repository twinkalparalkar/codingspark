import Card from "../UI/Card";

const UserList=(props)=>{
    return(
        <li>
        <Card>{props.username}  -  {props.age} year old</Card>  
        </li>
    )
}
export default UserList;