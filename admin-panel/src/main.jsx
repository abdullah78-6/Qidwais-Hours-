import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import ArticleStore from './redux/store.js'
import {Toaster} from "react-hot-toast";
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ArticleStore}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      <Toaster/>
    </Provider>
    
  </StrictMode>,
)
