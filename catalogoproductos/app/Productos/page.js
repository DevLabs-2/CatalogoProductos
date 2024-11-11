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
  const [searchChanged, setSearchChanged] = useState(false);
  const [pickerChanged, setPickerChanged] = useState(false);
  const [selectedTag, setselectedTag] = useState('all');
  const [products, setProducts] = useState([]);
  const [tags, setTags] = useState([])
  const [taggedResults, setTaggedResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [finalResults, setFinalResults] = useState([]);

  useEffect(() => {
      const get = async () => {
          let data = await apiService.getProducts();
          setProducts(data);
          setFinalResults(data);
          data = await apiService.getCategories();
          setTags(data)
      }
      get();
  }, []);

  useEffect(() => {
      if(selectedTag === "all"){
        const get = async () => {
          setTaggedResults(await apiService.getProducts())
        }
        get();
      }
      else {
        const getTagged = async () => {
          setTaggedResults(await apiService.getProductsByCategory(selectedTag))
        }
        getTagged()
      }
  },[selectedTag])


  useEffect(() => {
      const get = async () => {
        setSearchResults(await apiService.searchProducts(searchTerm)); 
      }
      get();
  },[searchTerm])

  useEffect(() => {
    const intersection = taggedResults.filter(taggedProduct =>
      searchResults.some(searchProduct => searchProduct.id === taggedProduct.id)
    );
    setFinalResults(intersection)
  },[taggedResults, searchResults])

  const handlePickerChange = (event) => {
    setselectedTag(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event)
  }

  const renderProducts = () => {
    if (finalResults.length > 0) {
      return finalResults.map((producto) => (
        <div key={producto.id} className={styles.product}>
          <ProductoCard name={producto.title} image={producto.thumbnail } id={producto.id} />
        </div>
      ));
    } else {
      return <div>No se encontró nada</div>;
    }
  }
  

  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.busquedaContainer}>
        <SearchInput
          className={styles.inputContainer}
          inputClassName={styles.searchInput} 
          onChange={handleSearchChange} 
          placeholder="Buscar productos..." 
        />
        <div className={styles.filtroContainer}>
          <label>Filtro:</label>
          <select onChange={handlePickerChange} value={selectedTag}>
            <option key={'all'} value={'all'}>All</option>
            {tags.map((tag) => (
              <option key={tag.slug} value={tag.slug}>{tag.name}</option>
            ))}
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
