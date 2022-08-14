import './NavBar.css'
import NavLinks from '../NavBar/NavLinks'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
const MovileNavigation =()=>{

    const[ open, setOpen ]=useState(false)
    const hambrgerIcon = <MenuIcon style={{ color: 'white' }} onClick={()=> setOpen(!open)} className='hamburgerIcon'/>
    const closeIcon = <CloseIcon  style={{ color: 'white' }} onClick={()=> setOpen(!open)} className='hamburgerIcon'/>
    const closeMobileMenu =()=>setOpen(!open)
    return(
        <nav className='navMobileNavigation'>
            {open ? closeIcon : hambrgerIcon}
            {open&&<NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
     )
}

export default MovileNavigation