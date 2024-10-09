import React, { Component } from 'react';
import SearchInput, { createFilter } from 'react-search-input';

import products from '@/products';

const FILTRO = ['name', 'precio', 'descripcion'];

class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      selectedValue: '',
    };
  }

  Barra(term) {
    this.setState({ searchTerm: term });
  }

  handlePickerChange = (event) => {
    this.setState({ selectedValue: event.target.value });
  }

  renderProducts = () => {
    const { searchTerm, selectedValue } = this.state;
    const productos_filtrados = productos
      .filter(createFilter(searchTerm, FILTRO))
      .filter(producto => !selectedValue || producto.categoría === selectedValue);

    if (productos_filtrados.length === 0) {
      return <div style={styles.noResults}>No se encontró nada</div>;
    }

    return productos_filtrados.map((producto) => (
      <div key={producto.name} style={styles.product}>
        <img src={producto.imagen} alt={producto.name} style={styles.image} />
        <h3>{producto.name}</h3>
        <p>{producto.descripcion}</p>
        <div style={styles.price}>${producto.precio}</div>
        <button style={styles.button}>Añadir al carrito</button>
      </div>
    ));
  }

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Tienda de Productos</h1>
        <div style={styles.filtroContainer}>
          <label>Filtro:</label>
          <select onChange={this.handlePickerChange} value={this.state.selectedValue}>
            <option value="">Todos</option>
            <option value="collar">Collares</option>
            <option value="anillo">Anillos</option>
            <option value="pulsera">Pulseras</option>
            <option value="aritos">Aritos</option>
          </select>
        </div>

        <SearchInput style={styles.searchInput} onChange={this.Barra.bind(this)} placeholder="Buscar productos..." />

        <div style={styles.productsContainer}>
          {this.renderProducts()}
        </div>
      </div>
    );
  }
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
    height: '200px', // Altura fija para uniformidad
    objectFit: 'cover', // Mantiene la proporción de la imagen
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