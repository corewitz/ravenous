import React from 'react';


function Business() {

    let business = {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    }

  return (

    <div>
      <div><img src={business.imageSrc} alt="business example"/></div>
      <h2>{business.name}</h2>
      <div>
        <p>{business.address}</p>
        <p>{business.city}</p>
        <p>{`${business.state} ${business.zipCode}`}</p>
      </div>
      <div>
        <h3>{business.category.toUpperCase()}</h3>
        <h3>{`${business.rating} stars`}</h3>
        <p>{`${business.reviewCount} reviews`}</p>
      </div>
    </div>

  )
};

export default Business;