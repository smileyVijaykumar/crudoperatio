import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UserEdit = () => {
  const { userid } = useParams();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  // !fetching
  useEffect(() => {
    fetch("http://localhost:8000/users/" + userid)
      .then((res) => {
        return res.json();
      })
      .then(({id, name, email, phone, isActive}) => {
        setId(id);
        setName(name);
        setEmail(email);
        setPhone(phone);
        setIsActive(isActive);
      })
      .catch((err) => console.log(err.message));
  }, []);
  // !editing

  const handleSubmit = (enter) => {
    enter.preventDefault();
    let payload = { name, email, phone, isActive };
    fetch("http://localhost:8000/users/" + userid, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(() => {
        toast.success("User edited successfully");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form action="" className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title" style={{ textAlign: "center" }}>
                <h2 className="mt-3">Edit User</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={({target}) => setName(target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mt-1 mb-1">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="">
                        Active
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button type="submit" className="btn btn-success me-2">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
