import { styled } from '@stitches/react';
import Button from '../../atoms/Button';
import Sensei from '../../molecules/Sensei';

export default function Answers({
  thisQuestion,
  showAnswers,
  setShowAnswers,
  handleCorrectAnswer
}) {

  const StyledAnswers = styled('section', {
    textAlign: 'center',
  })

  const YourTurn = styled('section', {
    backgroundColor: '$sensei',
    padding: '1rem',
    borderRadius: '1rem',
    marginBottom: '1rem',
    textAlign: 'left',
  })

  const AnswersGrid = styled('section', {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '1rem',
    textAlign: 'center',

    code: {
      whiteSpace: 'pre-wrap',
      maxWidth: '100%',

      '&:hover': {
        cursor: 'pointer'
      },
    }



  });

  return (
    <StyledAnswers>
      <YourTurn>
        <Sensei
          title={thisQuestion.question}
          subtitle="Your turn!"
        />
      </YourTurn>

      <AnswersGrid>
        {thisQuestion.answers.map((answer) => {
          return (
            <code
              key={answer}
              onClick={() => {
                answer === thisQuestion.correct && handleCorrectAnswer()
              }}
            >
              {answer}
            </code>
          );
        })}
      </AnswersGrid>

      <Button
        onClick={() => setShowAnswers(!showAnswers)}
      >
        What did Sensei say?
      </Button>

    </StyledAnswers>
  )
}
