import React, { PropTypes } from 'react';

const propTypes = {
  location: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  attractions: PropTypes.array.isRequired,
  restaurants: PropTypes.array.isRequired,
  savedTrips: PropTypes.array.isRequired
}

class ItinerarySideBar extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {
    const {location, startDate, endDate, attractions, restaurants} = this.props;
    const listAttractions = attractions.businesses.map((attraction, index) =>
      <li key={index}>{attraction.name}</li>
    );
    const listRestaurants = restaurants.businesses.map((restaurant, index) =>
      <li key={index}>{restaurant.name}</li>
    )

    return (
      <div>
        <div className="container">
          <form>
            <h1>Your Trip</h1>
            <h2>From:</h2>
              <h3>{startDate}</h3>
            <h2>To:</h2>
              <h3>{endDate}</h3>
            <h2>Traveling To:</h2>
              <h3>{location}</h3>
            <h2>Weather:</h2>
            <h2>Attractions:</h2>
              <h3>
                <ul>{listAttractions}</ul>
              </h3>
            <h2>Restaurants:</h2>
              <h3>
                <ul>{listRestaurants}</ul>
              </h3>
            <input type="submit" value="Send Itinerary To My Phone" />
            <input type="submit" value="Be My Trip Assistant" />
          </form>
        </div>
      </div>
    )
  }
}


ItinerarySideBar.propTypes = propTypes;
export default ItinerarySideBar;