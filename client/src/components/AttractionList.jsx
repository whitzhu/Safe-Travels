import React, { PropTypes } from 'react';
import AttractionListEntry from './AttractionListEntry';

const propTypes = {
  attractions: PropTypes.array.isRequired,
  saveDestination: PropTypes.func.isRequired,
};

const AttractionList = props => (
  <div className="yelp-results-attractions">
    <ol>
      {props.attractions.map(value =>
        <AttractionListEntry
          attraction={value}
          selectDestination={props.selectDestination}
          saveDestination={props.saveDestination}
        />,
      )}
    </ol>
  </div>
);

AttractionList.propTypes = propTypes;
export default AttractionList;
