import { styled } from '@stitches/react';
import Highlight from 'react-highlight';
import Button from '../../atoms/Button';
import Sensei from '../../molecules/Sensei';

export default function Answers({
  thisLevel,
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
    marginBottom: '1rem',
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
        {thisQuestion.answers
          .sort(() => Math.random() - 0.5)
          .map((answer) => {
            return (
              <Button
                key={answer}
                onClick={() => {
                  answer === thisQuestion.correct && handleCorrectAnswer()
                }}
              >
                <Highlight
                  language="javascript"
                >
                  {answer}
                </Highlight>
              </Button>
            );
          }
        )}
      </AnswersGrid>

      <Button
        color={thisLevel.levelColor}
        pad
        onClick={() => setShowAnswers(!showAnswers)}
      >
        <span>What did Sensei say?</span>
      </Button>

    </StyledAnswers>
  )
}
