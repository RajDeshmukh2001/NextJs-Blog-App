import Link from 'next/link';
import styles from './portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Choose a Gallery</h2>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio;