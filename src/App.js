import { createContext, useState, useEffect } from 'react'
import { fetchQuestions } from './Services/Apis'
import AppRoutes from './Routes'
import Text from './Components/Text'

export const QuizContext = createContext()

const App = () => {
  const [questions, setQuestions] = useState([])
  const [isStarted, setStatus] = useState(false)

  // fetch 10 questions from server
  const fetchData = async () => {
    const questions = await fetchQuestions()
    setQuestions(questions.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    questions.length > 0 ? (
      <QuizContext.Provider value={{
        quiz: [questions, setQuestions],
        status: [isStarted, setStatus],
      }}>
        <AppRoutes></AppRoutes>
      </QuizContext.Provider>
    ) : <Text>Loading...</Text>
  )
}

export default App
