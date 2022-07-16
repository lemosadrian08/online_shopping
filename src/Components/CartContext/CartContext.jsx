import React, { useState , createContext } from "react";
export const cartContext = createContext();
const { Provider } = cartContext; 

const CartProvider =({children})=>{

    const [products, setProducts] = useState([])
    console.log(products); 
    
    const addItem =(product)=>{
        if (isInCart(product.id)){
            const aux = [...products]
            const found = aux.find(p=>p.id===product.id)
            found.quantity += product.quantity
            setProducts(aux)
        }else{
            setProducts([...products, product])
        }
    }
    
    const removeItem =(id)=>{
        setProducts(products.filter(product => product.id !== id))
    }

    const isInCart =(id)=>{
        return products.some(p => p.id === id)
    }

    const clear =()=>{
        setProducts([])
    }

    return(
        <Provider value={ {products, addItem, removeItem, clear, isInCart} }>
            {children}
        </Provider>
    )
}

export default CartProvider


