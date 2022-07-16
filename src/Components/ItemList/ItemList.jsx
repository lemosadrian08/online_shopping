import Item from '../Item/Item.jsx'
import './ItemList.css'

const ItemList =({products})=>{
    return(
        <div className='ItemList'>
            {products.map((product)=><Item key={product.id} id={product.id} title={product.title} price={product.price} pictureURL={product.image} />  )}
        </div>
    )
}

export default ItemList