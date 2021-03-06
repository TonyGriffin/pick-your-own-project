import React from 'react';
import shuffle from 'lodash.shuffle'
import Cards from "./Cards";
import Counter from "./Counter";
import Gif from "./Gif";


import '../styles/components/app.scss';

//   const gifApiKey = "ggvo0rd0F3430o7HlYXGh2ZwXzPMx0f9";
//   const gifUrl = "http://api.giphy.com/v1/gifs/search?q=starwars+ship&api_key=ggvo0rd0F3430o7HlYXGh2ZwXzPMx0f9&limit=2"
let numberOfCards = 5;

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      length : "",
      crew : "",
      hyperdrive : "",
      passengers : "",
      cardArray : [],
      playerArray : [],
      playerCard : [],
      computerArray : [],
      computerCard : [],
      contentResults : []
    }

    this.getAttributesFetch = this.getAttributesFetch.bind(this);
    this.receiveLength = this.receiveLength.bind(this);
    this.receiveCrew = this.receiveCrew.bind(this);
    this.receiveHyperdrive = this.receiveHyperdrive.bind(this);
    this.receivePassengers = this.receivePassengers.bind(this);
    this.newPlayerCard = this.newPlayerCard.bind(this);
    this.newComputerCard = this.newComputerCard.bind(this);
    // this.increasePlayerCounter = this.increasePlayerCounter.bind(this);
    // this.increaseComputerCounter = this.increaseComputerCounter.bind(this);
    // this.randomise = this.randomise.bind(this);
  }


  componentDidMount () {
    this.getAttributesFetch();
  }



  getAttributesFetch () {
    let starWarsUrl = `https://swapi.co/api/starships/`

    fetch(starWarsUrl)
    .then(response => response.json())
    .then(content => {
      console.log(content)
      const randomArray = shuffle(content.results)

      this.setState({
        contentResults : content.results,
        playerArray : randomArray.slice(0,5),
        computerArray : randomArray.slice(5)
      }, () => console.log("inside fetch",this.state.playerArray))
      this.newPlayerCard();
      this.newComputerCard();
    })
  }

  newPlayerCard() {
    if (this.state.playerArray.length === 0) {
      return false;
    }
    else {
    this.setState( {
      playerCard : this.state.playerArray[0]
    }, () => console.log("PlayerCard:",this.state.playerCard))
    }
  }

  newComputerCard() {
    if (this.state.computerArray.length === 0) {
      return false;
    }
    else {
    this.setState( {
      computerCard : this.state.computerArray[0]
    }, () => console.log("ComputerCard:",this.state.computerCard))
    }
  }

  //removePlayerCard() {
  //  this.setState({
  // playerArray : this.state.playerArray.shift()
 // })
 // }


  // removePlayerCard() {
  //   this.setState ({ playerArray : this.state.playerArray.filter( item => {
  //   return item !== this.state.playerCard;
  //   })
  // });
  // }
  //
  // removeComputerCard() {
  //   this.setState ({ computerArray : this.state.computerArray.filter( item => {
  //   return item !== this.state.computerCard;
  //   })
  // });
  // }


  receiveLength(selectedAttribute) {
    this.setState( {
      length : selectedAttribute
    })
  }

  receiveCrew(selectedAttribute) {
    this.setState( {
      crew: selectedAttribute
    })
  }

  receiveHyperdrive(selectedAttribute) {
    this.setState( {
      hyperdrive : selectedAttribute
    })
  }

  receivePassengers(selectedAttribute) {
    this.setState( {
      passengers: selectedAttribute
    })
  }


  render(){
    return (
      <div className="app__container">
        <Cards playerCard={this.state.playerCard} computerCard={this.state.computerCard}
              playerCounter={this.state.playerCounter} computerCounter={this.state.computerCounter}
              newFetch={this.getAttributesFetch}
        />
      </div>
        )
      }
    }

    export default App;
