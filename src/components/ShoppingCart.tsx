import { Button, Offcanvas, OffcanvasHeader, Stack } from "react-bootstrap";
import { CartItem } from "./CartItem";
import { ShoppingCartProps } from "../DataType/ShoppingCartDataType";
import { useContext} from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useRecoilValue } from "recoil";
import { AllProducts } from "../centralState/productsState";
import {Link } from 'react-router-dom';

export function ShoppingCart({ isOpen }: ShoppingCartProps){

    const products= useRecoilValue(AllProducts)
    const {closeCart, cartItems } = useContext(ShoppingCartContext)
    return (
     <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton className="bg-secondary">
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-slate-300">
            <Stack gap={5} border-solid>
            
               {cartItems.map(item =>(
               <CartItem key={item.id} {...item}/>
               ))}
            
               <div className="ms-auto fw-bold fs-5 text-black">
                Total {"$ " + (
                     cartItems.reduce((total,cartItem) => {        //getting individual item from cartItem
                    const item = products.find(i =>i.id === cartItem.id) 
                    return total + (item?.price || 0) * cartItem.quantity
                },0)
              ).toFixed(2)}
               </div>
            </Stack>
        </Offcanvas.Body>
        <OffcanvasHeader className="bg-secondary">
            {/* <Link to="/components/BuyNow" className="w-100 bg-primary text-center">
                 <button >Buy Now</button> 
            </Link> */}
             <Button as="a" href="/components/BuyNow" className="text-black w-100 ">Buy Now</Button>
           
        </OffcanvasHeader>
     </Offcanvas>
    )
}