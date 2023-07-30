'use client'

import { useContext } from 'react'; 
import styles from './toggle.module.css';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
    const { toggle, mode } = useContext(ThemeContext);
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div
                className={styles.ball}
                style={mode === 'light' ? { right: '2px' } : { left: '2px' }}
            />
        </div>
    )
}

export default ThemeToggle;