import styles from './Question.module.scss'

const Question = ({ children }) => {
  return (
    <p className={styles.question} dangerouslySetInnerHTML={{__html: children}} />
  )
}

export default Question
