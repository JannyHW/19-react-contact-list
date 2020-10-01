import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import usersJSON from "./usersJSON.json";
//Get users state from usersJSON

function Home() {
  const [users, setUsers] = useState(usersJSON);
  //create HTML list inside <Link> with navigating "to" for path
  //use map() to iterate id 
  //toUpperCase() to have Capital for First letter
  return (
    <div className="container">
      <h2 className="myPeeps">My Peeps</h2>
      <ul className="userList">
        {users.map((person) => (
          <Link to={`/contact/${person.id}`} key={person.id}>

            <li key={person.id}>
              <img src={person.picture.thumbnail} />
              {person.name.first.charAt(0).toUpperCase() + person.name.first.slice(1)}{" "}
              {person.name.last.charAt(0).toUpperCase() + person.name.last.slice(1)}
            </li>
          
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Home;
