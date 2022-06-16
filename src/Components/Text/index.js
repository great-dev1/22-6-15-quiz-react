import styles from './Text.module.scss'

const Text = ({ children }) => {
  return (
    <p className={styles.text}>{children}</p>
  )
}

export default Text
