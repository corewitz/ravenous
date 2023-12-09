import React from 'react';


function Business({business}) {

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

  );
};

export default Business;