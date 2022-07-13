import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx';
import Checkout from '../Checkout/Checkout.jsx';
import { useState } from 'react';



const ItemDetail =({id,title,description,pictureURL,price})=>{
    
    const [ units, setUnits ] = useState(0)
    console.log(units);
    
    const onAdd =(counter)=>{
        counter > 0 && setUnits(counter) 
    }


    return(
        
        <div className='itemDetailCountainer'>
            <img className="imgDetail" src={pictureURL} alt={title} />
            <div className='itemDetailInfoCountainer'>
                <h2 className="titleDetail">{title}</h2>
                <p className="descriptionDetail">{description}</p>
                <p className="priceDetail">${price}</p>
                {units!=0? <Checkout/> :<ItemCount stock={5} initial={0} onAdd={onAdd} />}
            </div>
        </div>
    )
    
}

export default ItemDetail