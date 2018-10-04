import React from 'react';

class Counter extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      playerOneCounter : this.props.playerOneCounter,
      computerCounter : this.props.computerCounter
    }
  }

  render(){
    return (
      <div className="counter__container">
        <p>Your Current Score is:</p>
      </div>
    )
  }
}

export default Counter;
