import styles from './Question.module.scss'

const Question = ({ children }) => {
  return (
    <div className={styles.question}>{children}</div>
  )
}

export default Question
