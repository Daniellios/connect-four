import React from "react";
const GameLogo: string = require("../assets/images/logo.svg").default;

const Logo = () => {
  return <img src={GameLogo} alt="game logo" />;
};

export default Logo;
