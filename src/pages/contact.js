import './contact.css';
import SponsorsSection from '../components/SponsorsSection';
import ContactUs from "../components/ContactUs";
import { motion } from 'framer-motion';
export default function Contact(){
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        // exit={{opacity:0}}
        transition={{ delay: 0.65 }}
        >
            <SponsorsSection/>
            <ContactUs/>
        </motion.div>
    )
}
