// pages/index.js

import { useEffect, useState } from 'react';
import products from '../products';
import '../styles/Home.module.css'
import Sliders from '@/components/Slider';
import Carousel from '@/components/Carousel';
import Link from 'next/link';
import Productos from './Productos/page';
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
            <Link href={'/Productos'}>Productos</Link>
            <h1>Productos Aleatorios</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {productsRandom.map((producto, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                        <img src={producto.image} alt={producto.name} style={{ width: '100%' }} />
                        <h2>{producto.name}</h2>
                        <p>{producto.desc}</p>
                    </div>
                ))}
            </div>

            <h2>Carrusel de Imágenes</h2>
            <Carousel data={products}/>
        </div>
    );
};

export default Home;
