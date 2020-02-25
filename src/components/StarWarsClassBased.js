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
      //data = res.data.results;
      //tempArray.push(...data);
      this.setState({ starShips: res.data.results }, () => {
        this.setState({ loading: false });
      });
    });

    /*this.setState({ starShips: tempArray }, () => {
      //console.log("this.state.starShips: ", this.state.starShips);
      this.setState({ loading: false });
    });*/
  };

  render() {
    //{isLoggedIn ? <button>Logout</button> : <button>Login</button>}
    //const { starShips } = this.state;
    //console.log("starShips: ", starShips);
    let { loading, starShips } = this.state;
    //console.log("loading: ", loading);
    let tempArray = starShips;
    console.log("tempArray: ", tempArray);
    console.log("loading: ", loading);
    console.log("starShips: ", starShips);
    return (
      <div>
        {loading ? (
          <h1>loading</h1>
        ) : (
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
        )}
      </div>
    );
  }
}

export default StarWarsClassBased;
