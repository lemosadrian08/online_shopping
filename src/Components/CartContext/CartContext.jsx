import React, { useState , createContext, useEffect } from "react";
export const cartContext = createContext();
const { Provider } = cartContext; 

const CartProvider =({children})=>{

    const [products, setProducts] = useState([])
    const [quantityProducts, setQuantityProducts] = useState(0)
    const [total, setTotal] = useState(0)
    const [taxes, setTaxes] = useState(0)
    const [totalbt, setTotalbt] = useState(0)
    const [totalat, setTotalat] = useState(0)
    
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
        let taxes = 0
        let shipping= 20
        let totalbt=0
        let totalat=0
        products.forEach(product=>{
            resultado += (product.price * product.quantity)
            total=resultado
            totalbt=(total+shipping)
            taxes=(totalbt*0.21)
            totalat=(totalbt+taxes)
        })
        setTotal(total.toFixed(2))
        setTaxes(taxes.toFixed(2))
        setTotalbt(totalbt.toFixed(2))
        setTotalat(totalat.toFixed(2))
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
        <Provider value={ {products, quantityProducts, total, totalat, totalbt, taxes, addItem, removeItem, clear, isInCart} }>
            {children}
        </Provider>
    )
}

export default CartProvider


