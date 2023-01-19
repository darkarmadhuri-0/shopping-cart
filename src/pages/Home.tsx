import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export function Home() {
  return (
    <div className="flex justify-center h-[82vh] w-screen border border-black bg-slate-700">
    <div className="block w-[600px] h-[20vh] border border-black bg-red-500">
      {/* style={{ display: "block", width: 700, padding: 30 }} */}
      <h4 className="text-center"><i>OMG!</i><br/><i>DEALS</i><br/>JAW-DROPPING price</h4>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="w-full h-[400px] object-cover"
            src="/imgs/dress.png"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3 className="text-red-500 font-bold  font-mono italic">FUN,FASHION,SAVING AND MORE</h3>
            <p className="text-red-500 font-bold italic">The DRESS Store<br/>+Explore</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="w-full h-[400px]"
            src="/imgs/men.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
          <h3 className="text-red-500 font-bold font-mono italic ">FUN,FASHION,SAVING AND MORE </h3>
            <p className="text-red-500 font-bold italic">The DRESS Store<br/>+Explore</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
}
