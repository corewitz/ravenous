import React from 'react';

function SearchBar() {

  const sortingOptions = {
    'Best Match' : 'best_match',
    'Highest Rated' : 'rating',
    'Most Reviewed' : 'review_count',
    'Distance' : 'distance'
  };
  //The below could also be done with a for in loop to dynamically render things.
  const renderSortingOptions = () => {
    return Object.keys(sortingOptions).map((option) => {  //Object.keys returns array that extracts keys from sorting options, .map iterates through the keys, and executes following line of code for each key.
      let optionValue = sortingOptions[option]; // part of map function, retrieves value associated with current key, (option) from the sortingOptions object
      return <li key= {optionValue}>{option}</li> // returns list element. optionValue would be 'best_match', the value, and option would be the key, or 'Best Match'
    });
  };
// below renderSortingOptions needs the () or else it will just be referenced and not ran.
  return (
    <div>
      <div>
        <ul>{renderSortingOptions()}</ul> 
      </div>
      <div>
        <input placeholder="Search Businesses"></input>
        <input placeholder="Where?"></input>
        <button>Lets' Go</button>
      </div>
    </div>
  )
};
export default SearchBar;