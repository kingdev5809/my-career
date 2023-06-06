import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegionsList } from "reduxToolkit/extraReducers";
import Select from "react-select";

function AddLocation({ setActiveModal }) {
  const dispatch = useDispatch();

  const [userChoice, setUserChoice] = useState([0]);
  const [countryName, setCountryName] = useState(null);
  const [regionName, setRegionName] = useState(null);
  const [userChoice2, setUserChoice2] = useState(0);
  const countryList = useSelector((state) => state.resume.countryList);
  const regionsList = useSelector((state) => state.resume.regionsList);
  const { firstName } = useSelector(
    (state) => state.frilanserCardSlice.freelancer
  );
  useEffect(() => {
    if (countryName) {
      setUserChoice(countryName.value[0]);
      localStorage.setItem("countryName", JSON.stringify(countryName));
    }
    if (regionName) {
      localStorage.setItem("regionName", JSON.stringify(regionName));
    }
  }, [countryName, regionName]);
  useEffect(() => {
    dispatch(getRegionsList(userChoice[0]));
  }, [userChoice]);
  let optionsRegion = [];
  let options = [];

  for (let i = 0; i < countryList.length; i++) {
    options.push({
      value: [countryList[i].id, countryList.indexOf(countryList[i])],
      label: countryList[i].name,
    });
  }
  for (let i = 0; i < regionsList.length; i++) {
    optionsRegion.push({
      value: [regionsList[i].id, regionsList.indexOf(regionsList[i])],
      label: regionsList[i].name,
    });
  }
  const [data, setData] = useState({
    countryId: "",
    country: "",
    street: "",
  });

  const onCountryChange = (choice) => {
    setCountryName(choice);
    setUserChoice(choice.value);
    setData({ ...data, countryId: choice.label });
  };

  const onRegionChange = (choice) => {
    setRegionName(choice);
    setUserChoice2(choice.value);
    setData({ ...data, country: choice.label });
  };

  const handleSubmit = (event) => {};
  return (
    <div>
      <div className="countryCard">
        <div className="country">
          <form className="country__form" onSubmit={handleSubmit}>
            <h2 className="country__title">Welcome {firstName}</h2>
            <p className="country__text">
              Complete your profile to join our global community of freelancers
              and start selling your services to our growing network of
              businesses.
            </p>
            <div className="country__content">
              <h5 className="country__subtitle">Living address</h5>
              <div className="country__wrapper">
                <div className="country__info">
                  <Select
                    classNamePrefix="mySelect"
                    options={options}
                    placeholder="Country*"
                    onChange={onCountryChange}
                    value={countryName}
                  />
                </div>
                <div className="country__info">
                  <Select
                    classNamePrefix="mySelect"
                    options={optionsRegion}
                    placeholder="Region*"
                    onChange={onRegionChange}
                    value={regionName}
                  />
                </div>
              </div>
              <input
                onChange={(e) => setData({ ...data, street: e.target.value })}
                className="country__inputStreet"
                type="text"
                value={data.street}
                placeholder="Street, apartment"
              />
            </div>
            <div className="btn-group-addprofile">
              <button
                className="cancel_btn"
                onClick={() => setActiveModal(null)}
              >
                Cancel
              </button>
              <button className="save_btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddLocation;
