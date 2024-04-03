import React, { useEffect, useState } from "react";
import Color from "./userdetails.module.css";
import { Link, useParams } from "react-router-dom";
const UserDetails = () => {
  const { userid } = useParams();
  const [{ id, name, email, phone, isActive }, setUser] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/users/" + userid)
      .then((res) => res.json())
      .then((resp) => {
        setUser(resp);
      })
      .catch((err) => console.error(err.message));
  }, []);
  return (
    <section
      id={Color.detailsBlock}
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        className="shadow p-3 mb-5 bg-body rounded"
        style={{
          border: "2px solid gray",
          borderRadius: "1rem",
          padding: "1rem",
        }}
      >
        <h4>ID: {id}</h4>
        <hr/>
        <h4>Name: {name}</h4>
        <hr />
        <h4>E-mail: {email}</h4>
        <hr />
        <h4>Phone-number: {phone}</h4>
        <hr />
        <h4>Active: {isActive ? "Yes" : "No"}</h4>
        <hr />
        <Link to="/" className="btn btn-danger">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default UserDetails;
