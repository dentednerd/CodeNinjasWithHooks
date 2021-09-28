import { styled } from '../../stitches.config';

export default function Button({ onClick, text}) {
  const StyledButton = styled('button', {
    backgroundColor: '$accent',
    color: '$highlight',
    padding: '0.5rem',
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
      {text}
    </StyledButton>
  );
}
