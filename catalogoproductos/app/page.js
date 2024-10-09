'use client'

import { useEffect, useState } from 'react';
import products from '../src/products';
import styles from '../src/styles/Home.module.css'
import Carousel from '@/components/Carousel';
import Navbar from '@/components/NavBar/Navbar';
import ProductoCard from '@/components/ProductoCard';
const Home = () => {
    const [productsRandom, setproductsRandom] = useState([]);

    useEffect(() => {
        const shuffled = products.sort(() => 0.5 - Math.random());
        setproductsRandom(shuffled.slice(0, 6));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div style={{ padding: '20px' }}>
            <Navbar></Navbar>
            
            <div style={{marginTop: '5rem', marginBottom: '5rem'}}>
                <Carousel data={products}/>
            </div>
            
            <div className={[styles.inlineCentered]}>
                {productsRandom.map((producto, index) => (
                    <div key={index} style={{width:'15%', flexWrap: 'wrap'}}>
                        <ProductoCard producto={producto} index={products.findIndex(prod => prod.name === producto.name)} />
                    </div>
                ))}
            </div>  
        </div>
    );
};

export default Home;
