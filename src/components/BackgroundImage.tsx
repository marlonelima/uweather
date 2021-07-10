import { Container, Image } from "../styles/components/backgroundimage";

import sunny from "../assets/images/conditions/sunny.jpg";
import { useEffect, useState } from "react";
import { stringToDate } from "./../utils/formatter";

interface IProps {
  time: string;
}

const backgrounds = {
  morning: "/assets/conditions/morning.jpg",
  sunny: "/assets/conditions/sunny.jpg",
  afternoon: "/assets/conditions/afternoon.jpg",
  night: "/assets/conditions/night.jpg",
};

export const BackgroundImage = ({ time }: IProps) => {
  const [background, setBackground] = useState(backgrounds.morning);
  useEffect(() => {
    const hour = stringToDate(time);

    if (hour >= 0 && hour < 5) return setBackground(backgrounds.night);
    if (hour >= 5 && hour < 12) return setBackground(backgrounds.morning);
    if (hour >= 12 && hour < 17) return setBackground(backgrounds.afternoon);
    if (hour >= 17 && hour < 19) return setBackground(backgrounds.sunny);
    if (hour >= 19) return setBackground(backgrounds.night);
  }, [background, time]);
  return (
    <Container>
      <Image src={background} alt="Background image" layout="fill" />
    </Container>
  );
};
