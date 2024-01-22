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
import Header from './components/Header';
import { store,persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PersistGate persistor={persistor}>
  <Provider store={store}>
<App/>
  </Provider>
  </PersistGate>

);