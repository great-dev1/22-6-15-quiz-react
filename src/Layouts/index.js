import styles from './Layouts.module.scss'

const Layouts = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Layouts
