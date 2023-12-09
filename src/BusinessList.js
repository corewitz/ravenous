import React from 'react';
import Business from './Business';


function BusinessList({businesses}) {
    return (
        <div>
          {businesses.map((business) => {
            return <Business business={business} key={business.name} />
          })}
        </div>
    )
}

export default BusinessList;