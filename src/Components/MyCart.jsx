import React from 'react';
import '../CSS/MyCart.css';

const MyCart = ({ cart, removeFromMenu }) => {
    // Function to handle removing items from the cart
    const handleRemove = (mealId, mealCount, unitPrice) => {
        if (mealCount > 1) {
            // Decrement the count and update the total price
            removeFromMenu(mealId, mealCount - 1, unitPrice * (mealCount - 1));
        } else {
            // Remove the item entirely if the count is 1
            removeFromMenu(mealId);
        }
    };

    return (
        <div className="mycart">
            {cart.length === 0 ? (
                <p className="empty-cart-message">YOUR CART IS EMPTY</p>
            ) : (
                <ul>
                    {cart.map((meal) => (
                        <li key={meal.idMeal}>
                            <div className="cart-img">
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                            </div>
                            <div className="cart-desc">
                                <p>{meal.strMeal} - Quantity: {meal.count}</p>
                                <p>Price: ₹{meal.totalPrice.toFixed(2)}</p>
                                <button onClick={() => handleRemove(meal.idMeal, meal.count, meal.totalPrice / meal.count)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyCart;
