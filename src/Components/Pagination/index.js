import styles from './Pagination.module.scss'

const Pagination = ({ children }) => {
  return (
    <p className={styles.pagination}>{children}</p>
  )
}

export default Pagination
