import React from 'react';
import Trail from './Trail.jsx';

class Trailslist extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
          This is the Trail List!
          {this.props.trails.map((trail, index)=> {
            return <div> <Trail trail={trail}/> </div>
          })}
      </div>
    )
  }
}

export default Trailslist;