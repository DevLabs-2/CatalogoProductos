'use client'
import React, { useState } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import productos from '@/products';
import Navbar from '@/components/NavBar/Navbar';
import Link from 'next/link';
import ProductoCard from '@/components/ProductoCard';

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
      return <div style={styles.noResults}>No se encontró nada</div>;
    }

    return productosFiltrados.map((producto) => (
      <div key={producto.name} style={styles.product}>
        
        <ProductoCard producto={producto} index={productosFiltrados.findIndex(prod => prod.name === producto.name)}/>

      </div>
    ));
  }

  return (
    <div style={styles.container}>
      <Navbar/>
      <h1 style={styles.title}>Tienda de Productos</h1>
      <div style={styles.filtroContainer}>
        <label>Filtro:</label>
        <select onChange={handlePickerChange} value={selectedValue}>
          <option value="">Todos</option>
          <option value="calzado">Calzado</option>
          <option value="pantalones">Pantalones</option>
          <option value="torso">Torso</option>
        </select>
      </div>

      <SearchInput 
        style={styles.searchInput} 
        onChange={(term) => setSearchTerm(term)} 
        placeholder="Buscar productos..." 
      />

      <div style={styles.productsContainer}>
        {renderProducts()}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    marginBottom: '20px',
  },
  searchInput: {
    margin: '10px 0',
    padding: '8px',
    width: '80%',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  filtroContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  productsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: '1200px',
  },
  product: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    textAlign: 'center',
    background: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  price: {
    fontSize: '1.2em',
    color: '#b12704',
    margin: '10px 0',
  },
  button: {
    padding: '10px',
    background: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  noResults: {
    color: '#777',
    marginTop: '20px',
  },
};

export default Productos;
