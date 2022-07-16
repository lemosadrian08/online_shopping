import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx';
import { useState } from 'react';
import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { cartContext } from '../CartContext/CartContext.jsx';




const ItemDetail =({product, id,title,description,pictureURL,price})=>{

    const { addItem } = useContext(cartContext)
    
    const [ units, setUnits ] = useState(0)
    
    const onAdd =(counter)=>{
        counter > 0 && setUnits(counter)
    }

    const checkout =()=>{
        addItem({...product, quantity: units})
    }

    return(
        
        <div className='itemDetailCountainer'>
            <img className="imgDetail" src={pictureURL} alt={title} />
            <div className='itemDetailInfoCountainer'>
                <h2 className="titleDetail">{title}</h2>
                <p className="descriptionDetail">{description}</p>
                <p className="priceDetail">${price}</p>
                {
                units!=0
                ? <div className="checkoutButtomContainer"><Link to='/cart'><button onClick={checkout} className="checkoutButtom">Proceed to checkout</button></Link></div>  
                : <ItemCount stock={5} initial={0} onAdd={onAdd} />
                }
            </div>
        </div>
    )
    
}

export default ItemDetail