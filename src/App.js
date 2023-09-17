import './App.css';
import NewUser from './component/NewUser/NewUser';
import User from './component/User/User';
import React, {useState} from 'react'
function App() {
    let UserData = []
    const [userdata, setUserData] = useState(UserData)
    const OnAddUserHandler = (user) => {
        setUserData((prev) => {
            return [
                ...prev,
                user
            ]
        })
    }
    return (
        <div>
            <header className='App'>
                <NewUser OnAddUsers={OnAddUserHandler}/>
                <User Userdata={userdata}/>
            </header>
        </div>
    );
}

export default App;
