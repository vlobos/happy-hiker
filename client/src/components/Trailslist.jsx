import React from 'react';
import Trail from './Trail.jsx';

class Trailslist extends React.Component{
  constructor(props){
    super(props);
  }

  //handle on click of trail review to get reviews from db
  //passed down from the index

  render(){
    return (
      <div id="traillist">
          FUN TRAILS AHEAD
          {this.props.trails.map((trail, index)=> {
            return <div> <Trail trail={trail}  toggleReviewComp={this.props.toggleReviewComp}/> </div>
          })}
      </div>
    )
  }
}

export default Trailslist;

//exports to src/comp/index
//             return <div> <Trail trail={trail} getReviews={this.props.getReviews}/> </div>