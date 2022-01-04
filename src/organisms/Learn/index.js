import { styled } from '@stitches/react';
import Highlight from 'react-highlight';
import Button from '../../atoms/Button';
import Teach from '../../molecules/Teach';

export default function Learn({
  thisLevel,
  thisQuestion,
  showAnswers,
  setShowAnswers
}) {

  const StyledLearn = styled('section', {
    textAlign: 'center',

    code: {
      whiteSpace: 'pre-wrap'
    }
  });

  const Example = styled(Highlight, {
    marginBottom: '1rem !important',
  });

  return (
    <StyledLearn>
      <Teach thisQuestion={thisQuestion} />
      <Example
        language="javascript"
        className="language-javascript"
      >
        {thisQuestion.example}
      </Example>
      <Button
        pad
        color={thisLevel.levelColor}
        onClick={() => setShowAnswers(!showAnswers)}
      >
        Your turn!
      </Button>
    </StyledLearn>
  );
}
