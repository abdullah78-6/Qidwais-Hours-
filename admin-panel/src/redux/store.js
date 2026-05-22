import {configureStore} from "@reduxjs/toolkit";
import article from "./slice.js";
const ArticleStore=configureStore({
    reducer:{
        main:article
    }
})
export default ArticleStore;