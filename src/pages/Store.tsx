import { items } from "../data/items";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { AllProducts } from "../centralState/productsState";
import { useErrorHandler } from "react-error-boundary";


export function Store() {

  const [products, setProducts] = useRecoilState(AllProducts);
  const [error, setError] = useState(false);
  const handleError = useErrorHandler();

  const fetchData = async () => {
    try{
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }catch(error) {
      // console.log("Error")
      // throw new Error("something went wrong")
        handleError(error);
    }
    

     Error("something went wrong")
   
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div className=" bg-slate-700 text-center">
      <h1  style={{color:"white"}}>Store</h1>
      <Row md={2} xs={1} lg={5} className="g-0">
        {products.map((CartItemProps) => (

          <Col key={CartItemProps.id}>
            <StoreItem {...CartItemProps} />
          </Col>
        ))}
      </Row>
      </div>
   
  );
}
