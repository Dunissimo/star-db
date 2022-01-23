import React from "react";
import SwapiService from "../../services/SwapiService";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import Loader from "../Loader/Loader";

import "./RandomPlanet.css";

class RandomPlanet extends React.Component {
  swapiSrv = new SwapiService();
  state = {
    planet: {},
    loading: true,
    error: false,
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false, error: false });
  };

  onError = (err) => {
    this.setState({ error: true, loading: false });
    console.log("Error: ", err);
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiSrv.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      planet: {
        id,
        name = "Name",
        population = 0,
        rotationPeriod = 0,
        diameter = 0,
      },
      loading,
      error,
    } = this.state;

    const styles = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    if (loading) {
      return (
        <div className="random-planet">
          <div className="wrapper" style={styles}>
            <Loader />
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="random-planet">
          <div className="wrapper" style={styles}>
            <ErrorIndicator />
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className="random-planet">
          <div className="wrapper">
            <div className="img-block">
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                width={"100%"}
                height={"100%"}
                alt="planet"
              />
            </div>
            <div className="descr-block">
              <h2>{name}</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Population:</td>
                    <td>{population}</td>
                  </tr>
                  <tr>
                    <td>Rotation Period:</td>
                    <td>{rotationPeriod}</td>
                  </tr>
                  <tr>
                    <td>Diameter:</td>
                    <td>{diameter}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RandomPlanet;
