import Image from 'next/image';
import styles from './blog.module.css';
import Link from 'next/link';

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData(); 

  return (
    <div className={styles.container}>
      {
        data.map((item) => (
          <Link href={`/blog/${item._id}`} className={styles.box} key={item.id}>
            <div className={styles.imgBox}>
              <Image src={item.img} alt={item.title} width={400} height={250} className={styles.img} />
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.des}>{item.desciption}</p>
            </div>
          </Link>
        ))
      }

    </div>
  )
}

export default Blog;