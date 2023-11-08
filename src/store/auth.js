import {createSlice} from '@reduxjs/toolkit'

const initialAuthSate={isAuth:false,token:''}


const AuthSlice=createSlice({
  name:'auth',
  initialState:initialAuthSate,
  reducers:{
    login(state,action){
        state.isAuth=true
        state.token=action.payload
    },
    logout(state){
        state.isAuth=false
        state.token=null
    }
  }
})
export const authActions=AuthSlice.actions

export default AuthSlice;