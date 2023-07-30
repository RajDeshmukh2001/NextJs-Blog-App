'use client';

import Link from 'next/link';
import styles from './register.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Modal from '@/components/Modal/Modal';

const Register = () => {
  const router = useRouter();
  const [stat, setStat] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name, email, password
        })
      });
      setStat('Success');
      res.status === 201 && router.push('/dashboard/login');
    } catch (error) {
      console.log(error);
      setStat('Error');
    }
  }

  return (
    <>
      {stat === 'Success' && <Modal message="Success! Registration Successfull" />}
      {stat === 'Error' && <Modal message="Error! Something went wrong" />}
      <div className={styles.container}>
        <h2 className={styles.title}>Create an Account</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" className={styles.input} required />
          <input type="email" placeholder="Email" className={styles.input} required />
          <input type="password" placeholder="Password" className={styles.input} required />
          <button className={styles.btn}>Register</button>
        </form>
        <p className={styles.text}>Already a user? <Link href="/dashboard/login" className={styles.login}>Login</Link></p>
      </div>
    </>
  )
}

export default Register;