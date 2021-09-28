import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';

import Button from '../../atoms/Button';
import sensei from '../../assets/Sensei1.jpeg';

export default function Home() {
  const StyledHome = styled('div', {
    backgroundColor: '$highlight',
    borderRadius: '1rem',
    padding: '1rem',
    textAlign: 'center'
  });

  return (
    <StyledHome>
      <img src={sensei} alt="Sensei" />
      <p>Welcome, student! I am Sensei, here to guide you on your coding journey. Together we shall be studying JavaScript, a language that many of your favourite games are written in, including this one!</p>
      <p>Are you ready to study hard, level up and become a true Code Ninja? Click the button when you&apos;re ready to begin!</p>
      <Link to="/levels/0">
        <Button text="Begin" />
      </Link>
    </StyledHome>
  )
}
