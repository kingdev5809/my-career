import React, { useEffect } from "react";
import classes from "./Language.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Select from "react-select";
import "./styles.scss";
import cancel from "../../../../assets/images/Resume/cancel.png";
import {
  languageUpload,
  languages,
  postUserLanguage,
} from "reduxToolkit/extraReducers";
import { activeDoteAction } from "reduxToolkit/resumeControlsSlice/resumeControls";

const initialState = {
  languageId: null,
  level: "",
  id: Date.now(),
  test: "test",
  test2: "test2",
};

function Language() {
  const dispatch = useDispatch();
  const languageList = useSelector((state) => state.resume.languageList);
  const [theArray, setTheArray] = useState([]);
  const [userLang, setUserLang] = useState([]);
  const [userLevel, setUserLevel] = useState([]);
  const [disabledlanguageList, setDisabledlanguageList] = useState(
    languageList
  );
  const [langs, setLangs] = useState([initialState]);
  const [lanId, setLanId] = useState(null);
  const [lanLevel, setLanLevel] = useState("");

  let level = [
    { value: "Beginner", label: "A1 - Beginner" },
    { value: "Elementary", label: "A2 - Elementary" },
    { value: "PreIntermediate", label: "B1 - PreIntermediate" },
    { value: "UpperIntermediate", label: "B2 - Upper-Intermediate" },
    { value: "Advanced", label: "C1 - Upper-Intermediate" },
    { value: "Native", label: "C2 - Native" },
  ];



  let singleLang = true;
  if (langs.length > 1) {
    singleLang = false;
  }

  const removeLang = (id) => {
    let newLang = [];
    for (let i = 0; i < langs.length; i++) {
      if (langs[i].id !== id) {
        newLang.push(langs[i]);
      }
    }
    setLangs(newLang);
  };

  const handleLanguage = () => {
    setLangs((prev) => [...prev, { ...initialState, id: Date.now() }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = langs.map((el) => ({
      languageId: el.languageId,
      level: el.level,
    }));
    dispatch(postUserLanguage(data));
    localStorage.setItem(
      "activDoteAction",
      JSON.stringify([
        { id: 5, label: "Experience" },
        { id: 5, type: "workexperience" },
      ])
    );
    dispatch(
      activeDoteAction([
        { id: 5, label: "Experience" },
        { id: 5, type: "workexperience" },
      ])
    );
  };

  const prevPage = () => {
    dispatch(
      activeDoteAction([
        { id: 3, label: "yourself" },
        { id: 3, type: "About yourself and skills" },
      ])
    );
  };

  useEffect(() => {
    dispatch(languages());
    var dotAction = JSON.parse(localStorage.getItem("activeDoteAction"));
    if (dotAction) {
      dispatch(activeDoteAction(dotAction));
    }
  }, []);

  const addLanguage = ({ id, value, type, choice }) => {
    const res = languageList.filter((el) => el.id !== choice?.value);
    if (res) {
      setUserLang(res);
      setDisabledlanguageList(res)
    } else {
      setUserLang(disabledlanguageList)
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
    <div className={classes.languageCard}>
      <h2>Write what languages you speak</h2>
      <p>
        The more languages ​​you know, <br /> the more foreign employers will
        contact you.
      </p>
      <form
        action="submit"
        className={classes.languageForm}
        onSubmit={handleSubmit}
      >
        <label htmlFor="languages">Language*</label>
        <div className={classes.select_box}>
          {langs.map((lang) => (
            <div
              key={lang.id}
              id={!singleLang ? "test" : null}
              className={classes.select}
            >
              <Select
                className="languageSelect"
                options={disabledlanguageList.length? disabledlanguageList :languageList.map((el) => ({
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
                <div
                  className={classes.cancelLang}
                  onClick={() => removeLang(lang.id)}
                >
                  <img src={cancel} alt="cancel" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          style={{ cursor: "pointer" }}
          className={classes.addLanguage}
          onClick={() => handleLanguage()}
        >
          + Add Language
        </div>
        <div className={classes.languageCard_btn}>
          <button
            className={classes.backButton}
            type="button"
            onClick={prevPage}
          >
            Back
          </button>
          <button className={classes.nextButton}>Next</button>
        </div>
      </form>
    </div>
  );
}

export default Language;
