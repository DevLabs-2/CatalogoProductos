'use client'
import React, { useState } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import productos from '@/products';
import Navbar from '@/components/NavBar/Navbar';
import Link from 'next/link';
import ProductoCard from '@/components/ProductoCard';
import styles from './Productos.module.css'
const FILTRO = ['name', 'precio', 'descripcion'];

const Productos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handlePickerChange = (event) => {
    setSelectedValue(event.target.value);
  }

  const renderProducts = () => {
    const productosFiltrados = productos
      .filter(createFilter(searchTerm, FILTRO))
      .filter(producto => !selectedValue || producto.cat === selectedValue);

    if (productosFiltrados.length === 0) {
      return <div className={styles.noResults}>No se encontró nada</div>;
    }

    return productosFiltrados.map((producto) => (
      <div key={producto.name} className={styles.product} >
        <ProductoCard producto={producto} index={productosFiltrados.findIndex(prod => prod.name === producto.name)}/>
      </div>
    ));
  }

  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.busquedaContainer}>
        <SearchInput
          className={styles.inputContainer}
          inputClassName={styles.searchInput} 
          onChange={(term) => setSearchTerm(term)} 
          placeholder="Buscar productos..." 
        />
        <div className={styles.filtroContainer}>
          <label>Filtro:</label>
          <select onChange={handlePickerChange} value={selectedValue}>
            <option value="">Todos</option>
            <option value="calzado">Calzado</option>
            <option value="pantalones">Pantalones</option>
            <option value="torso">Torso</option>
          </select>
        </div>
      </div>
      

      

      <div className={styles.productsContainer}>
        {renderProducts()}
      </div>
    </div>
  );
}

export default Productos;
