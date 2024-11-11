'use client'

import styles from './Detalle.module.css';
import Navbar from '@/components/NavBar/Navbar';
import { useState, useEffect } from 'react';
import { useRouter, usePathname  } from 'next/navigation';
import apiService  from '@/apiCalls/apicalls';
import {useCarrito} from '@/carrito'

const ProductPage = () => {

    const pathName = usePathname()
    const { agregarItem } = useCarrito();
    const SplitPath = (path) => {
        const parts = path.split('/');
        return parts[parts.length - 1];
    }
    const [product, setProduct] = useState();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const get = async () => {
            let data = await apiService.getProducts();
            setProducts(data);
        }
        get();
    }, []);

    useEffect(() => {
        const id = SplitPath(pathName);
        if (products.length > 0) {
            const foundProduct = products.find((prod) => prod.id.toString() === id);
            setProduct(foundProduct);
        }
    },[products])

    const handleAgregarCarrito = () => {
        agregarItem(product.id)
    };
    
    if (!product) {
        return <div>Cargando...</div>;
    }
    return (
    <>
        <div className={styles.page}>
            <Navbar />
            <div className={styles.product}>
                <h1>{product.title}</h1>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    width={300}
                    height={300}
                    className={styles.image}
                />
                <p>{product.description}</p>
                <p>{product.price} $</p>
                <span className={styles.category}>
                    Categorías: {product.tags.map((tag, index) => (
                        <span key={index}>
                            {tag}{index < product.tags.length - 1 && ', '}
                        </span>
                    ))}
                </span>

                <div className={styles.container}>
                    <button onClick={handleAgregarCarrito} className={styles.CarritoButton}>
                    Agregar al carrito
                    </button>
                </div>
                
            </div>
        </div>
    </>

    );
}

export default ProductPage;
