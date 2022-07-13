import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import { SpinnerDotted } from 'spinners-react';
import './ItemListContainer.css'
import { useParams } from  "react-router-dom";


const ItemListContainer =({greeting})=>{
    
    const {categoryName} = useParams()


    const [ products, setProducts ] = useState([])
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(true)

 
    useEffect(()=>{
        const URL = categoryName
            ?`https://fakestoreapi.com/products/category/${categoryName}`
            :'https://fakestoreapi.com/products'

        fetch(URL)
            .then(res=>res.json())
            .then(data=>setProducts(data))
            .catch(()=>setError(true))
            .finally(()=>setLoading(false))
        },[categoryName]) 




    return(
        <>
            
        {loading? <div className='spinnerContainer'><SpinnerDotted color='#004dff'/></div> :
            error? <p>Error</p> :
             <ItemList products={products} />
        }

       </>
    )
};


export default ItemListContainer