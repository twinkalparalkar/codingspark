import UserForm from "./UserForm"
function NewUser(props){

    const UserDataHandler=(user)=>{
        console.log(user)
        const user1={...user,
        id:Math.random()}
        props.OnAddUsers(user1)
    }
    return(
        <div>
           <UserForm OnSaveUserData={UserDataHandler}/>
        </div>
    )
}
export default NewUser