import React, { Component } from "react";
import CardList from "../Component/CardList";
import { Persona } from "../Component/Array";
import SearchBox from "../Component/SearchBox";
import Scroll from "../Component/Scroll";
import ErrorHandler from "../Component/ErrorHandler";
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
  }

  render() {
    const searchCase = this.state.searchfield.toLowerCase();
    const searchRobots = this.state.concatArray.filter((Newname) => {
      return Newname.name.toLowerCase().includes(searchCase);
    });

    return (
      <div className="App_Div">
        <SearchBox searchRobots={this.onSearchChange} />
        <ErrorHandler>
          <Scroll>
            <CardList robot={searchRobots} />
          </Scroll>
        </ErrorHandler>
      </div>
    );
  }
}

export default App;
