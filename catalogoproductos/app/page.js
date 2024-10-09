'use client'

import { useEffect, useState } from 'react';
import products from '../src/products';
import styles from '../src/styles/Home.module.css'
import Carousel from '@/components/Carousel';
import Navbar from '@/components/NavBar/Navbar';
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
                    <div key={index} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                        <img src={producto.image} alt={producto.name} style={{ width: '100%' }} />
                        <h2>{producto.name}</h2>
                        <p>{producto.desc}</p>
                    </div>
                ))}
            </div>  
        </div>
    );
};

export default Home;
