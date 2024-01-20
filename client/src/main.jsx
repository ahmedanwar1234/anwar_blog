import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import ContactPage from './routes/ContactPage';
import About from './routes/About';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Dashboard from './routes/Dashboard';
import Projects from './routes/Projects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/contact',
    element:<ContactPage/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/signin',
    element:<SignIn/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  },
  {
    path:'/projects',
    element:<Projects/>,
    errorElement:<div>error</div>,
 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
