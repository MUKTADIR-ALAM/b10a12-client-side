
import React from 'react'
import Carousel from '../../components/slide/Carousel'
import HowItWorks from '../../components/How it works/HowItWorks'
import PremiumCard from './PremiumCard'
import SuccessCounter from './SuccessCounter'
import SuccessStory from './SuccessStory'
import Accordion from '../../components/Accordion'
import Feedback from '../../components/Feedback'

export default function Home() {
  return (
    <div>
      <Carousel/>
      <PremiumCard/>
      <HowItWorks/>
      <SuccessCounter/>
      <SuccessStory/>
      <Feedback/>
      <Accordion/>
    </div>
  )
}
