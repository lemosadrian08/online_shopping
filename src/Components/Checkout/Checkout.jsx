import { Link } from "react-router-dom";
import './Checkout.css'

const Checkout =()=>{
    return(
        <div className="checkoutButtomContainer">
            <Link to='/cart'><button className="checkoutButtom">Proceed to checkout</button></Link>
        </div>
    )
}

export default Checkout