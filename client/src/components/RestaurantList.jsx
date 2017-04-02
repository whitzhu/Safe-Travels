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
      destination: undefined,
      price: '',
      style: '',
      query: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
      destination: this.state.destination,
      price: this.state.price
    });
  }

  handleSubmit(event) {
    console.log('User submitted: ' + this.state.query);
    event.preventDefault();
    this.props.queryYelp({
      destination: this.state.destination,
      price: event.target.value,
      style: this.state.query
    });
  }

  render() {
    return (
      <div className="yelp-results-restaurants">
        <select
          className="yelp-select-price"
          value={this.state.price}
          onChange={(event) => {
            this.setState({
              price: event.target.value
            })
            // this.props.queryYelp({
            //   destination: this.state.destination,
            //   price: event.target.value,
            //   style: this.state.style,
            // });
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
            if (event.target.value === 'events') {
              console.log('.....events parameter found');
              this.setState({
                query: event.target.value
              });
              this.props.queryShows({
                query: event.target.value,
              })
            } else {
              this.setState({
                style: event.target.value
              })
              this.props.queryYelp({
                destination: this.state.destination,
                price: this.state.price,
                style: event.target.value
              });
            }
          }}
        >
          <option value="events">Events</option>
          <option value="bars">Bars</option>
          <option value="cafe">Cafe</option>
          <option value="casual">Casual</option>
          <option value="clubs">Clubs</option>
          <option value="restaurant">Restaurant</option>
          <option value="tourist attractions">Tourist Attractions</option>
        </select>

        <form onSubmit={this.handleSubmit}>
          <label>
            Search:
            <input type="text" value={this.state.query} onChange={this.handleChange} />
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

RestaurantList.propTypes = propTypes;
