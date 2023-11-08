
import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from './auth'

const store = configureStore({
  reducer:{auth:AuthSlice.reducer}
})

export default store;
