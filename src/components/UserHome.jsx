import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserHome = () => {
  const [userData, setUserData] = useState([]);
  console.log(userData);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // console.log(resp)
        setUserData(resp);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // !single user details
  const LoadDetails = (id) => {
    navigate("/details/" + id);
  };

  // !deleting an user
  const RemoveUser = (id) => {
    fetch("http://localhost:8000/users/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        toast.warning("User removed successfully");
        window.location.reload();
      })
      .catch((err) => console.log(err.message));
  };
  const LoadEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div className="card">
        <div className="card-title" style={{ textAlign: "center" }}>
          <h2 className="mt-3">Users List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/create" className="btn btn-success mb-4">
              Add User(+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...userData].map(({ id, name, email, phone, isActive }, i) => {
                // console.log(id);
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{isActive ? "Yes" : "No"}</td>
                    <td>
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => LoadEdit(id)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => RemoveUser(id)}
                        className="btn btn-danger me-2"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => LoadDetails(id)}
                        className="btn btn-success"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
