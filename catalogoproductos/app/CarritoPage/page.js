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
    const [total, setTotal] = useState(0);
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
        let precio = 0;
        finalResults.forEach((result) => {
            precio += result.price
        })  
        setTotal(precio)
    }, [finalResults])

    useEffect(() => {
        if(carrito) {
            if (carrito.length > 0) {
                obtainProducts();
            }
            else {
                setFinalResults([])
            }
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
                <strong>Importe total del carrito: {total} $</strong>
                <div className={styles.productsContainer}>
                    {renderProducts()}
                </div>
            </div>
        </>
    )
}
export default CarritoPage;