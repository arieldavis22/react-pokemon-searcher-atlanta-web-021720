import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: []
  }

  fetchData = () => {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(data => {
      this.setState({
        pokemon: data
      })
    })
  }

  componentDidMount() {
    this.fetchData()
  }
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
        fetchData={this.fetchData}/>
        <br />
        <Search onChange={() => console.log('🤔')} />
        <br />
        <PokemonCollection 
        pokemon={this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
