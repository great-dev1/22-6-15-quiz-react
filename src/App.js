import { createContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Quiz from './Pages/Quiz'
import Results from './Pages/Results'

export const QuizContext = createContext()

const App = () => {
  const [questions, setQuestions] = useState([])

  const fetchQuestions = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json()
    setQuestions(data.results)
  }

  useEffect(() => {
    fetchQuestions()
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
