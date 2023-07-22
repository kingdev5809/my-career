import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Select from "react-select";
import "./AddLanguage.scss";
import cancel from "../../../../../assets/images/Resume/cancel.png";
import {
  deleteUserLanguageWithId,
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
  const { userLanguages, deleteAction } = useSelector(
    (state) => state.frilanserCardSlice
  );
  const [userLang, setUserLang] = useState([]);
  const [allLang, setAllLang] = useState([]);
  const [langs, setLangs] = useState([initialState]);
  const [selectedLang, setSelectedLang] = useState(null);
  const [singleLang, setSingleLang] = useState(true);
  const [singleLang2, setSingleLang2] = useState(true);
  let levels = [
    { value: "Beginner", label: "A1 - Beginner", level: 0 },
    { value: "Elementary", label: "A2 - Elementary", level: 1 },
    { value: "PreIntermediate", label: "B1 - PreIntermediate", level: 2 },
    { value: "UpperIntermediate", label: "B2 - Upper-Intermediate", level: 3 },
    { value: "Advanced", label: "C1 - Upper-Intermediate", level: 4 },
    { value: "Native", label: "C2 - Native" },
  ];

  // get user language

  useEffect(() => {
    let arr = [];
    userLanguages?.forEach((ulang) => {
      const lang = languageList?.find((lang) => ulang.languageId == lang.id);
      const level = levels?.find((level) => ulang.level == level.level);
      arr.push({
        language: lang ? lang.name : null,
        level: level ? level.label : null,
        id: lang ? ulang.id : null,
        languageId: lang ? lang.id : null,
      });
    });

    if (arr.length > 0) {
      setSingleLang2(false);
    }

    if (!userLang?.length > 0) {
      setLangs([]);
      setSelectedLang(true);
    }
    setUserLang(arr);
  }, [languageList, userLanguages]);

  useEffect(() => {
    let yFilter = userLang.map((item) => {
      return item.language;
    });
    let filtered = allLang.filter((el) => !yFilter.includes(el.name));
    setAllLang(filtered);
  }, [userLang, languageList]);

  useEffect(() => {
    dispatch(languages());
    dispatch(getUserLanguage());
  }, [deleteAction]);

  useEffect(() => {
    setAllLang(languageList);
  }, [languageList]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = langs.map((el) => ({
      languageId: el.languageId,
      level: el.level,
    }));
    dispatch(postUserLanguage(data));
    setActiveModal(null);
  };

  const handleLanguage = () => {
    if (allLang.length == 0) {
      console.log(allLang);
      return;
    }
    if (selectedLang) {
      setLangs((prev) => [...prev, { ...initialState, id: Date.now() }]);
      setSingleLang(false);
      if (allLang.length > 0) {
        setAllLang(allLang.filter((el) => el.id !== selectedLang));
      } else {
        setAllLang(languageList.filter((el) => el.id !== selectedLang));
      }
    }
  };

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

  const removeLang = (lang, api) => {
    let newLang = [];
    for (let i = 0; i < langs.length; i++) {
      console.log(lang);
      console.log(langs[i]);
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

    // delete from backend
    if (api) {
      dispatch(deleteUserLanguageWithId(lang.id));
    }
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
          {userLang?.map((lang) => (
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
                inputValue={lang.language}
              />
              <Select
                className="languageSelect"
                placeholder="Level*"
                inputValue={lang.level}
              />
              {!singleLang2 && (
                <div
                  className="cancelLang"
                  onClick={() => removeLang(lang, true)}
                >
                  <img src={cancel} alt="cancel" />
                </div>
              )}
            </div>
          ))}
          {langs?.map((lang) => (
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
                options={levels}
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
                <div
                  className="cancelLang"
                  onClick={() => removeLang(lang, false)}
                >
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
