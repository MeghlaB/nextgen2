import React from 'react'
import Banner from '../Banner/Banner'
import WhatWeDoSection from '../WhatDo/WhatDo'
import ClientsSection from '../Client/OurClient'
import Choose from '../Choose/Choose'
import CreatingProcess from '../CreatingProcess/CreatingProcess'

function LandingPage() {
  return (
    <div>
      <Banner/>
      <WhatWeDoSection/>
      <ClientsSection/>
      <Choose/>
      {/* <CreatingProcess/> */}
    </div>
  )
}

export default LandingPage
