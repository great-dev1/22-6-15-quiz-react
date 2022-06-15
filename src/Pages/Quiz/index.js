import { useContext, useState, useEffect } from 'react'
import { QuizContext } from '../../App'
import Button from '../../Components/Button'

const Quiz = () => {
  const { questions, score } = useContext(QuizContext)
  const [scoreValue, setScoreValue] = score
  const [questionNumber, setQuestionNumber] = useState(0)

  console.log('QUESTIONS', questions)
  console.log('SCORE', scoreValue)
  console.log('QUESTION_NUMBER', questionNumber)

  return (
    <div className='container'>
      <h1>
        {questions[questionNumber].category}
      </h1>
      <p className='question'>
        {questions[questionNumber].question}
      </p>
      <Button caption='True'></Button>
      <Button caption='FALSE'></Button>
    </div>
  )
}

export default Quiz
