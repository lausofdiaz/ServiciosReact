"use client";
import React, { useEffect, useState } from 'react';
import styles from './Carts.module.css'
import Link from 'next/link'; 

export default function listProducts() {
const [products, setProducts] = useState([]);
useEffect(() => {
    // Realiza una solicitud fetch a la API para obtener datos
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json()) 
      .then(data => setProducts(data)); // Actualiza el estado de productos con los datos recibidos
  }, []); 
  return (
    <div className={styles.body}>
    <div className={styles.div}>
    <header className={styles.header}>
      <h1 className={styles.h1}>App</h1>
    </header>
    <div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}><Link href="/appCartas">Carros</Link></li>
          <li className={styles.li}><Link href="/listProducts">Productos</Link></li>
          <li className={styles.li}><Link href="/">Nuevo Producto</Link></li>
          <li className={styles.li}><Link href="/newCarts">Nuevo Carro</Link></li>
        </ul>
      </nav>
      <main className={styles.main}>
        <h2 className={styles.h2}>Productos</h2>
        <div className={styles.div}>
                    {products.map((products) => (
              <div className={styles.div} key={products.id}>
                <p className={styles.p}>Título: {products.title}</p>
                <p className={styles.p}>Precio: {products.price}</p>
                <p className={styles.p}>Categoría: {products.category}</p>
                <p className={styles.p}>Imagen:
                <br></br>
                <img className={styles.image} src={products.image}></img></p>
                </div>
            ))}

        </div>
      </main>
    </div>
    <footer className={styles.footer}>
     Laura Sofia @2023
    </footer>
  </div>
  </div>
);
}
