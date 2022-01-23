import React from "react";
import SwapiService from "../../services/SwapiService";
import Loader from "../Loader/Loader";

import "./ItemDetails.css";

class ItemDetails extends React.Component {
  state = {
    person: null,
    loading: true,
  };

  swapiSrv = new SwapiService();

  onPersonLoaded = (person) => {
    this.setState({ person, loading: false });
  };

  updatePerson() {
    const { personId } = this.props;

    if (!personId) return;

    this.swapiSrv
      .getPerson(personId)
      .then(this.onPersonLoaded)
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <ul className="item-details">
          <Loader />
        </ul>
      );
    }

    if (!this.state.person) {
      return <span>Select a person from a list</span>;
    }

    const {
      person: {
        id,
        name = "Name",
        gender = "unknown",
        birthYear = "unknown",
        eyeColor = "unknown",
      },
    } = this.state;

    return (
      <div className="item-details">
        <div className="img-block">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt="Item"
          />
        </div>
        <div className="descr-block">
          <h2>{name}</h2>
          <table>
            <tbody>
              <tr>
                <td>Gender:</td>
                <td>{gender}</td>
              </tr>
              <tr>
                <td>Birth Year:</td>
                <td>{birthYear}</td>
              </tr>
              <tr>
                <td>Eye Color:</td>
                <td>{eyeColor}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
