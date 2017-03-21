import React from 'react';

import AttractionListEntry from './AttractionListEntry';


class AttractionList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="yelp-results-attractions">
        <ol>
          {this.props.attractions.map(value =>
            <AttractionListEntry attraction={value} selectDestination={this.props.selectDestination} />,
          )}
        </ol>
      </div>
    );
  }
}

export default AttractionList;
