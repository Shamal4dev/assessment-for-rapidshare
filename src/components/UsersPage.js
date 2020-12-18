import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UsersPage.css";

const usersApi = "https://jsonplaceholder.typicode.com/users";

export function UsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({ hasError: false, errorMessage: "" });

  useEffect(() => {
    getUsers(usersApi);
  }, []);

  const getUsers = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        handleUsers(data);
        handleErrors();
      })
      .catch((err) => {
        handleUsers();
        handleErrors(true, err.message);
      });
  };

  const handleUsers = (usersList = []) => {
    return setUsers(usersList);
  };

  const handleErrors = (hasErr = false, msg = "") => {
    return setError({ hasError: hasErr, errorMessage: msg });
  };

  const loadError = (
    <div className="error">
      Oops... something went wrong. Hint: {error.errorMessage}
    </div>
  );

  const loadUserDetails =
    users &&
    users.length > 0 &&
    users.map((user) => (
      <Link
        key={user.id}
        style={{ textDecoration: "none" }}
        to={{ pathname: "/userInfo", user: { user } }}
      >
        <div className="card">
          <div className="thumb-nail">
            <h1>{createThumbNail(user.name)}</h1>
          </div>
          <div className="user-details">
            <p className="name">{user.name}</p>
            <p className="email">{user.email}</p>
          </div>
        </div>
      </Link>
    ));

  function createThumbNail(name) {
    
    let firstletters = "";
    let arrNames = [];

    arrNames = name.split(" ");
    firstletters = arrNames[0].slice(0, 1) + arrNames[1].slice(0, 1);

    return firstletters;
  }

  return <div>{error.hasError ? loadError : loadUserDetails}</div>;
}
