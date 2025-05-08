import React from 'react'
import Banner from '../Banner/Banner'
import WhatWeDoSection from '../WhatDo/WhatDo'
import ClientsSection from '../Client/OurClient'
import Choose from '../Choose/Choose'
import CreatingProcess from '../CreatingProcess/CreatingProcess'
import Questions from '../QUestion/Questions'
import WebDesignSteps from '../WebStepdesign/WebStepdesign'
import Webcontact from '../Webcontact/Webcontact'

function LandingPage() {
  return (
    <div>
      <Banner/>
      <WhatWeDoSection/>
      <ClientsSection/>
      <Choose/>
     <WebDesignSteps/>
      <Webcontact/>
      <Questions/>
    </div>
  )
}

export default LandingPage
