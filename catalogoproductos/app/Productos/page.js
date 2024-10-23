'use client'
import React, { useState, useEffect, use } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import Navbar from '@/components/NavBar/Navbar';
import Link from 'next/link';
import ProductoCard from '@/components/ProductoCard';
import styles from './Productos.module.css'
import apiService from '@/apiCalls/apicalls';
const FILTRO = ['name', 'precio', 'descripcion'];

const Productos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pickerChanged, setPickerChanged] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [products, setProducts] = useState([]);
  const [tags, setTags] = useState([])
  useEffect(() => {
      const get = async () => {
          let data = await apiService.getProducts();
          setProducts(data);
          data = await apiService.getCategories();
          console.log(data)
          setTags(data)
      }
      get();
  }, []);
  
  useEffect(() => {
    //fetch de la busqueda filtrada por nombre
    if(pickerChanged){
      //fetch de la busqueda con los filtros por tag
      setPickerChanged(false)
    }
  },[searchTerm, pickerChanged])

  const handlePickerChange = (event) => {
    setSelectedValue(event.target.value)
    setPickerChanged(true)
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
            <option key={'all'} value={'all'}>All</option>
            {tags.map((tag) => (
              <option key={tag.slug} value={tag.slug}>{tag.name}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* <div className={styles.productsContainer}>
        {renderProducts()}
      </div> */}
    </div>
  );
}

export default Productos;
