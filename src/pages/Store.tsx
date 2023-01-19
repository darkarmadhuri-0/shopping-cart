//import storeItems from "../data/items";
import { items } from "../data/items";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { CartItemProps } from "../DataType/CartItemDataType";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { AllProducts } from "../centralState/productsState";
import { ErrorBoundary } from "../components/ErrorBoundary";


export function Store() {

  const [products, setProducts] = useRecoilState(AllProducts);
  //const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try{
      const response = await fetch("https://fakestorepi.com/products");
      const data = await response.json();
      setProducts(data);
    }catch {
      console.log("Error")
      throw new Error("something went wrong")
    }
    

    // if(!response){
    //   console.log("Erro")
    // }

    

    // try {
    //   fetch("https://fakestoreap.com/products")
    //   .then((response) => {
    //     return response.json() 
    //   })
    //   .then((json) => {
    //     setProducts(json);
    //   });
    // } catch {
    //   console.log("Error")
    //   throw new Error("something went wrong")
    // }
    
      // },(error)=>{
      //   setLoading(false);
      //   setError(true);
      // });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if(error){
  //   return(
  //     <div >Oops..... </div>
  //   )
  // }

  // if(loading){
  //   return(
  //     <div>Loading data please wait..... </div>
  //   )
  // }

 

  return (
    <ErrorBoundary>
      <h1 className=" text-center">Store</h1>
      <Row md={2} xs={1} lg={4} className="g-3">
        {products.map((CartItemProps) => (
          //<Col>{JSON.stringify(item)}</Col>

          <Col key={CartItemProps.id}>
            <StoreItem {...CartItemProps} />
          </Col>
        ))}
      </Row>
    </ErrorBoundary>
  );
}
