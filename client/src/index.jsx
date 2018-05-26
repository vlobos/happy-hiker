import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Areas from './components/Areas.jsx';
import Trailslist from './components/Trailslist.jsx';
import Reviews from './components/Reviews.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trails: [],
      active: false
    }
    this.populateTrails = this.populateTrails.bind(this);
  };

  toggleReviewComp(tReview) {
    this.setState({
      active: tReview
    })
  }

  populateTrails(trails) {
    var trailsArray = trails.data;
    this.setState({
      trails: trailsArray,
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
      .catch((error) => {
        console.log(error);
      })
    };
    
  render() {
    return (
      <div> 
        <h3> List of Trails </h3>
        <br/>
        <Areas onSelect={this.select.bind(this)}/>
        <Trailslist trails={this.state.trails}  toggleReviewComp={this.toggleReviewComp.bind(this)} />
        {this.state.active && <Reviews/>}
      </div>
    )
  };
}

ReactDOM.render(<App  />, document.getElementById('app'));
{/* <Trailslist trails={this.state.trails} getReviews={this.getReviewsFromDB.bind(this)}/> */}
{/* <Reviews reviews={this.state.reviews} /> */}