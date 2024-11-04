'use client'
import NavBar from '../../src/components/NavBar/Navbar';
import styles from "./CarritoPage.module.css";
import { useCarrito } from '@/carrito';


function CarritoPage(){

    const { carrito, agregarItem, eliminarItem } = useCarrito();

    const handleAgregar = (id) => {
        agregarItem(id);
    };

    const handleEliminar = (id) => {
        eliminarItem(id);
    };

    return (
        <>
            <div className={styles.page}>
                <NavBar></NavBar>
                {carrito.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => handleEliminar(item)}>Eliminar</button>
                    </li>
                ))}
                <button onClick={() => handleAgregar('nuevo_id')}>Agregar nuevo producto</button>
            </div>
        </>
    )
}
export default CarritoPage;