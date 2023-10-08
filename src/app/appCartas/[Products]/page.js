"use client"; 
import React, { useEffect, useState } from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);
    const cartId = Number(localStorage.getItem('cartId'));

    useEffect(() => {
        fetch(`https://fakestoreapi.com/carts/${cartId}`)
            .then(res => res.json())
            .then(cart => {
                setProducts(cart.products);
            });
    }, [cartId]);

    const handleBack = () => {
        window.history.back();
    }

    
  const handleMoreDetails = (productId) => {
    localStorage.setItem('productId', productId.toString());
    window.location.href = `/appCartas/products/newProducts?cartId=${productId}`;
    console.log(productId)
}
    return (
        <div className="">
            <h1>Productos del Carrito {cartId}</h1>
             <div className="">
                <ul>
                {products.map((product, index) => (
                    <li key={index} className="">
                        Identificador del producto: {product.productId}, 
                        Cantidad del producto: {product.quantity}
                        <button onClick={() => handleMoreDetails(product.productId)}>Más detalles</button> 
                    </li>
                ))}
                </ul>
            </div>
            <button onClick={handleBack}>Página principal</button>
            <footer>
            Laura Sofia @2023
            </footer>
        </div>
    );
}