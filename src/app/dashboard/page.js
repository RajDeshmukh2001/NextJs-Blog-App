'use client';

import { useSession } from 'next-auth/react';
import styles from './dashboard.module.css';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desciption = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, desciption, img, content, username: session.data.user.name })
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === 'authenticated') {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {data?.map((post) => (
            <div className={styles.post} key={post._id}>
              <div className={styles.imgBox}>
                <Image src={post.img} alt={post.title} className={styles.img} width={200} height={100} />
              </div>
              <h2 className={styles.title}>{post.title}</h2>
              <Image src="/pen.png" alt="Edit" width={28} height={28} className={styles.icon} />
              <Image src="/delete.png" alt="Delete" width={24} height={24} className={styles.icon} onClick={() => handleDelete(post._id)} />
            </div>  
          ))}
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.heading}>Add New Post</h2>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Description" className={styles.input} />
          <input type="text" placeholder="Image URL" className={styles.input} />
          <textarea placeholder="Content" cols="30" rows="8" className={styles.textarea}></textarea>
          <div className={styles.buttons}>
            <button className={styles.btn}>Post</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Dashboard;