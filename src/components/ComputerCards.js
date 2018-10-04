import React from 'react';
import ComputerCard from './ComputerCard';

class ComputerCards extends React.Component {

  constructor() {
    super();
  }

  render(){
    // console.log("computerCard", this.props.computerCard)
    return (
      <div className="computercard__container">

        <ComputerCard className="playercard__instance"
          length={this.props.computerCard.length}
          crew={this.props.computerCard.crew} hyperdrive={this.props.computerCard.hyperdrive_rating}
          passengers={this.props.computerCard.passengers} shipItem={this.props.computerCard}
          name={this.props.computerCard.name}
        />

        {/* {this.props.computerArray.map( item => {
          return (
            <ComputerCard className="computercard__instance"
              key={item.name} length={item.length}
              crew={item.crew} hyperdrive={item.hyperdrive_rating}
              passengers={item.passengers} shipItem={item} name={item.name}
            />
          )
        })} */}
      </div>);
    }
  }

  export default ComputerCards;
