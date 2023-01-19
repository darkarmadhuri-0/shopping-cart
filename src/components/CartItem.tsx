import { useContext } from "react"
import { Stack } from "react-bootstrap"
import { useRecoilValue } from "recoil"
import { AllProducts } from "../centralState/productsState"
import { ShoppingCartContext } from "../context/ShoppingCartContext"
//import { useShoppingCart } from "../context/ShoppingCartContext"
import {items} from "../data/items"
//import storeItems from "../data/items"
import { CartItemProps } from "../DataType/CartItemDataType"
//import { formatCurrency } from "../utilities/formatCurrency"



export function CartItem({ id, quantity}: CartItemProps){
    
    const products = useRecoilValue(AllProducts); 

    // const { removeFromCart} = useShoppingCart()
      const {removeFromCart} = useContext(ShoppingCartContext)
    const item = products.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            
            <img 
            src={ item.image}
            style={{ width: "125px", height: "105px" }}
            />
           
            <div className="me-auto">
            <div>
                {item.title}{" "}
                {quantity > 1 && (
                    <span className="text-muted" style={{ fontSize:"1rem"}}>
                        x{quantity}
                    </span>
                )}
            </div>
            <div className="text-muted" style={{fontSize:"2rem"}}>
              {"$ " + (item.price).toFixed(2)}
            </div>
            </div>
            <div>
            {"$ " + (item.price).toFixed(2)}
            </div>
            <button  onClick={() => removeFromCart(item.id)}>&times;</button>
        </Stack>

    )
}