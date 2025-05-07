import React from 'react'
import Banner from '../Banner/Banner'
import WhatWeDoSection from '../WhatDo/WhatDo'
import ClientsSection from '../Client/OurClient'

function LandingPage() {
  return (
    <div>
      <Banner/>
      <WhatWeDoSection/>
      <ClientsSection/>
    </div>
  )
}

export default LandingPage
