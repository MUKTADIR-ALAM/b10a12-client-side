
import React from 'react'
import Carousel from '../../components/slide/Carousel'
import HowItWorks from '../../components/How it works/HowItWorks'
import PremiumCard from './PremiumCard'

export default function Home() {
  return (
    <div>
      <Carousel/>
      <PremiumCard/>
      <HowItWorks/>
    </div>
  )
}
