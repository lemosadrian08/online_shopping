import React, { useContext, useState } from 'react'
import { cartContext } from '../CartContext/CartContext.jsx'
import "./Cart.css"
import CartCard from '../CartCard/CartCard.jsx'
import { Link } from "react-router-dom";


const Cart =()=>{

    const { products, total, quantityProducts, clear } = useContext(cartContext)


    return(
            
             quantityProducts===0
            ?
            <div className='emptyMessageContainer'>
                <p className='emptyMessage'> Your cart is empty. Go check out our products by clicking <Link className='link' to='/'>here</Link></p>
            </div>
            :
            <div className='CardCartContainer'>
                {products.map((product)=><CartCard key={product.id} id={product.id} title={product.title} price={product.price} quantity={product.quantity} pictureURL={product.image} /> )}
                <p className='total'>Total: ${total}</p>
                <div className='ButtomsContainer'>
                    <Link className='buttomCheckoutContainer' to='/checkout'><button className='checkoutButtom'>Proceed to checkout</button></Link>
                    <button className='clearButtom' onClick= { clear }>Clear all products</button> 
                </div>        
            </div>
    )
}

export default Cart