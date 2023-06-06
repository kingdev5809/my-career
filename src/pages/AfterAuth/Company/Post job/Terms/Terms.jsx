import React from "react";
import { useDispatch } from "react-redux";
import { activeDoteAction } from "reduxToolkit/jobsSlice/JobsSlice";
import Select from "react-select";
import "./Terms.scss";
function Terms() {
  var dispatch = useDispatch();
  const currency = [
    {
      label: "US Dollars",
      value: "US Dollars",
      label: "UZS Som",
      value: "UZS Som",
    },
  ];
  const dates = [
    { label: "Days", value: "Days" },
    { label: "Weeks", value: "Weeks" },
    { label: "Months", value: "Months" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      activeDoteAction([
        { id: 5, label: "Review and post" },
        { id: 5, type: "Review and post" },
      ])
    );
  };
  const backPage = (e) => {
    e.preventDefault()
    dispatch(
      activeDoteAction([
        { id: 3, label: "About the talant" },
        { id: 3, type: "About the talant" },
      ])
    );
  };
  return (
    <div className="terms_main">
      <h2 style={{ marginBottom: "15px" }}>Terms</h2>
      <form onSubmit={handleSubmit}>
        <p>How much do you want to pay?</p>
        <div className="select_hourly">
          <input type="text" placeholder="10" />

          <Select
            opitions={currency}
            className="selectCurrency"
            placeholder="US Dollars"
          />
        </div>
        <div className="select_checkbox">
          <input name="radio" type="radio" />
          <span>Hourly</span>
          <div>
            <input name="radio" type="radio" />
            <span>By Project</span>
          </div>
        </div>

        <p>Your deadline for job</p>
        <div className="select_hourly">
          <input type="text" placeholder="10" />
          <Select
            opitions={dates}
            className="selectCurrency"
            placeholder="Days"
          />
        </div>
        <div className="buttons">
          <button className="backBtn" onClick={backPage}>
            Back
          </button>
          <button type="submit" className="nextBtn">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Terms;
