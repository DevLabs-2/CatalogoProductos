'use client'

import { useState, useEffect } from 'react';
import './Carousel.module.css'
import img1 from '../../Imagenes/Imagen1.jpg';
import img2 from '../../Imagenes/Imagen2.jpg';
import img3 from '../../Imagenes/Imagen3.jpg';
import Image from 'next/image';

import Carousel from 'react-bootstrap/Carousel';

export default function CarouselSlider() {

  return (
    <Carousel>
      <Carousel.Item>
        <Image src={img1} alt='img1'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={img2} alt='img2'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={img3} alt='img3'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}