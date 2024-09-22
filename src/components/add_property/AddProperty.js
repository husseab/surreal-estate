import React, { useState } from "react";
import { createPropertyListing } from "../../service/Properties.service";
import { Alert } from "antd";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: 1,
      bathrooms: 1,
      price: 0,
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    (async () => {
      setAlert({ message: "", isSuccess: false });

      const responseCode = await createPropertyListing(fields);
      console.log("responseCode", responseCode);
      if (responseCode === 201) {
        setAlert({
          message: "Property Added",
          isSuccess: true,
        });
      } else {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      }
    })();
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="container mt-4 bg-white">
      <br />
      <h4>Add Property Page</h4>
      <br />
      <form className="row g-2" onSubmit={handleAddProperty}>
        <div className="col-md-3">
          <label className="form-label" htmlFor="title">
            Title
            <input
              id="title"
              name="title"
              type="text"
              className="form-control"
              value={fields.title}
              required
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="col-md-3">
          <label className="form-label" htmlFor="city">
            City
            <select
              id="city"
              name="city"
              className="form-select"
              value={fields.city}
              required
              onChange={handleFieldChange}
            >
              <option value={"Manchester"}>Manchester</option>
              <option value={"Leeds"}>Leeds</option>
              <option value={"Sheffield"}>Sheffield</option>
              <option value={"Liverpool"}>Liverpool</option>
            </select>
          </label>
        </div>

        <div className="col-md-3">
          <label className="form-label" htmlFor="type">
            Type
            <select
              id="type"
              name="type"
              className="form-select"
              value={fields.type}
              required
              onChange={handleFieldChange}
            >
              <option value={"Flat"}>Flat</option>
              <option value={"Detached"}>Detached</option>
              <option value={"Semi-Detached"}>Semi-Detached</option>
              <option value={"Terraced"}>Terraced</option>
              <option value={"End of Terrace"}>End of Terrace</option>
              <option value={"Cottage"}>Cottage</option>
              <option value={"Bungalow"}>Bungalow</option>
            </select>
          </label>
        </div>
        <div className="col-md-3">
          <label className="form-label" htmlFor="bedrooms">
            Bedrooms
            <input
              id="bedrooms"
              name="bedrooms"
              type="number"
              className="form-control"
              min={0}
              value={fields.bedrooms}
              required
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="col-md-3">
          <label className="form-label" htmlFor="bathrooms">
            Bathrooms
            <input
              id="bathrooms"
              name="bathrooms"
              type="number"
              className="form-control"
              min={0}
              value={fields.bathrooms}
              required
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="col-md-3">
          <label className="form-label" htmlFor="price">
            Price
            <input
              id="price"
              name="price"
              type="number"
              className="form-control"
              min={0}
              step={1000}
              value={fields.price}
              required
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="col-md-3">
          <label className="form-label" htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              value={fields.email}
              required
              onChange={handleFieldChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              {"We'll never share your email with anyone else."}
            </small>
          </label>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <br />
        <div className="col-6 mb-2">
          {!alert.message ? (
            ""
          ) : (
            <Alert
              message={alert.message}
              type={alert.isSuccess ? "success" : "error"}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
