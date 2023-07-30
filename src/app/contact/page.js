'use client';

import Image from 'next/image';
import styles from './contact.module.css';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Modal from '@/components/Modal/Modal';

const Contact = () => {
  const session = useSession();
  const [input, setInput] = useState(session?.data?.user);
  const [stat, setStat] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    try {
      await fetch('api/contact', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
      });
      e.target.reset();
      setStat('Success');
    } catch (error) {
      console.log(error);
      setStat('Error');
    }
  }

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {stat === 'Success' && <Modal message="Success! Message sent" />}
      {stat === 'Error' && <Modal message="Error! Something went wrong" />}
      <div className={styles.container}>
        <h1 className={styles.title}>Get in Touch</h1>

        <div className={styles.content}>
          <div className={styles.imgBox}>
            <Image src="https://www.alonzahealthcare.com/assets/images/contact-us.svg" alt="contact" fill={true} className={styles.img} />
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name='name' className={styles.input} value={session.status === 'authenticated' ? input?.name : null} onChange={handleChange} />
            <input type="email" placeholder="Email" name='email' className={styles.input} value={session.status === 'authenticated' ? input?.email : null} onChange={handleChange} />
            <textarea cols="30" rows="5" className={styles.textarea} placeholder="Message"></textarea>
            <button type='submit' className={styles.btn}>Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact;