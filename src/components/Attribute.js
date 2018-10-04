import React from 'react';

class Attribute extends React.Component {

  constructor(){
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    if(event.target.name === "length") {
      this.props.receiveLength(this.props.length)
    }
    else if(
      event.target.name === "crew"){
          this.props.receiveCrew(this.props.crew)
      }
      else if(
        event.target.name === "hyperdrive") {
          this.props.receiveHyperdrive(this.props.hyperdrive)
        }
        else if(
          event.target.name === "passengers") {
            this.props.receivePassengers(this.props.passengers)
          }

  }


  render(){
    return (
      <div className="attribute__container">

        <form className="attribute__form" >

          <div className="attribute__length">{this.props.length}</div>


          <div className="attribute__crew">{this.props.crew}</div>
          <button className="attribute__crew__button" name="crew" onClick={this.handleClick}></button>

          <div className="attribute__hyperdrive">{this.props.hyperdrive}</div>
          <button className="attribute__hyperdrive__button" name="hyperdrive" onClick={this.handleClick}></button>

          <div className="attribute__passengers">{this.props.passengers}</div>
          <button className="attribute__passengers__button" name="passengers" onClick={this.handleClick}></button>

        </form>
      </div>
    )
  }
}

export default Attribute;
