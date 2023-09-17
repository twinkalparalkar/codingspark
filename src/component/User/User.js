import UserList from './UserList'
import './User.css'
function User(props) {
    console.log("ppp",props.Userdata)
    return (
        
        <ul className='ul'>
        <h3>List of User in Team: </h3>
         {
            props.Userdata.map((user) => (
                <UserList key={
                        user.id
                    }
                    username={
                        user.username
                    }
                    age={
                        user.age
                    }/>
            ))
        } </ul>
    )
}
export default User;
