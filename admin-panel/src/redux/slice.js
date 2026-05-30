import {createSlice} from "@reduxjs/toolkit";
const articleslice=createSlice({
    name:"article",
    initialState:{
        loginstatus:false,backendemail:"",addarticle:{
            title:"",
            content:"",
        },
        logininfo:{
            email:"",
            password:""

        },
        backendarticles:[],
        totalregestred:0,
        totalsubscribers:0,
        totalnoarticles:0

    },
    reducers:{
        setlogin(state,action){
            state.loginstatus=action.payload;

        },
        setarticle(state,action){
            const {name,value}=action.payload;
            state.addarticle[name]=value;

        },
        setlogininfo(state,action){
            const {name,value}=action.payload;
            state.logininfo[name]=value;
        },
        setbackendemail(state,action){
            state.backendemail=action.payload;
        },
        setbackendarticles(state,action){
            state.backendarticles=action.payload;
        },
        settotalnoarticles(state,action){
            state.totalnoarticles=action.payload;
        },
        settotalregestred(state,action){
            state.totalregestred=action.payload;
        },
        settotalsubscribers(state,action){
            state.totalsubscribers=action.payload;
        }


    }

})
export const control=articleslice.actions;
export default articleslice.reducer;