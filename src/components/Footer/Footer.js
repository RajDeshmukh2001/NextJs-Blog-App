import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.footer}>&copy;2023 Next.JS. All Rights Reserved.</h4>

        <div className={styles.social}>
          <Image src="/instagram.png" alt="instagram" width={20} height={20} />
          <Image src="/telegram.png" alt="telegram" width={20} height={20} />
          <Image src="/facebook.png" alt="facebook" width={20} height={20} />
          <Image src="/twitter.png" alt="twitter" width={20} height={20} />
          <Image src="/linkedin.png" alt="linkedin" width={20} height={20} />
        </div>
      </div>
    </>
  )
}

export default Footer;