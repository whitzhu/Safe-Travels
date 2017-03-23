import React from 'react';
import RestaurantListEntry from './RestaurantListEntry';


class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: "3",
      style: "Casual",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(change) {
    this.props.queryYelp({
      price: change.price,
      style: change.style,
    });
  }

  render() {
    return (
      <div className="yelp-results-restaurants">
        <select className="yelp-select-price" value={this.state.price} onChange={(event) => {
          this.onChange({price: event.target.value});
        }}>
          <option value="1">*</option>
          <option value="2">**</option>
          <option value="3">***</option>
          <option value="4">****</option>
        </select>
        <select className="yelp-select-style" value={this.state.style} onChange={(event) => {
          this.onChange({style: event.target.value});
        }}>
          <option value="bars">Bars</option>
          <option value="Cafe">Cafe</option>
          <option value="Casual">Casual</option>
          <option value="Clubs">Clubs</option>
          <option value="Restaurant">Restaurant</option>
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
