import logo from '../../assets/logo.png'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link , NavLink } from "react-router-dom";



const Nav =()=>{

    const categories =[
        {name:"Jewelery",id:0,route:"/category/jewelery"},
        {name:"Electronics",id:1,route:"/category/electronics"},
        {name:"Men's clothing",id:2,route:"/category/men's clothing"},
        {name:"Women's clothing",id:3,route:"/category/women's clothing"}
    ]


    return(
        <header >
            <Link to="/"><img  src={logo} className="logo" alt="Logo" /></Link>
            <nav>
                <ul >
                    {categories.map((category)=><li><NavLink to={category.route}>{category.name}</NavLink></li>)}
                </ul>
            </nav>
            <Link to='/cart'><CartWidget/></Link>
            
          
        </header>
            
        
    )
}

export default Nav