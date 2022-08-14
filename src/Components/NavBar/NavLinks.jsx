import { Link , NavLink } from "react-router-dom";
import { useState } from 'react';
import './NavBar.css'

const NavLinks =(props)=>{
    
    const categories =[
        {name:"Jewelery",id:0,route:"/category/jewelery"},
        {name:"Electronics",id:1,route:"/category/electronics"},
        {name:"Men's clothing",id:2,route:"/category/men's clothing"},
        {name:"Women's clothing",id:3,route:"/category/women's clothing"}
    ]

    return(
        <ul className='ulNavigation' >
            {categories.map((category)=><li onClick={()=>props.isMobile && props.closeMobileMenu()} key={category.id} ><NavLink  to={category.route}>{category.name}</NavLink></li>)}
        </ul>
    )
}

export default NavLinks