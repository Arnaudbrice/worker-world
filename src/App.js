import React from "react";
import "./App.css";
import "./Bachelor Pad Shadow JL.ttf"
import CardList from "./components/card-list/card-list";
import Search from './components/search-box/search-box';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
    // this.onHandleChange = this.onHandleChange.bind(this);
  }
  handleClick = () => this.setState({ string: "Good" });

/* Called immediately after a component is mounted(is insert inside the page). Setting state here will trigger re-rendering.(one of the lifecycle methods) */
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json()) //.json() to extract the json body
      .then(users => this.setState({ monsters: users }));
  }

  onHandleChange = e => {
    const valu = e.target.value;
    this.setState({ searchField: valu });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      // "hallo".includes("hallo") => true

      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">

          <h1 id="heading">Worker world</h1>


        <Search placeholder="search Worker" handleChange={this.onHandleChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}


export default App;

