import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizContext } from '../../App'
import Layouts from '../../Layouts'
import Title from '../../Components/Title'
import Text from '../../Components/Text'
import Button from '../../Components/Button'

const Home = () => {
  const { status } = useContext(QuizContext)
  const [isStarted, setStatus] = status
  const navigate = useNavigate()

  // start a quiz
  const startQuiz = () => {
    setStatus(true)
    navigate('/quiz')
  }

  return (
    <Layouts>
      <Title>Welcome to the Trivia Challege!</Title>
      <Text>You will be presented with 10 True or False questions.</Text>
      <Text>Can you score 100%?</Text>
      <Button onClick={startQuiz}>Begin</Button>
    </Layouts>
  )
}

export default Home
