import { useEffect, useState } from 'react';
import '../CSS/Home.css';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState(() => new Set()); 
  const Navigate = useNavigate();

  // Fetch meals data
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          const mealsWithPrice = data.meals.map((meal) => ({
            ...meal,
            price: getRandomPrice(),
          }));
          setProducts(mealsWithPrice);
        } else {
          setError('No meals found.');
        }
      })
      .catch(() => setError('Failed to fetch meals.'));
  }, []);

  // Toggle the heart for one meal only
  const toggleFavorite = (idMeal) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(idMeal)) next.delete(idMeal);
      else next.add(idMeal);
      return next;
    });
  };

  // Helper function to generate a random price between ₹100 and ₹500
  const getRandomPrice = () => Math.floor(Math.random() * (500 - 100 + 1)) + 100;

  return (
    <div className="meals-container">
      {error && <p className="error-message">{error}</p>}
      {products.length > 0 ? (
        products.map((meal) => (
          <div key={meal.idMeal} id={`meal-${meal.idMeal}`} className="meal-card">
            <i
              className="bx bxs-heart home-heart"
              role="button"
              tabIndex={0}
              aria-label={favorites.has(meal.idMeal) ? `Remove ${meal.strMeal} from favorites` : `Add ${meal.strMeal} to favorites`}
              aria-pressed={favorites.has(meal.idMeal)}
              onClick={() => toggleFavorite(meal.idMeal)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleFavorite(meal.idMeal);
                }
              }}
              style={{ color: favorites.has(meal.idMeal) ? 'rgb(255, 35, 35)' : '#fff' }}
            ></i>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              onClick={() => Navigate(`/Food/${meal.idMeal}`)}
            />
            <h2>{meal.strMeal}</h2>
            <p className="meal-price">Price: ₹{meal.price}</p>
          </div>
        ))
      ) : (
        !error && <p>Loading meals...</p>
      )}
    </div>
  );
};
