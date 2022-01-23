import React from "react";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import PeoplePage from "../PeoplePage/PeoplePage";

import "./App.css";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

class App extends React.Component {
  state = {
    visible: true,
    hasError: false,
  };

  toggle = () => {
    this.setState(({ visible }) => {
      return {
        visible: !visible,
      };
    });
  };

  componentDidCatch() {
    console.log("Has error");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) return <ErrorIndicator />;

    const planet = this.state.visible ? <RandomPlanet /> : null;

    return (
      <React.Fragment>
        <Header />

        {planet}
        
        <div className="toggle-btn">
          <button onClick={this.toggle}>Toggle</button>
        </div>
        
        <PeoplePage />
      </React.Fragment>
    );
  }
}

export default App;
