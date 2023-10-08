"use client"; 
import React, { useEffect, useState } from 'react';
export default function newProducts() {
    const [products, setProducts] = useState([]);
    const productId = Number(localStorage.getItem('productId'));
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(product => {
                setProducts([product]); 
            });
    }, [productId]);
    ;

   function paginaPrincipal(){
    window.location.href = `/appCartas`;
   }

    return(
        <div className="">
        <h1>Carrito número {productId}</h1>
         <div className="">
            <ul>
            {products.map((product, index) => (
                <li key={index} className="">
                    Título del producto: {product.title}
                    <br>
                    </br>
                    Precio del producto: {product.price}
                    <br>
                    </br>
                    Descripción del producto: {product.description}
                    <br>
                    </br>
                    Catergoría del producto: {product.category}
                    <br>
                    </br>
                    Imagen del producto:
                    <br>
                    </br>
                     <img src={product.image}></img>
                </li>
                
            ))}
            </ul>
        </div>
        <button onClick={paginaPrincipal}>Página principal</button>
         
        <footer>
        Laura Sofia @2023
        </footer>
    </div>
    )

}