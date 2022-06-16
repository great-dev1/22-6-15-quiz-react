import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizContext } from '../../App'
import Layouts from '../../Layouts'
import Title from '../../Components/Title'
import Question from '../../Components/Question'
import Pagination from '../../Components/Pagination'
import Button from '../../Components/Button'

const Quiz = () => {
  const [questions, setQuestions] = useContext(QuizContext)
  const [questionIndex, setQuestionIndex] = useState(0)
  const navigate = useNavigate()

  const evaluateAnswer = (userAnswer) => {
    if (userAnswer === questions[questionIndex].correct_answer) {
      questions[questionIndex] = {
        ...questions[questionIndex],
        isScored: true,
      }
    } else {
      questions[questionIndex] = {
        ...questions[questionIndex],
        isScored: false,
      }
    }
    setQuestions(questions)

    if (questionIndex < 9) {
      setQuestionIndex((prevIndex) => prevIndex + 1)
    } else {
      navigate('/results')
    }
  }

  return (
    <Layouts>
      <Title>{questions[questionIndex].category}</Title>
      <Question>{questions[questionIndex].question}</Question>
      <Pagination>
        {`${questionIndex + 1} of ${questions.length}`}
      </Pagination>
      <div>
        <Button onClick={() => { evaluateAnswer('True') }}>True</Button>
        <Button onClick={() => { evaluateAnswer('False') }}>False</Button>
      </div>
    </Layouts>
  )
}

export default Quiz
