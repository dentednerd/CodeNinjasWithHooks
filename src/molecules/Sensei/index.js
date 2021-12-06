import { styled } from '@stitches/react';
import sensei from '../../assets/Sensei1.jpeg';

export default function Sensei({ title, subtitle }) {

  const StyledSensei = styled('section', {
    position: 'relative',
    width: 'fit-content',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    flex: '0 0 auto',
    minHeight: '4rem',
    backgroundColor: '$highlight',
    borderRadius: '2.5rem',
    paddingRight: '1rem',
    border: 'double 9px $sensei',

    img: {
      height: '4rem',
      width: '4rem',
      borderRadius: '50%',
      alignSelf: 'flex-start'
    },

    p: {
      fontSize: '0.75rem'
    },

    h2: {
      padding: '0.5rem 0'
    },

    '&::before': {
      content: subtitle,
      position: 'absolute',
      top: '-0.75rem',
      left: '3.25rem',
      backgroundColor: '$senseilight',
      fontSize: '0.75rem',
      padding: '0.06125rem 0.5rem',
      borderRadius: '0.5rem',
    }
  })


  return (
    <StyledSensei>
      <img src={sensei} alt="Sensei" />
      <h2>{title}</h2>
    </StyledSensei>
  );
}
