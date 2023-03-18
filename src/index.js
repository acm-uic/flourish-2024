import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import {motion} from 'framer-motion'
// import Home from './pages/home'
// import About from './pages/about'
// import Social from './pages/social'
// import EventDetails from './pages/eventdetails'
// import Contact from './pages/contact'
// import NotFound from './pages/notfound'
// import Layout from './pages/layout'
import {
    BrowserRouter,
    
} from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
        <AnimatedRoutes/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
