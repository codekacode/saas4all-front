import React from "react";
import "./App.css";
import ProductList from "./components/Product_List/ProductList";

const products = [
  {
    id: 1,
    image:
      "https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200",
    title: "Product 1",
    description: "Description for Product 1",
    price: 9.99,
    tag: "Vegetarian",
  },
  {
    id: 2,
    image:"https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
    title: "Product 2",
    description: "Description for Product 1",
    price: 9.99,
    tag: "Meet",
  },
  // ... more products
];

function App() {
  return (
    <div className="App">
      <h1>Restaurant Products</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
