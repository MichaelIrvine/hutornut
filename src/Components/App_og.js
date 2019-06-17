import React from "react";
import unsplash from "../APIs/Unsplash";
import GameImage from "./GameImage";

class App extends React.Component {
  state = { image: null };

  randomImages = async () => {
    const terms = ["hut", "nut"];
    const shuffledTerm = terms[Math.round(Math.random())];

    const response = await unsplash.get("search/photos", {
      params: {
        query: shuffledTerm,
        per_page: 20
      }
    });

    this.setState({
      image: response.data.results[Math.round(Math.random())]
    });
  };

    componentDidMount(){
        this.randomImages();
    }

//   componentDidUpdate() {
//     console.log(this.state);
//   }

  render() {
    return (
      <div>
        <h2>Hello Worms</h2>
        <GameImage randomImage={this.state.image} />
      </div>
    );
  }
}

export default App;
