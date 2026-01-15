import React, { useContext, useRef } from "react";
import UserContext from "./UserContext";

const UsersAdd = ({ onAddUser }) => {
  const fullName = useRef(null);
  const country = useRef(null);
  const userContext = useContext(UserContext);

  const resetForm = () => {
    fullName.current.value = "";
    country.current.value = "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser({
      payload: {
        id: userContext.lastId,
        fullName: fullName.current.value,
        country: country.current.value,
      },
    });
    resetForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-primary">Add User</h2>
      <div className="form-group mb-2">
        <label className="form-label" htmlFor="id">
          id
        </label>
        <input
          type="text"
          id="id"
          name="id"
          className="form-control"
          value={userContext.lastId + 1}
          readOnly
        />
      </div>
      <div className="form-group mb-2">
        <label className="form-label" htmlFor="full-name">
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          name="fullName"
          className="form-control"
          ref={fullName}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="country" className="form-label">
          country
        </label>
        <select
          ref={country}
          className="form-select"
          name="country"
          id="country"
          required
        >
          <option value="">select your country</option>
          <option value="maroc">maroc</option>
          <option value="qatar">qatar</option>
          <option value="saoudi">saoudi</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        add user
      </button>
    </form>
  );
};

export default UsersAdd;
