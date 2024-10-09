'use client'

import styles from '../NavBar/Navbar.module.css'
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const router = useRouter()
    return (
        <div className={styles.navbar}>
            <button type="button" onClick={() => router.push('/')}> Home </button>
            <button type="button" onClick={() => router.push('/Productos')}> Productos </button>
            <button type="button" onClick={() => router.push('/Contacto')}> Contacto </button>
        </div>
    );
  }  