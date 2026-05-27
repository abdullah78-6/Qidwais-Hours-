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
        
        logintype:"login",
        likes:null,
        article:"",
        id:"",
        userlikestatus:false,


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
        },
        setarticle(state,action){
            state.article=action.payload;
        },
        setlikes(state,action){
            state.likes=action.payload;
        },
        setid(state,action){
            state.id=action.payload;
        },
        setuserlikestatus(state,action){
            state.userlikestatus=action.payload;
        }

    }

})
export const control=articleslice.actions;
export default articleslice.reducer;