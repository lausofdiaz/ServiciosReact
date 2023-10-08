"use client";
import React, { useEffect, useState } from 'react';
import styles from './Carts.module.css'
import Link from 'next/link'; 

export default function Home() {
const [carts, setCarts] = useState([]);
useEffect(() => {
    // Realiza una solicitud fetch a la API para obtener datos
    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json()) 
      .then(data => setCarts(data)); // Actualiza el estado de carts con los datos recibidos
  }, []); 

  const handleMoreDetails = (cartId) => {
    localStorage.setItem('cartId', cartId.toString());
    window.location.href = `/appCartas/products?cartId=${cartId}`;
    console.log(cartId)
}

  
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
          <li className={styles.li}><Link href="">Nuevo Producto</Link></li>
          <li className={styles.li}><Link href="/newCarts">Nuevo Carro</Link></li>
        </ul>
      </nav>
      <main className={styles.main}>
        <h2 className={styles.h2}>Carts</h2>
        <div className={styles.div}>
                    {carts.map((cart) => (
              <div className={styles.div} key={cart.id}>
                <h3 className={styles.h3}>Identificador del carro: {cart.id}</h3>
                <p className={styles.p}>Identificador del usuario: {cart.userId}</p>
                <p className={styles.p}>Fecha: {cart.date}</p>
                <h4>Productos:</h4>
                <ul>
                  {cart.products.map((product, index) => (
                    <li key={index}>
                    Producto número: {product.productId}, Cantidad del producto: {product.quantity}
                  </li>
                  ))}
                </ul>
                <button onClick={() => handleMoreDetails(cart.id)}>Más detalles</button>
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
