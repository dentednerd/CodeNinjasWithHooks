import { styled } from '@stitches/react';
import Sensei from '../Sensei';

export default function Teach({ thisQuestion }) {

  const StyledTeach = styled('section', {
    backgroundColor: '$sensei',
    padding: '1rem',
    borderRadius: '1rem',
    marginBottom: '1rem',
    textAlign: 'left',

    p: {
      marginBottom: '0'
    },

    'section.background': {
      marginTop: '1rem',
      backgroundColor: '$senseilight',
      padding: '1rem',
      borderRadius: '1rem',
    }
  });

  return (
    <StyledTeach>
      <Sensei
        title={thisQuestion.title}
        subtitle="Sensei Says..."
      />
      <section className="background">
        <p>{thisQuestion.background}</p>
      </section>
    </StyledTeach>
  )
}
