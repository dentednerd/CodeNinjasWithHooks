import { styled } from '@stitches/react';
import Button from '../../atoms/Button';
import Teach from '../../molecules/Teach';

export default function Learn({
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

  return (
    <StyledLearn>
      <Teach thisQuestion={thisQuestion} />
      <code className="example">
        {thisQuestion.example}
      </code>
      <Button
        className="button flipper"
        onClick={() => setShowAnswers(!showAnswers)}
      >
        Your turn!
      </Button>
    </StyledLearn>
  );
}
