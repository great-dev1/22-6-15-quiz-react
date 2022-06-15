import { Link } from 'react-router-dom'
import Button from '../../Components/Button'

const Home = () => {
  return (
    <div className='container'>
      <h1>
        Welcome to the Trivia Challege!
      </h1>
      <p className='paragraph'>
        You will be presented with 10 True or False questions.
      </p>
      <p className='paragraph'>
        Can you score 100%?
      </p>
      <Link to='/quiz'>
        <Button caption='Begin'></Button>
      </Link>
    </div>
  )
}

export default Home
