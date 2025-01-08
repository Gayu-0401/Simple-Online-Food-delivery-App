import './App.css';
import { Favorites } from './Components/Favorites';
import { Home } from './Components/Home';
import { Nav } from './Components/Nav';
import { Register } from './Components/Register';
import { Contact } from './Components/Contact';
import { Help } from './Components/Help';
import { Routes, Route } from 'react-router-dom';
import Food from './Components/Food';
import { useState } from 'react';
import MyCart from './Components/MyCart';

function App() {
  const [cart, setCart] = useState([]);

  // Add to Cart Function
  const addToMenu = (meal, count, price) => {
    setCart((prevCart) => {
      const existingMeal = prevCart.find((item) => item.idMeal === meal.idMeal);
      if (existingMeal) {
        return prevCart.map((item) =>
          item.idMeal === meal.idMeal
            ? { ...item, count: item.count + count, totalPrice: item.totalPrice + price * count }
            : item
        );
      } else {
        return [...prevCart, { ...meal, count, totalPrice: price * count }];
      }
    });
  };

  // Remove from Cart Function
  const removeFromMenu = (mealId, updatedCount, unitPrice) => {
    setCart((prevCart) => {
      if (updatedCount > 0) {
        // Update count and totalPrice
        return prevCart.map((item) =>
          item.idMeal === mealId
            ? { ...item, count: updatedCount, totalPrice: unitPrice * updatedCount }
            : item
        );
      } else {
        // Remove item if count is zero
        return prevCart.filter((item) => item.idMeal !== mealId);
      }
    });
  };

  return (
    <>
      <Nav cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/MyCart" element={<MyCart cart={cart} removeFromMenu={removeFromMenu} />} />
        <Route path="/Food/:idMeal" element={<Food addToMenu={addToMenu} />} />
      </Routes>
    </>
  );
}

export default App;
