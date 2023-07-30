'use client';

import { signIn, useSession } from 'next-auth/react';
import styles from '../register/register.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === 'authenticated') {
    router?.push('/dashboard');
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  }

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Sign In</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className={styles.input} required />
          <input type="password" placeholder="Password" className={styles.input} required />
          <button className={styles.btn}>Login</button>
        </form>
        <p className={styles.text}>Don&apos;t have an account? <Link href="/dashboard/register" className={styles.login}>Register</Link></p>
        <div className={styles.or}>
          <span className={styles.span}></span>
          <p>OR</p>
          <span className={styles.span}></span>
        </div>
        <button onClick={() => signIn("google")} className={styles.btn}>Login with Google Account</button>
      </div>
    </>
  )
}

export default Login;