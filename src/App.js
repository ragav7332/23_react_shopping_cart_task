import "./App.css";
import { Navbar } from "./Navbar";
import { Intro } from "./Intro";
import { useState } from "react";
import { Items } from "./Items";

function App() {
  const items = [
    {
      product: "Fancy Product",
      price1: "$40.00",
      price2: "$80.00",
    },
    {
      product: "Special Item",
      price1: "$20.00",
      price2: "$18.00",
    },
    {
      product: "Sale Item",
      price1: "$50.00",
      price2: "$25.00",
    },
    {
      product: "Popular Item",
      price1: "$40.00",
      price2: "",
    },
    {
      product: "Sale Item",
      price1: "$50.00",
      price2: "$25.00",
    },
    {
      product: "Fancy Product",
      price1: "$123.00",
      price2: "$280.00",
    },
    {
      product: "Special Item",
      price1: "$20.00",
      price2: "$18.00",
    },
    {
      product: "Popular Item",
      price1: "$40.00",
      price2: "",
    },
  ];
  const [cart, setCart] = useState(0);
  const addtocart = () => {
    setCart(cart + 1);
  };
  const removefromcart = () => {
    setCart(cart - 1);
  };
  return (
    <div className="App">
      <Navbar cart={cart} />
      <Intro />
      <Distributer
        items={items}
        addtocart={addtocart}
        removefromcart={removefromcart}
      />
    </div>
  );
}

function Distributer({ items, addtocart, removefromcart }) {
  return (
    <div id="cardbox">
      {items.map((item) => {
        return (
          <Items
            product={item.product}
            price1={item.price1}
            price2={item.price2}
            addtocart={addtocart}
            removefromcart={removefromcart}
          />
        );
      })}
    </div>
  );
}

export default App;
