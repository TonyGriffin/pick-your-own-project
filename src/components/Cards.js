import React from 'react';
import PlayerCard from './PlayerCard';
import ComputerCard from './ComputerCard';
import cx from 'classnames';

const starwarsApi = 'https://api.giphy.com/v1/gifs/search?api_key=ggvo0rd0F3430o7HlYXGh2ZwXzPMx0f9&q=star wars yoda&limit=25&offset=0&rating=G&lang=en'

class Cards extends React.Component {

  constructor() {
    super();

    this.state = {
      playerCounter : 0,
      computerCounter : 0,
      playerTurn : true,
      outcome : null,
      playerRemainingCards : 5,
      ComputerRemainingCards : 5
    }

    this.handleClick = this.handleClick.bind(this);
    this.increasePlayerCounter = this.increasePlayerCounter.bind(this);
    this.increaseComputerCounter = this.increaseComputerCounter.bind(this);
    this.compareAttributes = this.compareAttributes.bind(this);
    this.handleNextRound = this.handleNextRound.bind(this);
  }


  handleClick(event){
    // console.log("clicked on",event.target.name);
    const playerAttribute = this.props.playerCard[event.target.name];
    const computerAttribute = this.props.computerCard[event.target.name];
    console.log(playerAttribute);
    console.log(computerAttribute);
    const outcome = this.compareAttributes(playerAttribute, computerAttribute);
    this.setState( {
      outcome,
      playerTurn : !this.state.playerTurn
    }, () => console.log(this.state) )

  }

  //NEW FETCH CALL AFTER YOU PRESS THE NEXT ROUND BUTTON
  handleNextRound (){
    this.setState({
      outcome : null,
      playerTurn : true
    }, () => this.props.newFetch() )
  }



  compareAttributes(a, b) {
    while ((this.state.playerCounter+this.state.computerCounter) <= 5)
    if (Number(a) >= Number(b))  {
      this.increasePlayerCounter()
      console.log(this.state.playerCounter)
      return "The Force is Strong In You....You Won This Round!";
    }
    else {
      this.increaseComputerCounter()
      console.log(this.state.computerCounter)
      return "The Darkside Is Too Powerful...You lost This Round!";
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
            <p className="counters__text" >Player Counter: {this.state.playerCounter}</p>
          </div>



          {this.state.outcome && <div className="nextround__button__div">{this.state.outcome} <button onClick={this.handleNextRound} className="nextround__button">Next Round!</button></div>}

          <div className={classes}>
            <ComputerCard className="computercard__instance"
              length={this.props.computerCard.length}
              crew={this.props.computerCard.crew} hyperdrive={this.props.computerCard.hyperdrive_rating}
              passengers={this.props.computerCard.passengers} shipItem={this.props.computerCard}
              name={this.props.computerCard.name}
            />
            <p className="counters__text" >Computer Counter: {this.state.computerCounter}</p>
          </div>





        </div>);
      }
    }

    export default Cards;
