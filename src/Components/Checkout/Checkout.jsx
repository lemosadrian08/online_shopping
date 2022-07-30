import React, { useContext, useState } from 'react'
import { cartContext } from '../CartContext/CartContext.jsx'
import { db } from '../../firebase/firebase'
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore'
import './Checkout.css'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const Checkout =()=>{

    const { products, total, clear, totalat, totalbt, taxes, quantityProducts} = useContext(cartContext)

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
            Swal.fire(
                'The order has been placed',
                `This is your order id: ${result.id}`,
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
    <div className='checkoutContainer'>
        <p className='textForm'>To complete your order we need some imformation first:</p>
        <form className='form' id='form'>
            <label id="name-label"><input className='nameInput' placeholder="Name" required onInput={nameEvent} type="text" autoComplete='name'/></label>
            <label id="number-label"><input className='numberInput' placeholder="Number" required onInput={numberEvent} type="text" autoComplete='tel' /></label>
            <label id="email-label"><input className='emailInput' placeholder="E-mail" required onInput={emailEvent} type="email" /></label>
            <input className='buttomContinue' type="submit" onClick={submit} value="Continue" />
        </form>        
    </div>
    :
    <div className='checkoutContainer'>

            <p className='textMesagge' >By placing your order, you agree to online shopping's privacy conditions of use.</p>
            
            <div className='table'>
                <p className='textMesagge' id='TA'>Items ({quantityProducts}):</p>
                <p className='textMesagge' id='TB'>Shipping & handling:</p>
                <p className='textMesagge' id='TC'>Total before tax:</p>
                <p className='textMesagge' id='TD'>Tax (21%):</p>
           
                <p className='textMesagge' id='TE'>Order total:</p>

                <p id='T1'>${total}</p>
                <p id='T2'>$20</p>
                <p id='T3'>${totalbt}</p>
                <p id='T4'>${taxes}</p>
                <p id='T5'>${totalat}</p>
            </div>
        <Link to='/'><button className='buttomPlaceYourOrder' onClick={checkout}>Place your order</button></Link>
    </div>
}
    </>
    )
}

export default Checkout