import Hero from 'public/Hero2.png';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design for your Digital Products.</h1>
        <p className={styles.description}>Turning your idea into reality. We bring together the teams from global tech industry.</p>
        <Button url="/portfolio" text="See Our Works" className={styles.btn} />
      </div>

      <div className={styles.item}>
        <Image src={Hero} alt="Hero" className={styles.img} />
      </div>
    </div>
  )
}
