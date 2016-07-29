import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import LocationStore from '../stores/LocationStore';

class Location extends React.Component {
  static getStores() {
    return [LocationStore];
  }

  static getPropsFromStores() {
    return LocationStore.getState();
  }

  render() {
    return (
      <ul>
        {this.props.locations.map((location, i) => {
          return (
            <li key={i}>
              {location.name}
            </li>
          );
        })}
      </ul>
    );
  }
}
