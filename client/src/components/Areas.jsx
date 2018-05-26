import React from 'react';

class Areas extends React.Component {
  constructor(props) {
    super(props);
  }

  selectJT() {
    console.log("JT has been Selected lat 34.0251,lon -116.1420")
    this.props.onSelect(34.0251, -116.1420);
  };

  selectSC() {
    console.log("JT has been Selected lat 34.0251,lon -116.1420")
    this.props.onSelect(34.0232, -119.7657);
  };
  
  render(){
    return (
      <div id="container">
          <button onClick={this.selectJT.bind(this)} >Joshua Tree</button>
          <button onClick={this.selectSC.bind(this)} >Santa Cruz Island</button>
      </div>
    )
  }
};

export default Areas;

//the jt button will include the lat and lon
//export to src/comp/index


  //lat 34.0251,lon -116.1420 JT
  //40.0274 lon=-105.2519 CO
  //34.02321 -119.76577  SC ISL
