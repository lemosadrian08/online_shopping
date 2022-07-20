import React, { useState , createContext, useEffect } from "react";
export const cartContext = createContext();
const { Provider } = cartContext; 

const CartProvider =({children})=>{

    const [products, setProducts] = useState([])
    const [quantityProducts, setQuantityProducts] = useState(0)
    console.log(quantityProducts); 

    const getQuantityProducts =()=>{
        let quantity = 0
        products.forEach(product=>{
            quantity += product.quantity
        })
        setQuantityProducts(quantity)
    }

    useEffect(()=>{
        getQuantityProducts()
    }, [products])
    
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
        return products.some(product => product.id === id)
    }

    const clear =()=>{
        setProducts([])
    }

    return(
        <Provider value={ {products, quantityProducts, addItem, removeItem, clear, isInCart} }>
            {children}
        </Provider>
    )
}

export default CartProvider


