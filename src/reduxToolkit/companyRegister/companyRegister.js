import {
    createSlice
} from "@reduxjs/toolkit"
import { addUser, companyLocation, yourCompany } from "./companyRegisterActions"
import { registerCompany } from "reduxToolkit/extraReducers"
// import { addCompanyContacts, addCompanyInformation, addCompanyLocation, createCompanyUserPost } from "reduxToolkit/extraReducers"


const initialState = {
    activeDote: {
        id: 1,
        label: "Company Information"
    },
    activeCard: {
        id: 1,
        label: "information"
    },
    loading: false,
    error: null,
    contactsIsSuccess: '',
    userData: {},
    data: null
}

const companyRegister = createSlice({
    name: "companyRegister",
    initialState,
    reducers: {
        activeDoteAction: (state, {
            payload
        }) => {
            state.activeDote = payload[0]
            state.activeCard = payload[1]
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addUser, (state, action) => {
            state.userData = action.payload
        })
        builder.addCase(yourCompany, (state, { payload }) => {
            state.userData = { ...state.userData, ...payload }
        })
        builder.addCase(companyLocation, (state, { payload }) => {
            state.userData = { ...state.userData, ...payload }
        })
        builder.addCase(registerCompany.pending, (state) => {
            state.loading = true
        })
        builder.addCase(registerCompany.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
        builder.addCase(registerCompany.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export const {
    activeDoteAction,
    activeCardAction
} = companyRegister.actions

export default companyRegister.reducer