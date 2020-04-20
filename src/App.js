import ReactLoading from "react-loading";
import React from "react";
import "./App.css";
import { CardList } from "./components/card-list";
import { SearchBox } from "./components/search-box";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      search: "",
      albums: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((resp) => resp.json())
      .then((els) =>
        this.setState({
          loading: false,
          albums: els,
        })
      );
  }

  // Note: the below anonymous funtion works since "this" this automatically bound for arrow functions with lexical scoping.
  handleChange = (ev) => this.setState({ search: ev.target.value });
  // Note: the below does not work since "this" is not bound. 
  // handleChange(ev) {
  //   this.setState({ search: ev.target.value });
  // }

  render() {
    if (this.state.loading) {
      return (
        <div className="App-header">
          <ReactLoading type="cylon" color="#888888" />
        </div>
      );
    }

    const { albums, search } = this.state;
    const items = albums.filter((el) => el.title.includes(search));
    return (
      <div className="App">
        <h1>Really!!!</h1>
        <SearchBox
          placeholder="search"
          handleChange={this.handleChange}
        />
        <CardList items={items} />
      </div>
    );
  }
}

export default App;
