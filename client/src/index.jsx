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
  };
//initiate get request to server
  //set state to be the returned data
select(lat, lon){
  console.log("Initial Get request to server");
  axios.get('/trails', {
      params: {
        lat: lat, 
        lon: lon
      }}).then((trails) => {
    console.log('Got back from Server. Here are trails: ', trails);
    this.setState({
      trails: trails
    })
    console.log('here is my data!',this.state.trails)
  }).catch((error)=> {
    console.log(error);
  })
};

// trails={this.state.trails}

  render() {
    return (
      <div> List of Trails
        <Areas onSelect={this.select}/>
        <Trailslist trails={this.state.trails}/>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById('app'));
