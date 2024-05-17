import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addedFriends: []
}

export const AddFriendSlice = createSlice({
    name: 'AddFriend',
    initialState,
    reducers: {
        addFriend: (state, action) => {

            state.addedFriends.push(action.payload)
        },
        removeFriend: (state, action) => {
            state.addedFriends=state.addedFriends.filter(i=>i.id.value!=action.payload.id.value)
        },

    },
})

// Action creators are generated for each case reducer function
export const { addFriend, removeFriend } = AddFriendSlice.actions

export default AddFriendSlice.reducer