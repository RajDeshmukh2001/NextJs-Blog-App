'use client';

import { useState } from 'react';
import styles from './modal.module.css';

const Modal = ({ message }) => {
    const [show, setShow] = useState('');

    const handleModal = () => {
        setShow('hide');
    }
    
    return (
        <div className={show === 'hide' ? styles.hide : styles.container}>
            <div className={styles.modal}>
                <h2 className={styles.message}>{message}</h2>
                <h3 className={styles.close} onClick={() => handleModal()}>X</h3>
            </div>
        </div>
    )
}

export default Modal;