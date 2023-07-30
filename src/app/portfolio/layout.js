import React from 'react';
import styles from './portfolio.module.css';

export const metadata = {
  title: `NextJS/Portfolio`,
  description: 'Portfolio Page',
}

const layout = ({ children }) => {
  return (
    <div>
        <h1 className={styles.layoutTitle}>Our Works</h1>
        {children}
    </div>
  )
}

export default layout;