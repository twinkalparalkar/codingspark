import UserList from './UserList'
function User(props) {
    console.log("ppp",props.Userdata)
    return (
        
        <ul> {
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
