import {useState} from 'react'
import ProfileForm from './ProfileForm'
function Welcome(){
    const [isProfile,setProfile]=useState(false)
    const onChangeProfileHandler=()=>{
        setProfile(!isProfile)
    }

    return (
<div>
    <p>Welcome to App</p>
    {!isProfile && <button onClick={onChangeProfileHandler}>Your profile is incomplete ,Complete now.</button>}
    {isProfile && <ProfileForm onSubmit={onChangeProfileHandler}/>}
</div>


    )
}

export default Welcome;