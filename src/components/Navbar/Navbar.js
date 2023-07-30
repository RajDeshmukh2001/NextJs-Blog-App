'use client';

import Link from 'next/link';
import styles from './navbar.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const Navbar = () => {
  const [close, setClose] = useState('close');
  const [menu, setMenu] = useState('open');
  const [links, setLinks] = useState('close');
  const session = useSession();
  const { mode } = useContext(ThemeContext);

  const handleMenu = () => {
    setMenu('close');
    setClose('open');
    setLinks('open')
  }

  const handleClose = () => {
    setMenu('open');
    setClose('close');
    setLinks('close')
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Next.JS</Link>
      <div className={styles.responsiveMenu}>
        <ThemeToggle />
        <Image src="/menu.png" alt="menu" width={24} height={24} className={menu === 'open' ? styles.menu : styles.closeMenu} onClick={handleMenu} />
      </div>
      <div className={links === 'close' ? styles.links : styles.showLinks} style={mode === 'light' ? {background: '#fff', color: '#111'} : {background: '#111', color: '#fff'}}>
        <Image src="/close.png" alt="menu" width={20} height={20} className={close === 'close' ? styles.close : styles.open} onClick={handleClose} />
        <div className={styles.toggleMenu}><ThemeToggle /></div>
        <Link href="/" className={styles.link} onClick={handleClose}>Home</Link>
        <Link href="/portfolio" className={styles.link} onClick={handleClose}>Portfolio</Link>
        <Link href="/blog" className={styles.link} onClick={handleClose}>Blog</Link>
        <Link href="/about" className={styles.link} onClick={handleClose}>About</Link>
        <Link href="/contact" className={styles.link} onClick={handleClose}>Contact</Link>
        <Link href="/dashboard" className={styles.link} onClick={handleClose}>Dashboard</Link>

        {
          session.status === 'authenticated' &&
          <button onClick={signOut} className={styles.btn}>Logout</button>
        }
      </div>
    </div>
  )
}

export default Navbar;