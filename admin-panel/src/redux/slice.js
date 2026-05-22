import {createSlice} from "@reduxjs/toolkit";
const articleslice=createSlice({
    name:"article",
    initialState:{
        loginstatus:false,backendemail:"",addarticle:{
            title:"",
            content:"",
        }

    },
    reducers:{
        setlogin(state,action){
            state.loginstatus=action.payload;

        },
        setarticle(state,action){
            const {name,value}=action.payload;
            state.addarticle[name]=value;

        }

    }

})
export const control=articleslice.actions;
export default articleslice.reducer;