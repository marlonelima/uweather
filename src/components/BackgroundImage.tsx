import { useEffect, useState } from 'react'

import { Container, Image } from '../styles/components/backgroundimage'

import { getHour } from './../utils/formatter'

interface IProps {
  time: number
}

const backgrounds = {
  morning: '/assets/conditions/morning.webp',
  breakfast: '/assets/conditions/breakfast.webp',
  day: '/assets/conditions/day.webp',
  sunny: '/assets/conditions/sunny.webp',
  afternoon: '/assets/conditions/afternoon.webp',
  night: '/assets/conditions/night.webp'
}

export const BackgroundImage = ({ time }: IProps) => {
  const [background, setBackground] = useState(backgrounds.morning)

  useEffect(() => {
    const hour = getHour(time)

    if (hour >= 0 && hour < 5) return setBackground(backgrounds.night)
    if (hour >= 5 && hour <= 7) return setBackground(backgrounds.morning)
    if (hour >= 8 && hour <= 9) return setBackground(backgrounds.breakfast)
    if (hour >= 10 && hour <= 11) return setBackground(backgrounds.day)
    if (hour >= 12 && hour < 17) return setBackground(backgrounds.afternoon)
    if (hour >= 17 && hour < 19) return setBackground(backgrounds.sunny)
    if (hour >= 19) return setBackground(backgrounds.night)
  }, [background, time])

  return (
    <Container>
      <Image src={background} alt="Background image" layout="fill" />
    </Container>
  )
}
