
import './App.css'
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Projects from './routes/Projects';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Footer from './components/Footer';
import Dashboard from './routes/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteAdmin from './components/PrivateRouteAdmin';
import CreatePost from './components/CreatePost';
import UpdatePost from './routes/UpdatePost';

function App() {

  return (
    <> 
     <BrowserRouter >
    <Header/>
    
      <Routes>
        <Route path="/" element={<Home/>}/> {/* 👈 Renders at /app/ */}
        <Route path="/about" element={<About/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/projects" element={<Projects/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/sign-in" element={<SignIn/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/sign-up" element={<SignUp/>} /> {/* 👈 Renders at /app/ */}
        <Route element={<PrivateRoute/>}>
        <Route path="/dashboard" element={<Dashboard/>} /> {/* 👈 Renders at /app/ */}
        </Route>
        <Route element={<PrivateRouteAdmin/>}>
        <Route path="/create-post" element={<CreatePost/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/update-post/:id" element={<UpdatePost/>} /> {/* 👈 Renders at /app/ */}
</Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
 
    </>
  )
}

export default App
