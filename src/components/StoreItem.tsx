import { queryAllByTitle } from "@testing-library/react";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { StoreItemProps } from "../DataType/StoreItemPropsDataType";


export function StoreItem({ id, title, image, price}: StoreItemProps) {

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useContext(ShoppingCartContext)

  
  const quantity = getItemQuantity(id);   //number of item of same id

  return (
    <Card className="h-100">
      <Card.Img
        className="h-60"
        variant="top"
        src={image}
        height="200px"
        style={{ objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column  bg-slate-300">
        <Card.Title>
          <span className="text-lg">{title}</span> 
          <br></br>
          <br></br>
          <span>{"$ " + (price).toFixed(2)}</span>
        
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button id="incr" className="w-100 bg-secondary" onClick={() => increaseCartQuantity(id)}>
              {" "}
              +Add to Cart
            </button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <button className="bg-secondary w-5" onClick={() => decreaseCartQuantity(id)}>-</button>
                <div>
                  <span id="textid" className="font-bold text-lg">{quantity}</span>
                  <span id="textid"> </span>
                  in cart
                </div>
                <button className="bg-secondary w-5" onClick={() => increaseCartQuantity(id)}>+</button>
              </div>
              <button className="bg-slate-700 w-100" onClick={() => removeFromCart(id)}>Remove</button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
