import { configureStore } from "@reduxjs/toolkit";

import  UserReducer  from './UserSlice'
import DemandReducer from './DemandeSlice'

export const Store = configureStore({
reducer: {
    User: UserReducer,
    Demand : DemandReducer
}


})