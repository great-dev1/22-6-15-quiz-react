import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizContext } from '../../App'
import Layouts from '../../Layouts'
import Title from '../../Components/Title'
import Answer from '../../Components/Answer'
import Button from '../../Components/Button'

const Results = () => {
  const { quiz, status } = useContext(QuizContext)
  const [questions, setQuestions] = quiz
  const [isStarted, setStatus] = status
  const navigate = useNavigate()

  // calculate a score according to user answers
  const calculateScore = () => {
    let score = 0
    questions.forEach((el) => {  // while iterating questions
      if (el.isScored) {         // increase the score if the 'isScored' of a question is true
        score++
      }
    })
    return score
  }

  // restart a quiz
  const restartQuiz = () => {
    setStatus(false)
    navigate('/')
  }

  return (
    <Layouts>
      <Title>
        You scored <br />
        {`${calculateScore()} / ${questions.length}`}
      </Title>
      {
        questions.map((el, index) => (
          <Answer key={index} isScored={el.isScored} question={el.question}></Answer>
        ))
      }
      <Button onClick={restartQuiz}>Play again?</Button>
    </Layouts>
  )
}

export default Results
