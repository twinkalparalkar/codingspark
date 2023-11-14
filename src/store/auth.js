import {createSlice} from '@reduxjs/toolkit'

const initialAuthSate={isAuth:false,token:'',mailuser:""}


const AuthSlice=createSlice({
  name:'auth',
  initialState:initialAuthSate,
  reducers:{
    login(state,action){
      console.log(action.payload)
        state.isAuth=true
        state.token=action.payload.token
        state.mailuser=action.payload.mailofuser
    },
    logout(state){
        state.isAuth=false
        state.token=null
    }
  }
})
export const authActions=AuthSlice.actions

export default AuthSlice;