import { useContext } from "react"
import { Stack } from "react-bootstrap"
import { useRecoilValue } from "recoil"
import { AllProducts } from "../centralState/productsState"
import { ShoppingCartContext } from "../context/ShoppingCartContext"
import { CartItemProps } from "../DataType/CartItemDataType"



export function CartItem({ id, quantity}: CartItemProps){
    
    const products = useRecoilValue(AllProducts); 
    const {removeFromCart} = useContext(ShoppingCartContext)
    const item = products.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="vertical" gap={2}  className="d-flex align-items-center bg-light border-solid">
            
            <img 
            src={ item.image}
            style={{ width: "125px", height: "150px" }}
            />
           
            <div className=" text-center">
            <div>
                {item.title}{" "}
                {quantity > 1 && (
                    <span className="text-black font-bold" style={{ fontSize:"1rem"}}>
                        x{quantity}
                    </span>
                )}
            </div>
            <div className="text-black" style={{fontSize:"2rem"}}>
              {"$ " + (item.price).toFixed(2)}
            </div>
            </div>
            {/* <div>
            {"$ " + (item.price).toFixed(2)}
            </div> */}
            <button  className="bg-slate-700 w-20" onClick={() => removeFromCart(item.id)}>&times;</button>
        </Stack>

    )
}