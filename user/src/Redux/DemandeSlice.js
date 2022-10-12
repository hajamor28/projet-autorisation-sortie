import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import  axios from 'axios'

export const DeleteDemandes = createAsyncThunk('demande/DeleteDemandes', async(id,{rejectWithValue,dispatch})=>{
    try {
        const {data} = await axios.delete(`/api/demandes/${id}`,{headers: {token: localStorage.getItem('token')}})
        dispatch(GetMesDemandes())
        return data
        
    } catch (error) {
        return rejectWithValue(error.response.data.message ?
            error.response.data.message :  error.response.data.errors)
    }
})

export const UpdateDemandsStatus = createAsyncThunk('demande/UpdateDemandsStatus', async({id,status},{rejectWithValue,dispatch})=>{
    try {
        const {data} = await axios.put(`/api/demandes/${id}`,{status},{headers: {token: localStorage.getItem('token')}})
        dispatch(GetAllDemands())
        return data
        
    } catch (error) {
        return rejectWithValue(error.response.data.message ?
            error.response.data.message :  error.response.data.errors)
    }
})

export const GetMesDemandes = createAsyncThunk('demande/GetMesDemandes', async(_,{rejectWithValue})=>{
    try {
        const {data} = await axios.get('/api/demandes/mydemands',{headers: {token: localStorage.getItem('token')}})
        return data
        
    } catch (error) {
        return rejectWithValue(error.response.data.message ?
            error.response.data.message :  error.response.data.errors)
    }
})

export const GetAllDemands = createAsyncThunk('demande/GetAllDemands', async(_,{rejectWithValue})=>{
    try {
        const {data} = await axios.get('/api/demandes/',{headers: {token: localStorage.getItem('token')}})
        return data
        
    } catch (error) {
        return rejectWithValue(error.response.data.message ?
            error.response.data.message :  error.response.data.errors)
    }
})


export const AddDemande = createAsyncThunk('demande/AddDemande',async(newDemande,{rejectWithValue})=>{

    try {
        const {data} = await axios.post('/api/demandes/',newDemande,{headers: {token: localStorage.getItem('token')}})
        return data
    } catch (error) {
       return rejectWithValue(error.response.data.message ?
          error.response.data.message :  error.response.data.errors)
    }
})
const DemandeSlice = createSlice({
    name:'demande',
    initialState:{
        isLoading:false,
        Errors:null,
        msg:null,
        demands: [],
        myDemands :[]
    },
    extraReducers:{
        [AddDemande.pending]: (state)=>{
            state.isLoading = true
        },
        [AddDemande.fulfilled]: (state,{type,payload})=>{
            state.isLoading = false
            state.msg = payload.msg
        },
        [AddDemande.rejected]: (state,{type,payload})=>{
            state.Errors = payload
        },
        [GetAllDemands.pending]: (state)=>{
            state.isLoading = true
        },
        [GetAllDemands.fulfilled]: (state,{type,payload})=>{
            state.isLoading = false
            state.demands = payload
        },
        [GetAllDemands.rejected]: (state,{type,payload})=>{
            state.Errors = payload
        },
        [GetMesDemandes.pending]: (state)=>{
            state.isLoading = true
        },
        [GetMesDemandes.fulfilled]: (state,{type,payload})=>{
            state.isLoading = false
            state.myDemands = payload
        },
        [GetMesDemandes.rejected]: (state,{type,payload})=>{
            state.Errors = payload
        },

        [UpdateDemandsStatus.pending]: (state)=>{
            state.isLoading = true
        },
        [UpdateDemandsStatus.fulfilled]: (state,{type,payload})=>{
            state.isLoading = false
            state.msg = payload.msg
        },
        [UpdateDemandsStatus.rejected]: (state,{type,payload})=>{
            state.Errors = payload
        },
        [DeleteDemandes.pending]: (state)=>{
            state.isLoading = true
        },
        [DeleteDemandes.fulfilled]: (state,{type,payload})=>{
            state.isLoading = false
            state.msg = payload.msg
        },
        [DeleteDemandes.rejected]: (state,{type,payload})=>{
            state.Errors = payload
        },
        
        
    }
})

export default DemandeSlice.reducer
