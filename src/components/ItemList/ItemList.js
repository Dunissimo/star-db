import React from "react";
import SwapiService from "../../services/SwapiService";
import Loader from "../Loader/Loader";

import "./ItemList.css";

class ItemList extends React.Component {
  SwapiService = new SwapiService();

  state = {
    peopleList: [],
  };

  componentDidMount() {
    this.SwapiService.getAllPeople()
      .then((peopleList) => {
        this.setState({ peopleList });
      })
      .catch((err) => console.log(err));
  }

  renderItems = (arr) => {
    return arr.map(({ id, name }) => {
      return (
        <li
          key={id}
          onClick={(e) => {
            this.props.onItemSelected(id);
          }}
        >
          {name}
        </li>
      );
    });
  };

  render() {
    const { peopleList } = this.state;

    if (!peopleList || peopleList.length === 0) {
      return (
        <ul className="item-list">
          <Loader />
        </ul>
      );
    }

    const items = this.renderItems(peopleList);

    return <ul className="item-list">{items}</ul>;
  }
}

export default ItemList;
