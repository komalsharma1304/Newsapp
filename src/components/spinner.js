import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={require("../Iphone-spinner-2.gif")} alt="loading" />
      </div>
    );
  }
}

export default Spinner;
