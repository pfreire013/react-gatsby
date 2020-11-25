import React from 'react'
import { Button } from '../Button'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroItems, HeroH1, HeroP } from './HeroStyles'
import Video from '../../assets/videos/video-03.mp4'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          src={Video}
          type='video/mp4'
          autoPlay
          loop
          muted
          playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Unreal Destinations</HeroH1>
          <HeroP>Out of this world</HeroP>
          <Button primary round to='/trips'>Travel Now</Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
