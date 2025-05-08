import React from 'react'
import Banner from '../Banner/Banner'
import WhatWeDoSection from '../WhatDo/WhatDo'
import ClientsSection from '../Client/OurClient'
import Choose from '../Choose/Choose'
import CreatingProcess from '../CreatingProcess/CreatingProcess'
import Questions from '../QUestion/Questions'
import WebDesignSteps from '../WebStepdesign/WebStepdesign'
import Webcontact from '../Webcontact/Webcontact'
import DeviceShowcase from '../DeviceShowcase/DeviceShowcase'
import CyberSecuritySection from '../CyberSecuritySection/CyberSecuritySection'
import ClientTestimonial from '../ClientTestimonial/ClientTestimonial'
import OurPortfolio from '../Protfolio/OurPortfolio'
import GreatWebsiteSection from '../GreatWebsiteSection/GreatWebsiteSection'
import FreeTips_Tricks from '../FreeTips&Tricks/FreeTips&Tricks'

function LandingPage() {
  return (
    <div>
      <Banner/>
      <WhatWeDoSection/>
      <ClientsSection/>
      <Choose/>
     <WebDesignSteps/>
      <Webcontact/>
      <DeviceShowcase/>
      <CyberSecuritySection/>
      <ClientTestimonial/>
      <OurPortfolio/>
      <GreatWebsiteSection/>
      <FreeTips_Tricks/>
      <Questions/>
    </div>
  )
}

export default LandingPage
