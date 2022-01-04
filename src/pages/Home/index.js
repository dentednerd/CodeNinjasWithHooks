import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';
import Button from '../../atoms/Button';
import Sensei from '../../molecules/Sensei';

export default function Home() {
  const StyledHome = styled('div', {
    backgroundColor: '$sensei',
    borderRadius: '1rem',
    padding: '1rem',

    'section.welcome': {
      marginTop: '1rem',
      backgroundColor: '$senseilight',
      borderRadius: '1rem',
      padding: '1rem',

    }
  });

  return (
    <StyledHome>
      <Sensei
        title="Welcome!"
        subtitle="Sensei Says..."
      />

      <section className="welcome">
        <p>Welcome, student! I am Sensei, here to guide you on your coding journey. Together we shall be studying JavaScript, a language that many of your favourite games are written in, including this one!</p>
        <p>Are you ready to study hard, earn your ninja belts, and become a true Code Ninja?</p>
        <Link to="/profile">
          <Button pad color="$sensei">
            Begin your training
          </Button>
        </Link>
      </section>
    </StyledHome>
  );
}
