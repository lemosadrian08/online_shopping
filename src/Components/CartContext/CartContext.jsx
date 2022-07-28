import React, { useState , createContext, useEffect } from "react";
export const cartContext = createContext();
const { Provider } = cartContext; 

const CartProvider =({children})=>{

    const [products, setProducts] = useState([])
    const [quantityProducts, setQuantityProducts] = useState(0)
    const [total, setTotal] =useState(0)


    const getQuantityProducts =()=>{
        let quantity = 0
        products.forEach(product=>{
            quantity += product.quantity
        })
        setQuantityProducts(quantity)
    }
    
    const getTotal =()=>{
        let resultado = 0
        let total = 0
        products.forEach(product=>{
            resultado += (product.price * product.quantity)
            total=resultado.toFixed(2)
        })
        setTotal(total)
    }

    useEffect(()=>{
        getQuantityProducts()
        getTotal()
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
        <Provider value={ {products, quantityProducts, total, addItem, removeItem, clear, isInCart} }>
            {children}
        </Provider>
    )
}

export default CartProvider


