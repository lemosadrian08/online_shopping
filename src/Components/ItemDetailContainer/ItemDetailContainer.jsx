import { useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { SpinnerDotted } from 'spinners-react';
import './ItemDetailContainer.css'
import { useParams } from  "react-router-dom";
import { db } from '../../firebase/firebase'
import { getDoc, collection, doc } from 'firebase/firestore'



const ItemDetailContainer =()=>{

    const {itemId} = useParams()

    const [ product, setProduct ] = useState([])
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(true)

 
    useEffect(()=>{

        const productCollection = collection(db, 'products')
        const refDoc = doc(productCollection, itemId)
        getDoc(refDoc)
        .then (result =>{
            const productdb = {
                id: result.id,
                ...result.data()
            }
            setProduct(productdb)
        })
        .catch(()=>setError(true))
        .finally(()=>setLoading(false)) 
        },[]) 


    return(
    <>

    {loading? <div className='spinnerContainer'><SpinnerDotted color='#004dff'/></div> :
            error? <p>Error</p> :
            <ItemDetail key={product.id} product={product} id={product.id} title={product.title} pictureURL={product.image} description={product.description} price={product.price}/>}
    </>
    )
}

export default ItemDetailContainer