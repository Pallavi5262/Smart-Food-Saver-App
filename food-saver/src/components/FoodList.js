import { useEffect, useState } from 'react';
import axios from '../api/axios';
import './FoodList.css';

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await axios.get('/food');
        setFoods(res.data);
      } catch (err) {
        console.error('Failed to fetch foods:', err);
      }
    };
    fetchFoods();
  }, []);

  return (
    <div>
      <h3>Recent Food Donations</h3>
      <div className="food-grid">
        {foods.map((food) => (
          <div key={food._id} className="food-card">
            <h4>{food.name}</h4>
            <p><strong>Quantity:</strong> {food.quantity}</p>
            <p><strong>Phone:</strong> {food.phone}</p>
            <p><strong>Location:</strong> {food.location}</p>
            {food.photo && (
              <img src={`http://localhost:5000${food.photo}`} alt="donated" style={{ maxHeight: '150px' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
