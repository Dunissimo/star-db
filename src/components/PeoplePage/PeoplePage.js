import React from "react";
import ItemList from "../ItemList/ItemList";
import ItemDetails from "../ItemDetails/ItemDetails";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

class PeoplePage extends React.Component {
  state = {
    selectedPerson: 1,
    hasError: false,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const styles = {
      alignItems: "flex-start",
    };

    if (this.state.hasError) {
      return (
        <div className="people-page">
          <ErrorIndicator />
        </div>
      );
    }

    return (
      <div className="people-page">
        <div className="wrapper" style={styles}>
          <ItemList onItemSelected={this.onPersonSelected} />
          <ItemDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
