import './Item.css'
import { Link } from "react-router-dom";

const Item =({id, title, price, pictureURL})=>{

    const route = `/${id}`

    return(
        <div className='itemContainer'>
            <Link  to={route}><img src={pictureURL}  alt={title} className='itemImage'/></Link>
            <div className='itemInfoContainer'>
                <h2  className='itemTitle'>{title}</h2>
                <p className='itemPrice'>${price}</p>
                <Link className='itemShowMore' to={route}>Show more</Link>
            </div>
        </div>
        
        
    )
}

export default Item