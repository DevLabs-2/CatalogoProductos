import React, { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => {
    return useContext(CarritoContext);
};

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(() => {
        return JSON.parse(localStorage.getItem('carrito')) || [];
    });

    const agregarItem = (id) => {
        setCarrito((prevCarrito) => {
            const nuevoCarrito = [...prevCarrito, id];
            localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
            return nuevoCarrito;
        });
    };

    const eliminarItem = (id) => {
        setCarrito((prevCarrito) => {
            const nuevoCarrito = prevCarrito.filter((item) => item !== id);
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
