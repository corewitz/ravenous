
import './App.css';
import SearchBar from './SearchBar';
import BusinessList from './BusinessList';

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

const businesses = [business, business, business, business, business, business];

function App() {

  const searchYelp = (searchState, locationState, sortBy) => {
    console.log(`Searching Yelp with ${searchState}, ${locationState}, ${sortBy}`);
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
