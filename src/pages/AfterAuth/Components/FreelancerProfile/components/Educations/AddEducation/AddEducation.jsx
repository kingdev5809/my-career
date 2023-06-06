import { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { educationEdit, educationPost } from "reduxToolkit/extraReducers";
import "./AddEducation.scss";

function AddEducations({
  removeModal,
  defaultInputData,
  TypeOptions,
  option,
  updateIdToStudy,
  updateToTypeOption,
}) {
  const {
    name,
    degree,
    typeOfStudy,
    location,
    currentStudy,
    dateFrom,
    dateTo,
    type,
    id,
  } = defaultInputData;

  const dispatch = useDispatch();

  const [data, setData] = useState({
    name,
    degree,
    typeOfStudy,
    location,
    dateFrom,
    dateTo,
    currentStudy,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (type === "add") {
      dispatch(educationPost(data));
      removeModal((prev) => ({ ...prev, educationAdd: false }));
    } else {
      dispatch(educationEdit({ id, data }));
      removeModal(false);
    }
  };

  const sanitizeInput = (value) => {
    const sanitizedValue = value.replace(
      /<script.*?<\/script>|<\/?\w+[^>]*>/gi,
      ""
    );
    return sanitizedValue;
  };

  return (
    <div className="addEducations">
      <div className="addEducations__inner">
        <h2 className="addEducations__title">Add Education History</h2>

        <form onSubmit={submitHandler}>
          <div className="addEducations__content">
            <input
              className="addEducations__inputName"
              type="text"
              placeholder="School name"
              value={data.name}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  name: sanitizeInput(e.target.value),
                }))
              }
              required
            />
          </div>

          <div className="addEducations__content">
            <Select
              placeholder={"Select degree"}
              options={option}
              required
              onChange={(e) => setData((prev) => ({ ...prev, degree: e.id }))}
            />
          </div>
          <br />

          <div className="addEducations__content">
            <Select
              placeholder={"Type of study"}
              options={TypeOptions}
              required
              onChange={(e) =>
                setData((prev) => ({ ...prev, typeOfStudy: e.id }))
              }
            />
          </div>
          <br />
          <div className="addEducations__content">
            <input
              className="addEducations__inputLocation"
              type="text"
              placeholder="Location of school"
              value={data.location}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  location: sanitizeInput(e.target.value),
                }))
              }
              required
            />
          </div>

          <div className="addEducations__wrapper">
            <div className="addEducations__wrapperDate">
              <label className="addEducations__label" htmlFor="data">
                Date from
              </label>
              <input
                value={data.dateFrom ? data.dateFrom.slice(0, 10) : ""}
                className="addEducations__inputDate"
                type="date"
                id="data"
                data-date-format="YYYY:MMMM:DD"
                required
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    dateFrom: new Date(e.target.value).toISOString(),
                  }))
                }
              />
            </div>

            <div className="addEducations__wrapperDate">
              <label className="addEducations__label" htmlFor="time">
                To
              </label>
              {data.currentStudy ? (
                <input
                  disabled={true}
                  className="addEducations__inputDate"
                  value={""}
                  type="date"
                  data-date-format="YYYY:MMMM:DD"
                  id="time"
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      dateTo: new Date(e.target.value).toISOString(),
                    }))
                  }
                />
              ) : (
                <input
                  disabled={false}
                  value={
                    data.dateTo
                      ? data.dateTo.slice(0, 10)
                      : "" && data.dateFrom.value < data.dateTo.value
                      ? ""
                      : data.dateTo
                  }
                  className="addEducations__inputDate"
                  type="date"
                  id="time"
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      dateTo: new Date(e.target.value).toISOString(),
                    }))
                  }
                  required
                  data-date-format="YYYY:MMMM:DD"
                />
              )}
            </div>
          </div>

          <div className="addEducations__checkboxWrapper">
            <div className="addEducations__checkbox">
              <input
                className="addEducations__inputCheckbox"
                type="checkbox"
                id="checkbox"
                checked={data.currentStudy}
                onChange={() =>
                  setData((prev) => ({
                    ...prev,
                    currentStudy: !prev.currentStudy,
                  }))
                }
              />
              <label
                className="addEducations__labelCheckbox"
                htmlFor="checkbox"
              >
                I currently attend here
              </label>
            </div>

            <div className="addEducations__button">
              <button
                className="addEducations__back"
                type="button"
                onClick={() => removeModal(false)}
              >
                Cancel
              </button>
              <button className="addEducations__next" type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEducations;
