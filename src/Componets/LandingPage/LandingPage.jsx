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
      <Questions/>
    </div>
  )
}

export default LandingPage
