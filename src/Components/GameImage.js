import React from "react";

const GameImage = props => {
  if (props.randomImage === null) {
    return <div>Loading....</div>;
  }

  return (
    <div className="game-image">
      <img src={props.randomImage.urls.regular} alt="" />
    </div>
  );
};

export default GameImage;
