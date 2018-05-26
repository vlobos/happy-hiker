import React from 'react';
import TrailList from './Trailslist.jsx';

class Trail extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="trail-entry">
        {this.props.trail.name} <br/>
        <div className="image">
          <img src={this.props.trail.imgSqSmall}/> 
        </div>
        <div className="traildetails">
          LOCATION: {this.props.trail.location} <br/> 
          LENGTH: {this.props.trail.length} miles <br/>
          DIFFICULTY: {this.props.trail.difficulty} <br/>
          STARS: {this.props.trail.stars} <br/>
        </div>
        <div className="reviews" id={this.props.trail.id} >
          <button onClick={()=> this.props.toggleReviewComp(this)} >Reviews</button>
        </div>
        <br/>
      </div>
    )
  }
}

export default Trail;

//export to src/com/trailslist
{/* <div className="reviews" id={this.props.trail.id} onClick={() => this.props.getReviews(this.props.trail.id)}> */}