import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { styled } from '../../stitches.config';
import { GetUser } from '../../context/user';
import { getQuestions } from '../../api';
import ninjas from '../../assets/ninjas';
import Learn from '../../organisms/Learn';
import Answers from '../../organisms/Answers';
import BeltHeading from '../../atoms/BeltHeading';
import config from '../../config';

export default function Level() {
  const [levelQuestions, setLevelQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const { level } = useParams();
  const { user } = GetUser();

  const thisLevel = config[level];
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    getQuestions(level)
      .then(({ questions }) => {
        if (isMounted) setLevelQuestions(questions);
      })
      .catch((err) => {
        if (err) setError(true);
      })
    return () => { isMounted = false };
  }, [level, currentQuestion]);

  const handleCorrectAnswer = () => {
    if (currentQuestion === 4) {
      navigate('/congrats');
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setProgress((currentQuestion + 1) * 20);
      setShowAnswers(false);
    }
  }

  const thisQuestion = levelQuestions[currentQuestion];

  if (level > user.level) return (
    <BeltHeading
      thisLevel={thisLevel}
      text={`I'm sorry, ${user.name}. You need more training before you can attempt this level.`}
    />
  );

  if (error) return <p>Error</p>;

  if (!thisQuestion) return <p>Loading...</p>;

  const StyledLevel = styled('section', {
    display: 'grid',
    gridTemplate: 'auto 1fr auto / clamp(23ch, 25%, 46ch) 1fr clamp(23ch, 25%, 46ch)',
    gap: '1rem',

    aside: {
      gridColumn: '1 / 2',
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
    },

    article: {
      gridColumn: '2 / 4',
    },

    'section.progress': {
      gridColumn: '1 / 4',
      padding: '1rem 0',
      position: 'relative',

      img: {
        position: 'absolute',
        top: '0',
        left: `calc(${progress}% - 1rem)`,
        height: '3rem',
      },

      progress: {
        width: '100%',
        height: '1rem',
        borderRadius: '0.5rem',
      },

      'progress[value]::-webkit-progress-bar': {
        backgroundColor: '#ddd',
        borderRadius: '0.5rem',
      },

      'progress[value]::-webkit-progress-value': {
        backgroundColor: config[thisLevel.levelNum].levelColor,
        borderRadius: '0.5rem',
      }
    }
  });

  return (
    <StyledLevel>
      <BeltHeading levelNum={thisLevel.levelNum} text={thisLevel.levelName} />
      <section className="progress">
        <progress
          value={currentQuestion * 20}
          max={100}
        />
        <img src={ninjas[level]} alt="ninja" />
      </section>
      <aside>
        {thisLevel.description}
      </aside>
      <article>
        {showAnswers ? (
          <Answers
            thisLevel={thisLevel}
            thisQuestion={thisQuestion}
            showAnswers={showAnswers}
            setShowAnswers={setShowAnswers}
            handleCorrectAnswer={handleCorrectAnswer}
          />
        ) : (
          <Learn
            thisLevel={thisLevel}
            thisQuestion={thisQuestion}
            showAnswers={showAnswers}
            setShowAnswers={setShowAnswers}
          />
        )}
      </article>
      <aside />
    </StyledLevel>
  )
}
