import Image from 'next/image';
import styles from './post.module.css';
import { format } from 'date-fns';

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return console.log("Not Found");
  }

  return res.json();
};

const formatDate = (date) => {
  return format(new Date(date), 'MMM dd, yyyy');
}

const Post = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.text}>{data.desciption}</p>
          <div className={styles.author}>
            <Image src="/user.png" alt={data.username} width={32} height={32} className={styles.avatar} />
            <span className={styles.authorName}>{data.username}</span>
            <p className={styles.date}>{formatDate(data.updatedAt)}</p>
          </div>
        </div>
        <div className={styles.imgBox}>
          <Image src={data.img} alt={data.title} fill={true} className={styles.img} />
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  )
}

export default Post;