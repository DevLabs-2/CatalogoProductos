'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => {
    return useContext(CarritoContext);
};

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState();
    useEffect(() => {
        setCarrito(() => {return JSON.parse(localStorage.getItem('carrito')) || [];})
    }, [])

    const agregarItem = (id) => {
        setCarrito((prevCarrito) => {
            const nuevoCarrito = [...prevCarrito, id];
            localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
            console.log(nuevoCarrito)
            return nuevoCarrito;
        });
    };

    const eliminarItem = (id) => {
        setCarrito((prevCarrito) => {
            let nuevoCarrito = prevCarrito;
            const index = prevCarrito.findIndex(item => item === id);
            if (index !== -1) {
                nuevoCarrito = [
                    ...prevCarrito.slice(0, index),
                    ...prevCarrito.slice(index + 1)
                ]
            };
            localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
            return nuevoCarrito;
        });
    };

    const obtenerCarrito = () => {
        return carrito;
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarItem, eliminarItem, obtenerCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};
export const useContextCarrito = () => {
    const context = useContext(CarritoContext);
    if (!context){ throw new Error('useContextCarrito debe ser usado dentro de un CarritoProvider');} return context;
}