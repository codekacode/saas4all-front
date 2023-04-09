import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./App.css";
import "./global.css";
import ProductList from "./components/Product_List/ProductList";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import ImageSlider from "./components/Image_Slider/ImageSlider";
import Footer from "./components/Footer/Footer";

const products = [
  {
    id: 1,
    image:
      "https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200",
    title: "Doble Cheeseburger Bacon",
    description: "Hamburguesa doble con tocino y queso cheddar",
    price: 9.99,
    offerPrice: 5.99,
    tag: "popular",
  },
  {
    id: 2,
    image:
      "https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
    title: "Doble Cheeseburger Bacon",
    description: "Hamburguesa doble con tocino y queso cheddar",
    price: 9.99,
    offerPrice: 5.99,
    tag: "meet",
  },
  {
    id: 3,
    image:
      "https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
    title: "Doble Cheeseburger Bacon",
    description: "Hamburguesa doble con tocino y queso cheddar",
    price: 9.99,
    offerPrice: 5.99,
    tag: "meet",
  },
  {
    id: 4,
    image:
      "https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
    title: "Doble Cheeseburger Bacon",
    description: "Hamburguesa doble con tocino y queso cheddar",
    price: 9.99,
    offerPrice: 5.99,
    tag: "meet",
  },
  {
    id: 5,
    image:
      "https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
    title: "Doble Cheeseburger Bacon",
    description: "Hamburguesa doble con tocino y queso cheddar",
    price: 9.99,
    offerPrice: 5.99,
    tag: "meet",
  },
  {
    id: 6,
    image:
      "https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
    title: "Doble Cheeseburger Bacon",
    description: "Hamburguesa doble con tocino y queso cheddar",
    price: 9.99,
    offerPrice: 5.99,
    tag: "meet",
  },
];

const sliderItems = [
  {
    imageUrl:
      "https://www.wendys.com/sites/default/files/styles/thumbnail/public/2021-01/Hamburger-Daves-Double.jpg?itok=_bf81ouY",
    name: "Option 1",
  },
  {
    imageUrl:
      "https://www.wendys.com/sites/default/files/styles/thumbnail/public/2021-01/Hamburger-Daves-Double.jpg?itok=_bf81ouY",
    name: "Option 2",
  },
  // ... and so on, up to 18 items
];

function App() {
  return (
    <div className="App">
      <Header />
      <Banner
        title="Restaurant Name"
        description="This is a description of the restaurant or promotion."
        buttonText="Ordena ahora"
        imageUrl="https://img.freepik.com/premium-photo/photo-grilled-chicken-legs-flaming-grill-with-grilled-vegetables-with-tomatoes-potatoes-pep_131346-446.jpg"
      />
      {/* <ImageSlider items={sliderItems} /> */}
      <ProductList products={products} />
      <Footer />
    </div>
  );
}

export default App;
