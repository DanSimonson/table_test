import React, { Component } from "react";
import axios from "axios";

//import "./styles.css";

// https://swapi.co/api/starships/?format=json

class StarWarsClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starShips: [],
      loading: true
    };
  }
  componentDidMount() {
    /*let tempArray = [];
    let data;
    axios.get(`https://swapi.co/api/starships/?format=json`).then(res => {
      data = res.data.results;
      tempArray.push(...data);
    });
    this.setState({ starShips: tempArray }, () => {
      //console.log("this.state.starShips: ", this.state.starShips);
    });*/
    this.loadStarShips();
  }
  loadStarShips = () => {
    let tempArray = [];
    let data;
    axios.get(`https://swapi.co/api/starships/?format=json`).then(res => {
      data = res.data.results;
      //tempArray.push(...data);
    });
    this.setState({ starShips: tempArray }, () => {
      //console.log("this.state.starShips: ", this.state.starShips);
    });
  };

  render() {
    //const { starShips } = this.state;
    //console.log("starShips: ", starShips);
    if (!this.state.starShips) {
      return <div />;
    }
    return (
      <table>
        <thead>
          <tr>
            <th>header</th>
          </tr>
        </thead>
        <tbody>
          {this.state.starShips.map((row, index) => (
            <tr>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default StarWarsClassBased;
