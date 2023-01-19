import { queryAllByTitle } from "@testing-library/react";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
//import { useShoppingCart } from "../context/ShoppingCartContext";
import { StoreItemProps } from "../DataType/StoreItemPropsDataType";
//import { formatCurrency } from "../utilities/formatCurrency";


export function StoreItem({ id, title, image, price}: StoreItemProps) {
  //console.log(id);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useContext(ShoppingCartContext)
  // useShoppingCart();

  
  const quantity = getItemQuantity(id);   //number of item of same id

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={image}
        height="200px"
        style={{ objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-item-baseline mb-4">
          <span className="fs-2">{title}</span> 
           <span className="ms-5 text-muted">{"$ " + (price).toFixed(2)}</span>
        
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button className="w-100 bg-primary" onClick={() => increaseCartQuantity(id)}>
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
                <button className="bg-primary" onClick={() => decreaseCartQuantity(id)}>-</button>
                <div>
                  <span className="fs-3">{quantity}</span>
                  in cart
                </div>
                <button className="bg-primary" onClick={() => increaseCartQuantity(id)}>+</button>
              </div>
              <button className="bg-danger" onClick={() => removeFromCart(id)}>Remove</button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
