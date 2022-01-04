import { styled } from '../../stitches.config';

export default function Button({ color, pad, onClick, children }) {
  const StyledButton = styled('button', {
    backgroundColor: color || '$highlight',
    padding: pad ? '0.5rem' : '0',
    border: 'none',
    borderRadius: '0.5rem',
    boxShadow: '0 0 0.5rem $colors$text',
    transition: 'box-shadow 0.2s',
    cursor: 'pointer',

    '&:hover': {
      boxShadow: '0 0 0.125rem $colors$text'
    }
  });

  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}
