"use client";
import Link from 'next/link'; 
import React, { useState } from 'react';

// NewCart.js



export default function NewCart() {
  const [cart, setCart] = useState({
    userId: '',
    date: '',
    products: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza una solicitud POST a tu endpoint para agregar un nuevo carrito
    fetch('https://fakestoreapi.com/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart),
    })
      .then((response) => response.json())
      .then((data) => {
        // Lógica para manejar la respuesta (puede ser redireccionar o mostrar un mensaje)
        console.log('Nuevo carrito agregado:', data);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCart((prevCart) => ({
      ...prevCart,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Agregar Nuevo Carrito</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userId">Usuario ID:</label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={cart.userId}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="date">Fecha:</label>
        <input
          type="text"
          id="date"
          name="date"
          value={cart.date}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="products">Productos:</label>
        <textarea
          id="products"
          name="products"
          value={cart.products}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Agregar Carrito</button>
      </form>
    </div>
  );
}
