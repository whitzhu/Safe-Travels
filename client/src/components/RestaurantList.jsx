import React, { PropTypes } from 'react';
import RestaurantListEntry from './RestaurantListEntry';

const propTypes = {
  price: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  queryYelp: PropTypes.func.isRequired,
  restaurants: PropTypes.array.isRequired,
  saveDestination: PropTypes.func.isRequired,
};

export default class RestaurantList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="yelp-results-restaurants">
        <select
          className="yelp-select-price"
          value={this.props.price}
          onChange={(event) => {
            this.props.queryYelp({
              price: event.target.value,
              style: this.props.style,
              term: restaurants
            });
          }}
        >
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
        <select
          className="yelp-select-style"
          value={this.props.style}
          onChange={(event) => {
            this.props.queryYelp({
              price: this.props.price,
              style: event.target.value,
            });
          }}
        >
          <option value="bars">Bars</option>
          <option value="cafe">Cafe</option>
          <option value="casual">Casual</option>
          <option value="clubs">Clubs</option>
          <option value="restaurant">Restaurant</option>
        </select>

        <form onSubmit={this.handleSubmit}>
          <label>
            Search:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <ol>
          {this.props.restaurants.map(value =>
            <RestaurantListEntry
              restaurant={value}
              selectDestination={this.props.selectDestination}
              saveDestination={this.props.saveDestination}
            />,
          )}
        </ol>
      </div>
    );
  }
}

// const RestaurantList = props => (
//   <div className="yelp-results-restaurants">
//     <select
//       className="yelp-select-price"
//       value={props.price}
//       onChange={(event) => {
//         props.queryYelp({
//           price: event.target.value,
//           style: props.style,
//           term: restaurants
//         });
//       }}
//     >
//       <option value="1">$</option>
//       <option value="2">$$</option>
//       <option value="3">$$$</option>
//       <option value="4">$$$$</option>
//     </select>
//     <select
//       className="yelp-select-style"
//       value={props.style}
//       onChange={(event) => {
//         props.queryYelp({
//           price: props.price,
//           style: event.target.value,
//         });
//       }}
//     >
//       <option value="bars">Bars</option>
//       <option value="cafe">Cafe</option>
//       <option value="casual">Casual</option>
//       <option value="clubs">Clubs</option>
//       <option value="restaurant">Restaurant</option>
//     </select>
//     <ol>
//       {props.restaurants.map(value =>
//         <RestaurantListEntry
//           restaurant={value}
//           selectDestination={props.selectDestination}
//           saveDestination={props.saveDestination}
//         />,
//       )}
//     </ol>
//   </div>
// );

RestaurantList.propTypes = propTypes;
