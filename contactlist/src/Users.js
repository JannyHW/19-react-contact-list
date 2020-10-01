import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import usersJSON from "./usersJSON.json";
//useParams are parts of the dynamic URL changing based on current id
//<Link> the second "/id" (with arrow to back to HomePage) after the first "/contact" on the url
// use find() to get id for current clicked user

function Users() {
  const [users, setUsers] = useState(usersJSON);
  const { id } = useParams();
  const currentUser = users.find((person) => person.id == id);

  return (
    <div className="currentUser">
      <div className="userImage">
        <Link to={`/`}>
          <div id="arrow">&#x2190;</div>
        </Link>
        <img className="thumbNails" src={currentUser.picture.large} />
      </div>

      <div className="contact">
        <h5>
          🤵{" "}
          {currentUser.name.first.charAt(0).toUpperCase() +
            currentUser.name.first.slice(1)}{" "}
          {currentUser.name.last.charAt(0).toUpperCase() +
            currentUser.name.last.slice(1)}
        </h5>

        <h5>✉ {currentUser.email}</h5>

        <h5>📱 {currentUser.cell}</h5>
        <h5>
          🌎{" "}
          {currentUser.location.city.charAt(0).toUpperCase() +
            currentUser.location.city.slice(1)}
          ,{" "}
          {currentUser.location.state.charAt(0).toUpperCase() +
            currentUser.location.state.slice(1)}
        </h5>
      </div>
    </div>
  );
}

export default Users;
