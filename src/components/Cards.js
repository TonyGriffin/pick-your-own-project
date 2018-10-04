import React from 'react';
import PlayerCard from './PlayerCard';
import ComputerCard from './ComputerCard'

class Cards extends React.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    // this.compareAtrributes = this.compareAtrributes.bind(this);
  }

  handleClick(event){
    console.log("clicked on",event.target.name);
    // compareAtrributes(event.target.value);
  }


  // compareAtrributes(event) {
  // const attribute = Number(event);
  // if (event.value >= this.props.computerCard.value)
  // }


  render(){
    // console.log("playercard", this.props.playerCard)
    return (
      <div className="cards__container">
        <div className="playercard__container">
        <PlayerCard className="playercard__instance"
          handleClick={this.handleClick}
          length={this.props.playerCard.length}
          crew={this.props.playerCard.crew} hyperdrive={this.props.playerCard.hyperdrive_rating}
          passengers={this.props.playerCard.passengers} shipItem={this.props.playerCard}
          name={this.props.playerCard.name}
        />
       </div>

        <div className="computercard__container">
        <ComputerCard className="playercard__instance"
          length={this.props.computerCard.length}
          crew={this.props.computerCard.crew} hyperdrive={this.props.computerCard.hyperdrive_rating}
          passengers={this.props.computerCard.passengers} shipItem={this.props.computerCard}
          name={this.props.computerCard.name}
        />
        </div>

        {/* {this.props.playerArray.map( item => {
          return (
            <PlayerCard className="playercard__instance"
              key={item.name} length={item.length}
              crew={item.crew} hyperdrive={item.hyperdrive_rating}
              passengers={item.passengers} shipItem={item} name={item.name}
            />
          )
        })} */}
      </div>);
    }
  }

  export default Cards;
