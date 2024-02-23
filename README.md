# Frontend Mentor - Connect Four game solution

This is a solution to the [Connect Four game challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/connect-four-game-6G8QVH923s).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Built with ReactJS, this project is a connect four game that allows human player vs. human player gameplay (alternating turns on the same computer). The project was a Frontend Mentor challenge with the goal of building the game and getting it as close to the provided design specs as possible. While the player vs. player version is complete, Player vs. CPU mode will be in version 2 of the project.

Users should be able to:

- View the game rules
- Play a game of Connect Four against another human player (alternating turns on the same computer)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- See the discs animate into their position when a move is made

### Screenshot

![](/connect_four_thumb.png)

### Links

- Code URL: []()
- Live Site URL: []()

### Built with

- CSS
- React

The game piece implementation came from Thomas Campbell on youtube

```js
const gamePieceDropAnimation = (gamePiece, pieceDropHeight) => {
  // sets the game piece drop animation

  gamePiece.animate(
    [
      { transform: `translateY(${pieceDropHeight}px)`, offset: 0 },
      { transform: `translateY(0px)`, offset: 0.6 },
      { transform: `translateY(${pieceDropHeight / 30}px)`, offset: 0.8 },
      { transform: `translateY(0px)`, offset: 0.95 },
    ],
    {
      duration: 600,
      easing: 'linear',
      iterations: 1,
    }
  );
};
```
