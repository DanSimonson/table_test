import React, { useState, useEffect } from "react";
import axios from "axios";

function StarWarsHooksBased() {
  const [starShips, setStarShips] = useState({});

  //componendDidMount equivalent
  useEffect(() => {
    axios.get(`https://swapi.co/api/starships/?format=json`).then(res => {
      setStarShips(res.data.results);
    });
  }, []);

  return (
    <div>
      <h1>HOOKS BASED STAR SHIPS TABLE</h1>
      {Object.keys(starShips).length !== 0 ? (
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
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default StarWarsHooksBased;
