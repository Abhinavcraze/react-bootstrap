import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './LoginonChange.jsx'
import Home from './HomeAbortController.jsx'
// Corrected the import path below
import HomeCreateContext from './HomeCreateContext.jsx' 
import Updater from './CounterUpdaterFunc.jsx'
import LoginUseContext from './LoginUseContext.jsx' 
import CounterUseContext from './CounterUseContext.jsx'
import CounterUseRef from './CounterUseRef.jsx'
import Dynamic from './DynamicPath.jsx'
import Post from './PostDynamicPath.jsx'
//npm install react-router-dom (to install react-router)
//to handle multiple pages react-router-dom is used
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import NotFound from './NotFound'


const routes = createBrowserRouter([
  {
    path : '/',
    element : <Home/>,   
    errorElement : <NotFound/>
  },
  {
    path : '/login',
    element : <Login/>
  },
  {
    path: '/updater',
    element : <Updater/>
  },
  {
    path: '/HomeContext',
    element : <HomeCreateContext/>
  },
  {
    path: '/LoginContext',
    element : <LoginUseContext/>
  },
  {
    path: '/Counter',
    element : <CounterUseContext/>
  },
  {
    path: '/Counteruseref',
    element : <CounterUseRef/>
  },
  {
    path: '/Dynamic',
    element : <Dynamic/>
  },
  {
    path: '/Post/:id',
    element : <Post/>
  },
  
]); 

{/*router is an object ,it use browser history API*/}


createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes}/>
)


{/*StrictMode is used for rechecking if there is an error */}