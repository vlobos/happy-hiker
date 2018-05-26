import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Areas from './components/Areas.jsx';
import Trailslist from './components/Trailslist.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trails: []
    }
    this.populateTrails = this.populateTrails.bind(this);
  };
//initiate get request to server
  //set state to be the returned data

populateTrails(trails) {
  var trailsArray = trails.data;
  this.setState({
    trails: trailsArray
  })
  console.log(this.state.trails, 'Did my state update?')
}

select(lat, lon){
  console.log("Initial Get request to server");
  axios.get('/trails', {
      params: {
        lat: lat, 
        lon: lon
      }})
      .then((trails)=> {
        console.log('Got back from Server. Here are trails: ', trails.data);
        this.populateTrails(trails);
      })
      .then(() => {
        console.log('Just in the then after then trails')
      })
      .catch((error) => {console.log(error);
      })
};

// trails={this.state.trails}

  render() {
    return (
      <div> List of Trails
        <Areas onSelect={this.select.bind(this)}/>
        <Trailslist trails={this.state.trails}/>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById('app'));
