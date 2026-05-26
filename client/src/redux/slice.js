import {createSlice} from "@reduxjs/toolkit";
const articleslice=createSlice({
    name:"article",
    initialState:{
        loginstatus:false,backendemail:"",
       
        backendarticles:[],
        subscriber:{
            email:""
        },
        logininfo:{
            name:"",
            email:"",
            password:""
        },
        
        logintype:"login"

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
        },
        setlogininfo(state,action){
            const {name,value}=action.payload;
            state.logininfo[name]=value;
        },
        setlogintype(state,action){
            state.logintype=action.payload;
        }

    }

})
export const control=articleslice.actions;
export default articleslice.reducer;