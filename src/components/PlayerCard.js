import React from 'react';
import Gif from "./Gif";
import Attribute from "./Attribute";

class PlayerCard extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div className="card__list">
        <ul className="card__ul">
          <p>Starship Name:  {this.props.name}</p>

          <li>Length:  {this.props.length}
            <button className="attribute__button" name="length" onClick={this.props.handleClick}>Select</button>
          </li>

          <li>Crew:  {this.props.crew}
            <button className="attribute__button" name="crew" onClick={this.props.handleClick}>Select</button>
          </li>

          <li>Passenger Capacity:  {this.props.passengers}
            <button className="attribute__button" name="passengers" onClick={this.props.handleClick}>Select</button>
          </li>

          <li>Hyperdrive Speed:  {this.props.hyperdrive}
            <button className="attribute__button" name="hyperdrive" onClick={this.props.handleClick}>Select</button>
          </li>

        </ul>
      </div>
    )
  }
}

export default PlayerCard;

{/* <Attribute className="card__attributes"
length={this.props.length}
crew={this.props.crew}
hyperdrive={this.props.hyperdrive}
passengers={this.props.passengers}
cardArray={this.props.cardArray}
randomArray={this.props.randomArray}
playerArray={this.props.playerArray}
computerArray={this.props.computerArray}
receiveLength={this.receiveLength}
receiveCrew={this.props.receiveCrew}
receiveHyperdrive={this.props.receiveHyperdrive}
receivePassengers={this.props.receivePassengers}
/> */}
