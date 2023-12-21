import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice(
    {
        name:'user',
        // If there are no user then the initial State is null
        initialState:null,
        reducers:
        {
            addUser:(State,action) =>
            {
              //It will Add the userdetails based on the action and the initial State is "User data"(i.e action.payload)
               return action.payload;
            },

            removeUser:(State,action) =>
            {
                //If the user has been removed from the store
                return null;
            }
        }
    }
)

// Exported the Actions like adduser and removeuser from "action file"
export const {addUser,removeUser}=userSlice.actions;

// Exported the Reducers from "UserSlice file"
export default userSlice.reducer;