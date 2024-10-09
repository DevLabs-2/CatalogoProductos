'use client'

import styles from '../NavBar/Navbar.module.css'
import { useRouter } from 'next/navigation'
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

export default function Navbar() {
    const router = useRouter()
    return (

            <div className={styles.navbar}>
                <div className={styles.button} onClick={() => router.push('/')}> Home </div>
                <div className={styles.button} onClick={() => router.push('/Productos')}> Productos </div>
                <div className={styles.button} onClick={() => router.push('/Contacto')}> Contacto </div>
            </div>
        
    );
  }  