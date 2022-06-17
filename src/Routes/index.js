import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QuizContext } from '../App'
import Home from '../Pages/Home'
import Quiz from '../Pages/Quiz'
import Results from '../Pages/Results'

const AppRoutes = () => {
  const { status } = useContext(QuizContext)
  const [isStarted, setStatus] = status

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {isStarted && (
          <>
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/results' element={<Results />} />
          </>
        )}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
