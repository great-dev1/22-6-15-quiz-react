import { Link } from 'react-router-dom'
import Layouts from '../../Layouts'
import Title from '../../Components/Title'
import Text from '../../Components/Text'
import Button from '../../Components/Button'

const Home = () => {
  return (
    <Layouts>
      <Title>Welcome to the Trivia Challege!</Title>
      <Text>You will be presented with 10 True or False questions.</Text>
      <Text>Can you score 100%?</Text>
      <Link to='/quiz'>
        <Button>Begin</Button>
      </Link>
    </Layouts>
  )
}

export default Home
