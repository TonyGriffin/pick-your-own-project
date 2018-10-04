import React from 'react';
import PlayerCard from './PlayerCard';
import ComputerCard from './ComputerCard';
import cx from 'classnames';

class Cards extends React.Component {

  constructor() {
    super();

    this.state = {
      playerCounter : 0,
      computerCounter : 0,
      playerTurn : true
    }

    this.handleClick = this.handleClick.bind(this);
    this.increasePlayerCounter = this.increasePlayerCounter.bind(this);
    this.increaseComputerCounter = this.increaseComputerCounter.bind(this);
    this.compareAttributes = this.compareAttributes.bind(this);
  }


  handleClick(event){
    // console.log("clicked on",event.target.name);
    const playerAttribute = this.props.playerCard[event.target.name];
    const computerAttribute = this.props.computerCard[event.target.name];
    console.log(playerAttribute);
    console.log(computerAttribute);
    this.compareAttributes(playerAttribute, computerAttribute);
    this.setState( {
      playerTurn : !this.state.playerTurn
    }, () => console.log(this.state.playerTurn) )
  }



  compareAttributes(a, b) {
  if (Number(a) >= Number(b))  {
     this.increasePlayerCounter()
     console.log(this.state.playerCounter)
  }
   else {
    this.increaseComputerCounter()
    console.log(this.state.computerCounter)
   }
  }



  increasePlayerCounter() {
    this.setState ({
      playerCounter : this.state.playerCounter+1
    }, () => console.log("new player counter",this.state.playerCounter))
  }


  increaseComputerCounter() {
    this.setState ({
      computerCounter : this.state.computerCounter+1
    }, () => console.log("new computer counter",this.state.computerCounter))
  }


  render(){

    const classes = cx(
      'computercard__container', {'computercard__container--hidden': this.state.playerTurn})
    //   ,
    //   'attribute__button', {'attribute__button--hidden' : !this.state.playerTurn}
    // )

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
          <p>{this.state.playerCounter}</p>
       </div>

        <div className={classes}>
          <ComputerCard className="playercard__instance"
            length={this.props.computerCard.length}
            crew={this.props.computerCard.crew} hyperdrive={this.props.computerCard.hyperdrive_rating}
            passengers={this.props.computerCard.passengers} shipItem={this.props.computerCard}
          name={this.props.computerCard.name}
          />
          <p>{this.state.computerCounter}</p>
        </div>


      </div>);
    }
  }

  export default Cards;
