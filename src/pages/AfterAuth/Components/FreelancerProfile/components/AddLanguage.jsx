import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Select from "react-select";
import "./AddLanguage.scss";
import cancel from "../../../../../assets/images/Resume/cancel.png";
import {
  getUserLanguage,
  languages,
  postUserLanguage,
} from "reduxToolkit/extraReducers";

const initialState = {
  languageId: null,
  level: "",
};

function AddLanguage({ setActiveModal }) {
  const dispatch = useDispatch();
  const languageList = useSelector((state) => state.resume.languageList);
  const userLanguages = useSelector(
    (state) => state.frilanserCardSlice.userLanguages
  );
  const [userLang, setUserLang] = useState([]);
  const [allLang, setAllLang] = useState([]);
  const [langs, setLangs] = useState([initialState]);
  const [selectedLang, setSelectedLang] = useState(null);
  let level = [
    { value: "Beginner", label: "A1 - Beginner" },
    { value: "Elementary", label: "A2 - Elementary" },
    { value: "PreIntermediate", label: "B1 - PreIntermediate" },
    { value: "UpperIntermediate", label: "B2 - Upper-Intermediate" },
    { value: "Advanced", label: "C1 - Upper-Intermediate" },
    { value: "Native", label: "C2 - Native" },
  ];

  let singleLang = true;
  if (langs.length > 1 || userLang.length > 1) {
    singleLang = false;
  }

  const removeLang = (lang) => {
    let newLang = [];
    for (let i = 0; i < langs.length; i++) {
      if (langs[i].id !== lang.id) {
        newLang.push(langs[i]);
      }
    }
    for (let i = 0; i < languageList.length; i++) {
      const element = languageList[i];
      if (element.id === lang.languageId) {
        setAllLang((prev) => [...prev, element]);
      }
    }
    setLangs(newLang);
  };

  const handleLanguage = () => {
    if (selectedLang) {
      setLangs((prev) => [...prev, { ...initialState, id: Date.now() }]);
      if (allLang.length > 0) {
        setAllLang(allLang.filter((el) => el.id !== selectedLang));
      } else {
        setAllLang(languageList.filter((el) => el.id !== selectedLang));
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = langs.map((el) => ({
      languageId: el.languageId,
      level: el.level,
    }));
    dispatch(postUserLanguage(langs));
    console.log(data);
    console.log(langs);
  };

  useEffect(() => {
    dispatch(languages());
    dispatch(getUserLanguage());
  }, []);

  useEffect(() => {
    setAllLang(languageList);
  }, [languageList]);

  useEffect(() => {
    // setUserLang(userLanguages);
    // backendan langugage id kevoti faqat name kesa togirlab qoyish kere
  }, [userLanguages]);
  const addLanguage = ({ id, value, type, choice }) => {
    if (type === "languageId") {
      setSelectedLang(choice?.value);
    }
    const newLangs = langs.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          [type]: value,
        };
      }
      return el;
    });

    setLangs(newLangs);
  };
  return (
    <div className="languageCard">
      <h2>Write what languages you speak</h2>
      <p>
        The more languages ​​you know, <br /> the more foreign employers will
        contact you.
      </p>
      <form action="submit" className="languageForm" onSubmit={handleSubmit}>
        <label htmlFor="languages">Language*</label>
        <div className="select_box">
          {userLang.map((lang) => (
            <div
              key={lang.id}
              id={!singleLang ? "test" : null}
              className="select"
            >
              <Select
                className="languageSelect"
                placeholder="Language*"
                styles={{
                  overflowX: "scroll",
                }}
              />
              <Select className="languageSelect" placeholder="Level*" />
              {!singleLang && (
                <div className="cancelLang" onClick={() => removeLang(lang)}>
                  <img src={cancel} alt="cancel" />
                </div>
              )}
            </div>
          ))}
          {langs.map((lang) => (
            <div
              key={lang.id}
              id={!singleLang ? "test" : null}
              className="select"
            >
              <Select
                className="languageSelect"
                options={allLang.map((el) => ({
                  value: el.id,
                  label: el.name,
                }))}
                placeholder="Language*"
                onChange={(choice) =>
                  addLanguage({
                    id: lang.id,
                    value: choice.value,
                    type: "languageId",
                    choice: choice,
                  })
                }
                styles={{
                  overflowX: "scroll",
                }}
              />
              <Select
                className="languageSelect"
                options={level}
                placeholder="Level*"
                onChange={(choice) =>
                  addLanguage({
                    id: lang.id,
                    value: choice.value,
                    type: "level",
                  })
                }
              />
              {!singleLang && (
                <div className="cancelLang" onClick={() => removeLang(lang)}>
                  <img src={cancel} alt="cancel" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          style={{ cursor: "pointer" }}
          className="addLanguage"
          onClick={() => handleLanguage()}
        >
          + Add Language
        </div>
        <div className="languageCard_btn">
          <button
            className="backButton"
            type="button"
            onClick={() => setActiveModal(null)}
          >
            Cancel
          </button>
          <button className="nextButton" onClick={handleSubmit} type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddLanguage;
