import { createContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { fetchQuestions } from './Services/Apis'
import Home from './Pages/Home'
import Quiz from './Pages/Quiz'
import Results from './Pages/Results'

export const QuizContext = createContext()

const App = () => {
  const [questions, setQuestions] = useState([])

  // fetch 10 questions
  const fetchData = async () => {
    const questions = await fetchQuestions()
    setQuestions(questions.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <QuizContext.Provider value={[questions, setQuestions]}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='results' element={<Results />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </QuizContext.Provider>
  )
}

export default App
