import React, { useContext } from "react";
import "./Education.scss";
import { useDispatch } from "react-redux";
// import {
//   temporary6,
//   temporary7,
//   educationDelete,
//   educationGet,
//   temporary8,
// } from "reduxToolkit/resumeSlice/ResumeSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AddEducations from "./AddEducation/AddEducation";
import { useState } from "react";
import { educationDelete, educationGet } from "reduxToolkit/extraReducers";
import { ReactComponent as Trash } from "../../../../../../assets/images/icons/trash.svg";
import { ReactComponent as Edit } from "../../../../../../assets/images/icons/edit.svg";
import EducationLoader from "components/Skeleton/EducationLoader";

function Education({ setActiveModal }) {
  const defaultData = {
    name: "",
    degree: "",
    typeOfStudy: "",
    location: "",
    currentStudy: false,
    dateFrom: "",
    dateTo: "",
  };
  const [isMoadalActive, setMoadalActive] = useState({
    educationAdd: false,
    educationEdit: false,
  });
  const [editData, setEditData] = useState({});

  const dispatch = useDispatch();
  const {
    educationList,
    educationPostIsSuccess,
    educationDeleteIsSuccess,
    loading,
  } = useSelector((state) => state.resume);

  useEffect(() => {
    dispatch(educationGet());
  }, [educationGet, educationPostIsSuccess, educationDeleteIsSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const deleteEducation = (id) => {
    dispatch(educationDelete(id));
  };

  const TypeOptions = [
    { value: "online", label: "online", id: 1 },
    { value: "offline", label: "offline", id: 2 },
  ];

  const option = [
    { value: "Sredniy", label: "sredniy", id: 1 },
    { value: "Vishiy", label: "vishiy", id: 2 },
    { value: "Bachelour", label: "Bachelour", id: 3 },
  ];

  function updateToTypeOption(type) {
    if (type === 1) {
      return "online";
    } else if (type === 2) {
      return "offline";
    }
  }

  function updateIdToStudy(study) {
    if (study === 1) {
      return "sredniy";
    } else if (study === 2) {
      return "vishiy";
    } else if (study === 3) {
      return "bachelour";
    }
  }

  const changeEducation = (value) => {
    setEditData(value.data);
    setMoadalActive((prev) => ({ ...prev, educationEdit: value.modal }));
  };

  return (
    <>
      {loading ? (
        <EducationLoader />
      ) : (
        <>
          <div className="educations">
            <div className="educations__inner">
              <form onSubmit={handleSubmit}>
                <h2 className="educations__title">Educations</h2>
                <p className="educations__text">
                  <span className="educations__textSpan">
                    Freelancers who add their experience are twice as likely to
                    win work.
                  </span>
                  <span className="educations__textSpan">
                    But if you're just starting out, you can still create a
                    greatprofile.
                  </span>
                  <span className="educations__textSpan">
                    Just head on to the next page.
                  </span>
                </p>
                <div className="educations__box">
                  {educationList.map((el, int) => (
                    <div className="educations__content" key={el.id}>
                      <div className="educations__texts">
                        <span className="educations__subtitle">{el.name}</span>
                        <div className="educations__study">
                          <span className="educations__span">
                            {updateIdToStudy(el.typeOfStudy)}
                          </span>
                          <span className="educations__telecommunication">
                            {updateToTypeOption(el.degree)}
                          </span>
                        </div>
                      </div>

                      <div className="educations__icons">
                        <span
                          className="educations__icon--create"
                          type="button"
                          onClick={() =>
                            changeEducation({ data: el, modal: true })
                          }
                        >
                          <Edit name="create-outline" />
                        </span>

                        <span
                          className="educations__icon--delete"
                          onClick={() => deleteEducation(el.id)}
                        >
                          <Trash name="trash-outline" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="educations__wrapper">
                  <button
                    style={{ cursor: "pointer" }}
                    type="button"
                    className="educations__buttonAdd"
                    onClick={() =>
                      setMoadalActive((prev) => ({
                        ...prev,
                        educationAdd: true,
                      }))
                    }
                  >
                    + Add new
                  </button>
                </div>

                <div className="educations__button">
                  <button
                    className="educations__back"
                    type="button"
                    onClick={() => setActiveModal(null)}
                  >
                    Cancel
                  </button>
                  <button className="educations__next" type="submit">
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
          {isMoadalActive.educationAdd && (
            <AddEducations
              updateIdToStudy={updateIdToStudy}
              updateToTypeOption={updateToTypeOption}
              TypeOptions={TypeOptions}
              option={option}
              removeModal={setMoadalActive}
              defaultInputData={{ ...defaultData, type: "add" }}
            />
          )}
          {isMoadalActive.educationEdit && (
            <AddEducations
              updateIdToStudy={updateIdToStudy}
              updateToTypeOption={updateToTypeOption}
              TypeOptions={TypeOptions}
              option={option}
              removeModal={setMoadalActive}
              defaultInputData={{ ...editData, type: "edit" }}
            />
          )}
        </>
      )}
    </>
  );
}

export default Education;
