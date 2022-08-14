import logo from '../../assets/logo.png'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from "react-router-dom";
import Navigation from '../NavBar/Navigation.jsx'
import MovileNavigation from '../NavBar/MovileNavigation.jsx'



const Nav =()=>{

    



    return(

        <header >
            <Link to="/"><img  src={logo} className="logo" alt="Logo" /></Link>
            <Navigation/> 
            <MovileNavigation/> 
            <Link to='/cart'><CartWidget/></Link>
        </header>

            
    )
}

export default Nav