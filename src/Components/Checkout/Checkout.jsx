import React, { useContext, useState } from 'react'
import { cartContext } from '../CartContext/CartContext.jsx'
import { db } from '../../firebase/firebase'
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore'
import './Checkout.css'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const Checkout =()=>{

    const { products, total, clear } = useContext(cartContext)

    const [ name, setName ] = useState("")
    const [ number, setNumber ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ customer, setCustomer] =useState({})
    const [ idSales, setIdSales ] = useState ("")


    const checkout =()=>{
        const salesCollection = collection(db, 'sales')
        addDoc(salesCollection,{
            customer: customer,
            products: products,
            date: serverTimestamp(),
            total: total
        })
        .then((result)=>{
            setIdSales(result.id)
            console.log(idSales);
        })
        .then(()=>{
            Swal.fire(
                'The order has been placed',
                `${idSales}`,
                'success')
        })
        clear()

    }
    const submit=(event)=>{
        event.preventDefault()
        setCustomer({name:name, number:number, email:email})
    }
    const nameEvent =(event)=>{
        setName(event.target.value)
    }
    const numberEvent =(event)=>{
        setNumber(event.target.value)
    }
    const emailEvent =(event)=>{
        setEmail(event.target.value)
    }

    return(
    <>
    {customer.name==null
    ?
    <div>
        <p>To complete your order we need some imformation first:</p>
        <form className='form' id='form'>
            <label id="name-label">Name: <input placeholder="Name" required onInput={nameEvent} type="text" /></label>
            <label id="number-label">Number: <input placeholder="Number" required onInput={numberEvent} type="text" /></label>
            <label id="email-label">E-mail: <input placeholder="e-mail" required onInput={emailEvent} type="email" /></label>
            <input type="submit" onClick={submit} value="Continue" />
        </form>

        
    </div>
    :
    <div>
        <p>{customer.name} by placing your order, you agree to online shopping's privacy notice and conditions of use.</p>
        <p>Total: {total}</p>
        <Link to='/'><button onClick={checkout}>Place your order</button></Link>
        
    </div>
}
    </>
    )
}

export default Checkout