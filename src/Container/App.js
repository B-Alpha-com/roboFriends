import React, { Component } from "react";
import CardList from "../Component/CardList";
import { Persona } from "../Component/Array";
import SearchBox from "../Component/SearchBox";
import Scroll from "../Component/Scroll";
// import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fetchName: [],
      persona: Persona,
      searchfield: "",
      concatArray: [],
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ fetchName: users });
        this.setState({
          concatArray: users.concat(this.state.persona),
        });
      });

    console.log("rodiyyah", this.state.concatArray);
  }

  render() {
    const searchCase = this.state.searchfield.toLowerCase();
    const searchRobots = this.state.concatArray.filter((Newname) => {
      return Newname.name.toLowerCase().includes(searchCase);
    });
    console.log("mehn", searchRobots);

    return (
      <div className="tc bg-green">
        <SearchBox searchRobots={this.onSearchChange} />
        <Scroll>
          <CardList robot={searchRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
