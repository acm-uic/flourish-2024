import React from 'react'
import {
    Routes,
    Route,
    useLocation
} from 'react-router-dom';
import Home from '../pages/home'
import About from '../pages/about'
import Social from '../pages/social'
import EventDetails from '../pages/eventdetails'
import Contact from '../pages/contact'
import NotFound from '../pages/notfound'
import Layout from '../pages/layout';
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const Location =useLocation();
    return (
    <AnimatePresence>
            <Routes location={Location} key={Location.pathname}>
            <Route path="/" element={<Layout />}>
                <Route index  element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="eventdetails" element={<EventDetails />}></Route>
                <Route path="contact" element={<Contact />}></Route>
                <Route path="social" element={<Social />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Route>
        </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes
