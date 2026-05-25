import {createSlice} from "@reduxjs/toolkit";
const articleslice=createSlice({
    name:"article",
    initialState:{
        loginstatus:false,backendemail:"",
       
        backendarticles:[],
        subscriber:{
            email:""
        }

    },
    reducers:{
        setlogin(state,action){
            state.loginstatus=action.payload;

        },
        setbackendemail(state,action){
            state.backendemail=action.payload;
        },
        setbackendarticles(state,action){
            state.backendarticles=action.payload;
        },
        setsubscriber(state,action){
            const {name,value}=action.payload;
            state.subscriber[name]=value
        }

    }

})
export const control=articleslice.actions;
export default articleslice.reducer;