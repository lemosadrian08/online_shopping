import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useContext } from 'react'
import { cartContext } from '../CartContext/CartContext.jsx'
import './CartWidget.css'


const CartWidget =()=>{

    const { quantityProducts } = useContext(cartContext)


    return(
        <div className='CartWidgetContainer'>    
            <ShoppingCartIcon/>
            {quantityProducts>0&&<p className='CartWidgetDisplay'>{quantityProducts}</p>}
        </div>
    
    )
};

export default CartWidget