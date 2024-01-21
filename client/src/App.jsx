
import './App.css'
import { Button } from 'flowbite-react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Projects from './routes/Projects';
import SignIn from './routes/SignIn';

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
      </Routes>
    </BrowserRouter>
 
    </>
  )
}

export default App
