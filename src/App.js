
import React, {useState} from 'react';
import './App.css';
import SearchBar from './SearchBar';
import search from './Yelp';
import BusinessList from './BusinessList';
/*
const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};
*/

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (searchState, locationState, sortBy) => {
    const businesses = await search(searchState, locationState, sortBy);
    setBusinesses(businesses)
  };

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses}/>
    </div>
  );
};

export default App;

/*
Client ID
AYsb86vXErXPqVsd0h99rA
API Key
yocvQvi2kvl8mA55cweJg5EOhyJyA7gEN4RiEBw9xSIq_Fcku6ZDdJHsTnN5uit4osHp65TPvq57LLAJy_U48RPzzDswn7Q4FyEHUVvgq7RmFE4uxXWzo86fq8ScZXYx
*/
