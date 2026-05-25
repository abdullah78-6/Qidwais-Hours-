import {configureStore} from "@reduxjs/toolkit";
import article from "./slice.js";
const ClientStore=configureStore({
    reducer:{
        main:article
    }
})
export default ClientStore;