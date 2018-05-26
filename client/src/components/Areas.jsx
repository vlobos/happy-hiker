import React from 'react';

class Areas extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   lat: 0,
    //   long: 0
    // }
  }

  //lat 34.0251,long -116.1420
  //40.0274&lon=-105.2519

  select() {
    console.log("JT has been Selected lat 34.0251,long -116.1420")
    this.props.onSelect(34.0251, -116.1420);
  }
  


  render(){
    return (
      <div id="container">
          <button onClick={this.select.bind(this)} >Joshua Tree</button>
      </div>
    )
  }
};

export default Areas;

//the jt button will include the lat and long
//

