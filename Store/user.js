import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({

    name:'UserRole',

    initialState:{
        currentRole: 'Shipper'
    },

    reducers:{
        changeUserRoleSuccess: ( state , action ) => {
            state.currentRole = action.payload
        }
    }

})

export default slice.reducer;

const { changeUserRoleSuccess } = slice.actions;

export const changeUserRole = (role) => async dispatch => {

    try {
        dispatch(changeUserRoleSuccess(role))
    } catch (error) {
        return console.error(error.message)
    }
    
}