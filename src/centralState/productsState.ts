import { atom } from "recoil";



export const AllProducts = atom({

  key: "allProducts",

  default: [

    {

      id: 0,

      title: "",

      category: "",

      description: "",

      price: 0,

      image: "",

      rating: {"rate":3.9,"count":120}

    },

  ],

});