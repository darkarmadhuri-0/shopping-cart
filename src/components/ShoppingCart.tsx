import { type } from "os";
import { Offcanvas, OffcanvasHeader, Stack } from "react-bootstrap";
import { isTemplateExpression } from "typescript";
//import { useShoppingCart } from "../context/ShoppingCartContext";
//import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import { StoreItem } from "./StoreItem";
//import storeItems from "../data/items.json";
import { ShoppingCartProps } from "../DataType/ShoppingCartDataType";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { items } from "../data/items";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { AllProducts } from "../centralState/productsState";
import {Link } from 'react-router-dom';

export function ShoppingCart({ isOpen }: ShoppingCartProps){

    const products= useRecoilValue(AllProducts)
  
        
   
    // const {closeCart, cartItems} = useShoppingCart()
       const {closeCart, cartItems } = useContext(ShoppingCartContext)
    return (
     <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
               {cartItems.map(item =>(
               <CartItem key={item.id} {...item}/>
               ))}
               <div className="ms-auto fw-bold fs-5">
                Total {"$ " + (
                     cartItems.reduce((total,cartItem) => {        //getting individual item from cartItem
                    const item = products.find(i =>i.id === cartItem.id) 
                    return total + (item?.price || 0) * cartItem.quantity
                },0)
              ).toFixed(2)}
               </div>
            </Stack>
        </Offcanvas.Body>
        <OffcanvasHeader>
            <Link to="/components/BuyNow">
                 <button className="w-100 bg-primary">Buy Now</button> 
            </Link>
           
        </OffcanvasHeader>
     </Offcanvas>
    )
}