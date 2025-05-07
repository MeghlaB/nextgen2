import React from 'react'
import Banner from '../Banner/Banner'
import WhatWeDoSection from '../WhatDo/WhatDo'
import ClientsSection from '../Client/OurClient'
import Choose from '../Choose/Choose'
import CreatingProcess from '../CreatingProcess/CreatingProcess'
import Questions from '../QUestion/Questions'

function LandingPage() {
  return (
    <div>
      <Banner/>
      <WhatWeDoSection/>
      <ClientsSection/>
      <Choose/>
      {/* <CreatingProcess/> */}
      <Questions/>
    </div>
  )
}

export default LandingPage
