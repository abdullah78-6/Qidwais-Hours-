import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Toaster} from "react-hot-toast";
import {Provider} from "react-redux"
import ClientStore from './redux/store.js'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Detail from './pages/details/details.jsx';
import Display from './components/display-article/display.jsx';
import Hero from './components/hero/hero.jsx';
const url="http://localhost:9000";
const router=createBrowserRouter([
  
  {
    path:"/",
    element:<App />,
    children:[
      {
        index:true,
        element:(
          <>
          <Hero/>
          <Display url={url} />
          </>
        )
      },
      {
        path:"/det",
        element:<Detail url={url}/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ClientStore}>
  <RouterProvider router={router}>

  </RouterProvider>
    

    <Toaster/>
    </Provider>
  </StrictMode>,
)
