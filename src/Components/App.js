import "../SASS/styles.css";
import React from "react";
import unsplash from "../APIs/Unsplash";
import GameImage from "./GameImage";
import GameAnswer from "./GameAnswer";
import GameResponse from "./GameResponse";


class App extends React.Component {
  state = {
    answer: null,
    image: null,
    gamePlaying: false,
    response: null
  };

  // Makes API request and returns random image matching either "nut" or "nut"
  fetchImages = async () => {
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
    this.fetchImages();
    
  }

  setPlayState = boolean => {
    this.setState({ gamePlaying: boolean });
  };



  render() {
    if (this.state.gamePlaying) {
      return (
        <div>
          <h2>Hut or Nut</h2>
          <div className="game-image_container">
            <GameImage
              className="game-image"
              randomImage={this.state.image}
            />
          </div>
          <GameAnswer
            correctAnswer={this.state.answer}
            onResponse={response => this.setState({ response: response })}
          />
          {this.state.response && (
            <GameResponse
              response={this.state.response}
              onRestart={() => {
                this.setState({
                  response: null,
                  answer: null,
                  image: null
                });
                this.fetchImages();
              }}
            />
          )}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Hut Or Nut</h1>
          <p>Can you choose the correct answer?</p>
          <div className="game-image_container">
            
          </div>
          <div className="game-start-container">
            <button
              className="game-start-button"
              onClick={() => {
                this.setPlayState(true);
              }}
              
            >
              Start Game
            </button>
          </div>
        </div>
      );
    }
  }
}

export default App;
