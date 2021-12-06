import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestions } from '../../api';
import Learn from '../../organisms/Learn';
import Answers from '../../organisms/Answers';

export default function Level(props) {
  const [levelQuestions, setLevelQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [error, setError] = useState(false);
  const { level } = useParams();

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
      console.log('level up');
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswers(false);
    }
  }

  const thisQuestion = levelQuestions[currentQuestion];

  if (error) return <p>Error</p>;
  if (!thisQuestion) return <p>Loading...</p>;

  if (showAnswers) return (
    <Answers
      thisQuestion={thisQuestion}
      showAnswers={showAnswers}
      setShowAnswers={setShowAnswers}
      handleCorrectAnswer={handleCorrectAnswer}
    />
  )

  return (
    <Learn
      thisQuestion={thisQuestion}
      showAnswers={showAnswers}
      setShowAnswers={setShowAnswers}
    />
  )
}
