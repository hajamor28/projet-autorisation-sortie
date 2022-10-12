import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import  axios from 'axios'

export const Register = createAsyncThunk('user/Register',async(newUser,{rejectWithValue})=>{
    try {
        const {data} = await axios.post('/api/users/register',newUser)
        return data
    } catch (error) {
       return rejectWithValue(error.response.data.message ?
          error.response.data.message :  error.response.data.errors)
    }
})

export const Login = createAsyncThunk('user/Login',async(user,{rejectWithValue})=>{
    try {
        const {data} = await axios.post('/api/users/login',user)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message ?
            error.response.data.message :  error.response.data.errors)
    }
})

const UserSlice = createSlice({
    name:'user',
    initialState:{
        isLoading:false,
        user: JSON.parse(localStorage.getItem('user')),
        Errors:null,
        LoginErrors : null,
        isAuth:Boolean(localStorage.getItem('isAuth')),
        token:localStorage.getItem('token')
    },
    reducers:{
        ClearErrors :(state)=>{
            state.Errors = null
            state.LoginErrors= null
        },
        LogOut : (state)=>{
            localStorage.clear()
            state.isAuth = false
            state.user = {}
            state.token = null
        }
        
    },
    extraReducers:{
        [Register.pending]:(state)=>{
            state.isLoading = true
        },
        [Register.fulfilled]:(state,{type,payload})=>{
            state.isLoading = false
            state.user = payload.newUser
            state.token = payload.token
            state.isAuth = true
            localStorage.setItem('user',JSON.stringify(payload.newUser))
            localStorage.setItem('token',payload.token)
            localStorage.setItem('isAuth',true)
        },
        [Register.rejected]:(state,{type,payload})=>{
            state.Errors = payload
        },
        [Login.pending]:(state)=>{
            state.isLoading = true
        },
        [Login.fulfilled]:(state,{type,payload})=>{
            state.isLoading = false
            state.user = payload.found
            state.token = payload.token
            state.isAuth = true
            localStorage.setItem('user',JSON.stringify(payload.found))
            localStorage.setItem('token',payload.token)
            localStorage.setItem('isAuth',true)
        },
        [Login.rejected]:(state,{type,payload})=>{
            state.LoginErrors = payload
        }

    }
})

export default UserSlice.reducer
export const {ClearErrors,LogOut}= UserSlice.actions 