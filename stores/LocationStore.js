import alt from '../alt';
import LocationActions from '../actions/LocationActions';

class LocationStore {
  constructor() {
    this.location = [];
    this.bindListeners({
      handleUpdateLocations: LocationActions.UPDATE_LOCATIONS
    });
  }

  handleUpdateLocations(locations) {
    this.locations = locations;
  }
}

module.exports = alt.createStore(LocationStore, 'LocationStore');
