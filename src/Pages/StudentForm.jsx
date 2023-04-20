import React, { Fragment } from "react";
import { useState } from "react";
import "./StudentForm.css"
export default function StudentForm() {
    const [table,setTable] = useState(false)
  const [details, setDetails] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });

  }
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(details);
    
    setTable(true)

  }

  return (
    <Fragment>
      <div className = "container">
        <div className = "form ">
        <form>
          <div className="form-group mt-4">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control  w-75"
              required
              id="name"
              name="name"
              onChange={handleChange}
              
            />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control  w-75"
              required
              id="age"
              name="age"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control  w-75"
              required
              id="phone"
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control  w-75"
              required
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        </div>
{table &&
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Phone</th>
      <th scope="col">Email Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{details.name}</td>
      <td>{details.age}</td>
      <td>{details.phone}</td>
      <td>{details.email}</td>
    </tr>
    
  </tbody>
</table>
}

      </div>
    </Fragment>
  );
}
