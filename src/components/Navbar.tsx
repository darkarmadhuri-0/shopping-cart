import { useContext } from 'react';
import { Container, Nav, Navbar as NavbarBS} from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
//import { useShoppingCart } from '../context/ShoppingCartContext';




export function Navbar(){
   // const {openCart, cartQuantity } = useShoppingCart()
 
      const {openCart, cartQuantity } = useContext(ShoppingCartContext)
          return(
     <NavbarBS sticky='top' className='bg-white shadow-sm navbar-inner'>
      <Container>
         <Nav className='me-auto font-extrabold'>
            <Nav.Link to='/' as={NavLink} >Home</Nav.Link>
            <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
            <Nav.Link to='/about' as={NavLink}>Help Center</Nav.Link>
         </Nav>
         
         {cartQuantity > 0 &&(
         <button 
          onClick={openCart}                 //opens the cart
         style={ {width:"3rem", height:"3rem", position:"relative"}} className='rounded-circle'>
        
         <img src='/imgs/cart icon 01.jpg'></img>
         <div
            className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={ { 
               color:"white" ,
               width:"1.5rem",
               height:"1.5rem",
               position:"absolute",
               bottom:0,
               right:0,
               transform:"translate(25%, 25%)"
            }}
         >
             {cartQuantity}    {/*  used to display the number of item in cart */}
         </div>
         </button>
         )}
      </Container>
     </NavbarBS>
    )
}