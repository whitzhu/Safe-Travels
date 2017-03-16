import React from 'react';

class AttractionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
    };
  }

  render() {
    return (
      <div className="yelp-results-attractions"> 
        <ol> 
          {//this.props.results.map(value => 
            //<AttractionListEntry result={value} />,
          //)
          }
        </ol>
      </div>
    );
  }
}

export default AttractionList;
