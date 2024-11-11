'use client'

import styles from '../NavBar/Navbar.module.css'
import { useRouter } from 'next/navigation'
import { Inter } from 'next/font/google';
import { useCarrito } from '@/carrito';
import { useEffect, useState } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], 
});



export default function Navbar() {
    const router = useRouter()
    const { carrito } = useCarrito();

    const [carritoCount, setCarritoCount] = useState(0);

    useEffect(() => {
      if(carrito){
        setCarritoCount(carrito.length);
      }
    }, [carrito])

    useEffect(() => {
      console.log(carritoCount)
    }, [carritoCount])
    return (

            <div className={styles.navbar}>
              <div className={styles.leftContainer}>
                <div className={styles.button} onClick={() => router.push('/')}> Home </div>
                <div className={styles.button} onClick={() => router.push('/Productos')}> Productos </div>
                <div className={styles.button} onClick={() => router.push('/Contacto')}> Contacto </div>
              </div>
              <div className={styles.rightContainer}>
                <div className={styles.buttonLeft} onClick={() => router.push('/CarritoPage')}><img className={styles.carrito} src='/Imagenes/carrito.png'></img><p className={styles.carritoCount}>{carritoCount}</p></div>
                
              </div>
            </div>
        
    );
  }  
