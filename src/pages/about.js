import './about.css'
import SpeakersSection from '../components/SpeakersSection';
import ExecutiveLeaders from '../components/ExecutiveLeaders';
import Description from '../components/Description';
import WhoAreWe from '../components/WhoAreWe';
import { motion } from 'framer-motion';
export default function About(){
    return (<motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        // exit={{opacity:0}}>
        transition={{delay:0.65}}>
                <Description/>
                <WhoAreWe/>
                <ExecutiveLeaders/>
                <SpeakersSection/>
            </motion.div>
    );
}
