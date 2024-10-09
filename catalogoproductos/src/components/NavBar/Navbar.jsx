'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../NavBar/Navbar.module.css'

export default function Navbar() {
  
    return (
        <div className={styles.navbar}>
            <Link href={'../../pages/Productos'}>Productos</Link>

        </div>
    );
  }  