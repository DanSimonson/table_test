import React, { Component } from "react";
import axios from "axios";

class StarWarsClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starShips: [],
      loading: true
    };
  }
  componentDidMount() {
    this.loadStarShips();
  }
  loadStarShips = () => {
    axios.get(`https://swapi.co/api/starships/?format=json`).then(res => {
      this.setState({ starShips: res.data.results }, () => {
        this.setState({ loading: false });
      });
    });
  };

  render() {
    const { loading, starShips } = this.state;

    return (
      <div>
        <h1>CLASS COMPONENT BASED STAR SHIPS TABLE</h1>
        {loading ? (
          <h1>loading</h1>
        ) : (
          <div className="centerMe">
            <table>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>MODEL</th>
                  <th>MANUFACTURER</th>
                </tr>
              </thead>
              <tbody>
                {starShips.map((row, index) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.model}</td>
                    <td>{row.manufacturer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default StarWarsClassBased;
