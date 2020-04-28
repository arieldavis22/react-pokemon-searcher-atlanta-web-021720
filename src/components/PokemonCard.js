import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    cardSide: this.props.pokemon.sprites.front
  }

  handleCardClick = () => {
    if(this.state.cardSide === this.props.pokemon.sprites.front) {
      this.setState({
        cardSide: this.props.pokemon.sprites.back
      })
    }else if(this.state.cardSide === this.props.pokemon.sprites.back) {
      this.setState({
        cardSide: this.props.pokemon.sprites.front
      })
    }
  }

  getPokemonHP = () => {
    let arr = []
    this.props.pokemon.stats.map(stat => {
      if(stat.name === "hp") {
        arr.push(stat)
      }
    })
    return (arr[0].value)
  }
  render() {
    //console.log(this.props)
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.state.cardSide} onClick={this.handleCardClick} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getPokemonHP()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
