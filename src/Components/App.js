import React from "react";
import unsplash from "../APIs/Unsplash";
import GameImage from "./GameImage";
import GameAnswer from "./GameAnswer";

class App extends React.Component {
  state = { answer: null, image: null, gamePlaying: false };

  randomImages = async () => {
    const terms = ["hut", "nut"];
    const randomTerm = terms[Math.round(Math.random())];

    const response = await unsplash.get("search/photos", {
      params: {
        query: randomTerm,
        per_page: 20
      }
    });

    this.setState({
      answer: randomTerm,
      image:
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
    });
  };

  componentDidMount() {
    this.randomImages();
  }

  gamePlayState = (boolean) => {
      if (boolean){
          this.setState({gamePlaying: true});
      } else {
          this.setState({gamePlaying: false});
      }
  }



  render() {
    if (this.state.gamePlaying) {
      return (
        <div>
          <h2>Hut or Nut</h2>
          <GameImage randomImage={this.state.image} />
          <GameAnswer correctAnswer={this.state.answer} />
        </div>
      );
    } else {
        return (
            <div>
               <h1>Hut Or Nut</h1>
               <p>Can you choose the correct answer?</p>
               <div>
                   <button onClick={() => {this.gamePlayState(true)}}>Start Game</button>
               </div>
            </div>
        )
    }
     
  }
}

export default App;
