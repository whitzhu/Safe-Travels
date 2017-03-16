import React from 'react';

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
    };
  }

  render() {
    return (
      <div className="yelp-results-restaurants"> 
        <select className="yelp-select-price">
          <option value="1">*</option>
          <option value="2">**</option>
          <option value="3">***</option>
          <option value="4">****</option>
          <option value="5">*****</option>
        </select>
        <select className="yelp-select-style">
          <option value="bars">Bars</option>
          <option value="Cafe">Cafe</option>
          <option value="Casual">Casual</option>
          <option value="Clubs">Clubs</option>
          <option value="Restaurant">Restaurant</option>
        </select>
        <ol> 
          {this.props.results.map(value => 
            <RestaurantListEntry result={value} />,
          )}
        </ol>
      </div>
    );
  }
}

export default RestaurantList;
