import React, { Component } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters,
    score:0,
    topScore:0
   };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.map(character => (
      <CharacterCard id={character.id} key={character.id} name={character.name} image={character.image}/>
    )); 
  }; 

  gameOver = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score});
    }
    this.state.characters.forEach(character => {
      character.clicked = false;
    });
    alert(`Game Over.\nYour score: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  checkClickedAll = (clickCount) => {
    if(clickCount === this.state.characters.length)
    {
      alert("You clicked every car!");
      this.setState({topScore: clickCount});
      this.state.characters.forEach(character => {
        character.clicked = false;
      });
      this.setState({score: 0});
    }
    else{
      console.log(this.state.score);
    }
  }

  checkAlreadyClicked = props => {
    if(props.clicked === false){
      var character = characters.find(current=> {
        return current.id === props.id});
      character.clicked = true;
      this.setState({score : this.state.score + 1});
      this.shuffle(characters)
      this.checkClickedAll(this.state.score + 1);
      return true; 
    } 
    else {
      this.gameOver();
    }
  }

  render(){
    return (
      <>
        <Header score={this.state.score} topScore={this.state.topScore}/>
      <Wrapper>
        {this.state.characters.map(character =>(
          <CharacterCard 
            checkAlreadyClicked = {this.checkAlreadyClicked}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            clicked={character.clicked}            
          />
        ))}
      </Wrapper>
      </>
    );
  }
}

export default App;
