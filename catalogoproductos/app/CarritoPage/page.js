'use client'
import { useState, useEffect } from 'react';
import NavBar from '../../src/components/NavBar/Navbar';
import styles from "./CarritoPage.module.css";
import { useCarrito } from '@/carrito';
import apicalls from '@/apiCalls/apicalls';
import ProductoCard from '@/components/ProductoCard';


function CarritoPage(){

    const { carrito, agregarItem, eliminarItem } = useCarrito();
    const [finalResults, setFinalResults] = useState([]);
    const handleAgregar = (id) => {
        agregarItem(id);
    };

    const handleEliminar = (id) => {
        eliminarItem(id);
    };

    const obtainProducts = async () => {
        try {
            const products = await Promise.all(carrito.map(id => apicalls.getProductById(id)));
            setFinalResults(products);
        } catch (error) {
            console.error("Error al obtener productos: ", error);
        }
    };

    useEffect(() => {
        if (carrito.length > 0) {
            obtainProducts();
        }
    }, [carrito]);
    
    const renderProducts = () => {
        if (finalResults.length > 0) {
          return finalResults.map((producto) => (
            <div key={producto.id} className={styles.product}>
              <ProductoCard name={producto.title} image={producto.thumbnail } id={producto.id} />
              <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
            </div>
          ));
        } else {
          return <div>No se encontró nada</div>;
        }
      }
      

    return (
        <>
           <div className={styles.page}>
                <NavBar></NavBar>
                <p>{total} $</p>
                <div className={styles.productsContainer}>
                    {renderProducts()}
                </div>
            </div>
        </>
    )
}
export default CarritoPage;
