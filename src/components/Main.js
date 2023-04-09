import React from 'react'
import Navbar from './Navbar/Navbar'
import { CardContainer } from './ItemListContainer/CardContainer'
import { useState } from 'react';

export const Main = () => {

    const [cart, setCart] = useState(0);
    const sumaItemCarrito = ()=>{
        setCart(cart + 1);
    }
    
    const restaItemCarrito = ()=>{
        setCart(cart - 1);
    }

    return (
        <>
            <Navbar cart={cart} />
            <CardContainer greeting="Bienvenidos a nuestros productos" sumaItemCarrito={sumaItemCarrito} restaItemCarrito={restaItemCarrito} />
        </>
    )
};
