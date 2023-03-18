import './home.css'
import SponsorsSection from '../components/SponsorsSection'
import HomeHeader from '../components/HomeHeader/'
import StaggeredSections from '../components/StaggeredSections/staggeredSections.js'
import {WhatDoIGetOutOfThis, FAQs} from '../content/StaggeredTextComponents.js'
import MemberOrganizationSection from '../components/MemberOrganizationsSection'
import { motion} from "framer-motion"; 

export default function Home(){
    return (<motion.div className='text-center space-y-10 animate fade-in'
    initial={{opacity:0}}
      animate={{opacity:1}}
      // exit={{opacity:0}}
      transition={{ delay: 0.65 }}
      // transition={{ duration: 3 }}
      >
      
        <HomeHeader />
        
        <div className='container mx-auto'>
        
          <h1>What Do I Get Out of This?</h1>
          <StaggeredSections sections={WhatDoIGetOutOfThis} />
          <SponsorsSection />
          <h1>FAQs</h1>
          <StaggeredSections sections={FAQs} />
          <MemberOrganizationSection />
        </div>
        
    </motion.div>)
}
