import { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) =>{
    const [counter, setCounter] = useState(initial);

    const buttonSum =()=>{
        counter < stock && setCounter(counter + 1);
    }

    const buttonRest =()=>{
        counter > 0 && setCounter(counter - 1);
    }

    return(
        <div className='counterContainer'>
            <div className='counterButtonContainer'>
                <button onClick={buttonRest} className='counterButton'>-</button>
                <p className='counterNumber'>{counter}</p>
                <button onClick={buttonSum} className='counterButton'>+</button>
            </div>
            <button className='addToCartButtom' onClick={()=>{onAdd(counter);}}>Add to Cart</button>
        </div>
    );
}

export default ItemCount