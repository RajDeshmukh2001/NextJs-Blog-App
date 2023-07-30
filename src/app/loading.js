import styles from './page.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.ring}></div>
      <span>loading...</span>
    </div>
  )
}

export default Loading;