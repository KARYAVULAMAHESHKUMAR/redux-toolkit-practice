
import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";//  axios is used  to call external apis in application
import { createAsyncThunk } from "@reduxjs/toolkit";


//creating the asynchronuos Method fro callin an APi

export const addUser = createAsyncThunk('user/addUser', async(user) => {//async 

    const response = await axios.post("https://jsonplaceholder.typicode.com/posts",user)// awiat is used to wait for the response from the api 
    return response.data
})

export const fetchUsers=createAsyncThunk('users/fetchUsers', async(user) =>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/1",user)
    return [response.data]
})



const userSlice =createSlice({

    name:'users',
    initialState:{
        users:[],
        error:null,
        status:'idel',
        addingUserstatus:'idel'
    },
    reducers:{
 
    },
    extraReducers: (builder)=>{
        builder
            .addCase(fetchUsers.pending,(state,action) =>{
                state.status ='loading'

            })
            .addCase(fetchUsers.fulfilled ,(state,action)=>{
                state.status ='success'
                state.users=action.payload
                

            })
            .addCase(fetchUsers.rejected,(state,action) =>{
                state.status ='failed'
                state.error =action.error.message
            })

        .addCase(addUser.pending,(state)=>{//by using this state we  can access the initialstate data initial state data access vuntadhi e state ande parameter ki
                state.addingUserstatus ='loading'

        })
        .addCase(addUser.fulfilled,(state,action) =>{//action ante api lo manam return chesina data ekkada action lo manaki vuntadhi
                state.addingUserstatus ='success'

            //action.payload will constain response from the api
            state.users.push(action.payload)

        })
        .addCase(addUser.rejected,(state,action) =>{
                state.addingUserstatus ='failed'

        })
    }
                

   

})

export default userSlice.reducer;