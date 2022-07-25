import React, { useContext, useState } from 'react'
import { cartContext } from '../CartContext/CartContext.jsx'
import "./Cart.css"
import CartCard from '../CartCard/CartCard.jsx'
import { Link } from "react-router-dom";
import { db } from '../../firebase/firebase'
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore'



const Cart =()=>{

    const { products, quantityProducts, clear } = useContext(cartContext)
/*     const [ idSales, setIdSales ] = useState ("")

    const consumerInfo ={
        name: 'juan',
        phone: '21923981238',
        email: 'juan@gmail.com',
    }
    const checkout =()=>{
        const salesCollection = collection(db, 'sales')
        addDoc(salesCollection,{
            consumerInfo,
            products: products,
            date: serverTimestamp(),
            total:100
        })
        .then((result)=>{
            setIdSales(result.id)
        })
    } */

    return(

        <>
         {
             quantityProducts===0
            ?
            <div className='emptyMessageContainer'>
                <p className='emptyMessage'> Your cart is empty. Go check out our products by clicking <Link className='link' to='/'>here</Link></p>
            </div>
            :
            <div>
                {products.map((product)=><CartCard key={product.id} id={product.id} title={product.title} price={product.price} quantity={product.quantity} pictureURL={product.image} /> )}
                <div className='clearButtomContainer'>
                    <button className='clearButtom' onClick= { clear }>Clear all products</button> 
                </div>        
            </div>
         }
{/*          <button onClick={checkout}>checkout</button> */}
        </>
    )
}

export default Cart