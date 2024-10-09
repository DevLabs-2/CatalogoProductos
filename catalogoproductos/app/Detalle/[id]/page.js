'use client'

import Image from 'next/image';
import styles from './Detalle.module.css';
import Navbar from '@/components/NavBar/Navbar';
import { useRouter, usePathname  } from 'next/navigation';
import products from '@/products';

const ProductPage = () => {
    
    const pathName = usePathname()

    const SplitPath = (path) => {
        const parts = path.split('/');
        return parts[parts.length - 1];
    }

    const id = SplitPath(pathName);
    let product = products[id];

    return (
    <>
        <div style={{ padding: '20px' }}>
            <Navbar/>
            <div className={styles.product}>
            <h1>{product.name}</h1>
            <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className={styles.image}
            />
            <p>{product.desc}</p>
            <span className={styles.category}>Categoría: {product.cat}</span>
            </div>
        </div>
    </>

    );
}

export default ProductPage;