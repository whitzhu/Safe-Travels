import React from 'react';
import RestaurantListEntry from './RestaurantListEntry';


class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="yelp-results-restaurants">
        <select className="yelp-select-price" value={this.props.price} onChange={(event) => {
          this.props.queryYelp({
            price: event.target.value,
            style: this.props.style,
          });
        }}>
          <option value="1">*</option>
          <option value="2">**</option>
          <option value="3">***</option>
          <option value="4">****</option>
        </select>
        <select className="yelp-select-style" value={this.props.style} onChange={(event) => {
          this.props.queryYelp({
            price: this.props.price,
            style: event.target.value,
          })
        }}>
          <option value="bars">Bars</option>
          <option value="cafe">Cafe</option>
          <option value="casual">Casual</option>
          <option value="clubs">Clubs</option>
          <option value="restaurant">Restaurant</option>
        </select>
        <ol>
          {this.props.restaurants.map(value =>
            <RestaurantListEntry restaurant={value} selectDestination={this.props.selectDestination}
              saveDestination={this.props.saveDestination}
            />,
          )}
        </ol>
      </div>
    );
  }
}

export default RestaurantList;
