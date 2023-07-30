import Image from 'next/image';
import styles from './about.module.css';
import Button from '@/components/Button/Button';

export const metadata = {
  title: `NextJS/About`,
  description: 'About Page',
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.unsplash.com/photo-1629317337307-e37f95ebc372?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80" alt="" fill={true} className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.title}>Digital Storytellers</h1>
          <h3 className={styles.desc}>Handcrafting award winning digital experience</h3>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1>Who are we?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consectetur dolor. Beatae quas quisquam neque molestias cumque. Fugiat veniam totam illum quae sapiente possimus ex modi enim excepturi, eveniet ullam consequuntur ratione doloribus voluptate sed cumque eius tenetur? Adipisci optio hic quis nulla quae illum.
          <br /><br />
          Animi placeat eos iusto at optio accusantium aliquam voluptatem. Ea consequatur ducimus ipsa quaerat perferendis soluta omnis, quidem unde, iusto corrupti atque sapiente dolores?
          <br /><br />
          Animi placeat eos iusto at optio accusantium aliquam voluptatem. Ea consequatur ducimus ipsa quaerat perferendis soluta omnis, quidem unde, iusto corrupti atque sapiente dolores?
          </p>
        </div>

        <div className={styles.item}>
          <h1>What we do?</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint eos, modi laudantium harum nobis perspiciatis eum officia totam dolorum nesciunt, ipsa voluptas facilis placeat iste iure quae quaerat eveniet ullam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, iure! amet consectetur adipisicing elit Sint eos.
            <br /><br />
            - Dynamic Websites
            <br /><br />
            - Fast and Handy
            <br /><br />
            - Mobile Apps
          </p>

          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About;