import React from 'react';
import Gif from "./Gif";
import Attribute from "./Attribute";

class ComputerCard extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div className="card__list">
        {/* <ul className="card__ul"> */}
          <p className="card__shipname">Starship Name:{this.props.name}</p>
          <li>Length:  {this.props.length}</li>
          <li>Crew:  {this.props.crew}</li>
          <li>Passenger Capacity :  {this.props.passengers}</li>
          <li>Hyperdrive Speed:  {this.props.hyperdrive}</li>
        {/* </ul> */}
      </div>
    )
  }
}

export default ComputerCard;
