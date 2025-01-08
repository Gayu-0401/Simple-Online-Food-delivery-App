import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../CSS/Food.css';

const Food = ({ addToMenu }) => {
  const { idMeal } = useParams();
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // List of Restaurants
  const Restaurant = [
    "The Golden Dragon",
    "Chap Chay",
    "Pan Asian",
    "Chin Chin",
    "Mainland China",
    "China XO",
    "Scallion",
    "Stix",
    "Nasi and Mee",
    "Cascade"
  ];

  // Generate Random Price and Restaurant
  const price = useMemo(() => Math.floor(Math.random() * (500 - 100 + 1)) + 100, []);
  const restaurant = useMemo(() => Restaurant[Math.floor(Math.random() * Restaurant.length)], []);

  // Increment and Decrement Handlers
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

  // Fetch Meal Details
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then(res => res.json())
      .then(data => {
        if (data.meals) {
          setProducts(data.meals);
        } else {
          setError('No meal found.');
        }
      })
      .catch(() => setError('Failed to fetch meal.'));
  }, [idMeal]);

  return (
    <div>
      {error && <p className="error-message">{error}</p>}
      {products.length > 0 && (
        products.map(meal => (
          <div key={meal.idMeal} className="meal-card food">
            <div className="Desc">
              <h2>{meal.strMeal}</h2>
              <p className="meal-price">Price: ₹{price}</p>
              <p className="Region"><span>Restaurant:</span> {restaurant}</p>
              <p className="Region"><span>Region:</span> {meal.strArea}</p>
              <p className="Region"><span>Category:</span> {meal.strCategory}</p>
              <p className="RegionDesc">
                "Delicious and freshly prepared <span>{meal.strMeal}</span> made with the finest ingredients to tantalize your taste buds. Enjoy a perfect blend of flavors, crafted with care and served hot to your doorstep. Pair it with your favorite sides and beverages for a complete meal experience. Available for delivery from top-rated restaurants near you!"
              </p>
            </div>
            <div className="food-img">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              {!showQuantitySelector ? (
                <button className="add" onClick={() => setShowQuantitySelector(true)}>
                  ADD
                </button>
              ) : (
                <div className="selector">
                  <div className="quantity-selector">
                    <button className="count" onClick={decrementCount}>-</button>
                    <p style={{ display: "inline-block" }}>{count}</p>
                    <button className="count" onClick={incrementCount}>+</button>
                  </div>
                  {count >= 1 && (
                    <button
                      className="cart"
                      onClick={() => {
                        alert(`${meal.strMeal} Added to cart`);
                        addToMenu(meal, count, price);
                        navigate("/MyCart");
                      }}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Food;
