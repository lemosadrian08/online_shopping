import './CartCard.css'
import ClearIcon from '@mui/icons-material/Clear';
import React, { useContext } from 'react'
import { cartContext } from '../CartContext/CartContext.jsx'

const CartCard =({id, title, price, quantity, pictureURL})=>{

    const { removeItem  } = useContext(cartContext)


    const borrar =()=>{
        removeItem(id)
    }


    return(
            <div className='itemCartCardCountainer'>
                <img className='imgCartCard' src={pictureURL} alt={title} />
                <div className='itemCartCardInfoCountainer'>
                    <p className='titleCartCard'>{title}</p>
                    <p className='priceCartCard'> {price} $/unit x {quantity} unit(s) = $ {price*quantity}</p> 
                </div>
                <div className='clearIconContainer'>
                    <ClearIcon onClick={borrar}/>
                </div>
            </div>
    )


}

export default CartCard