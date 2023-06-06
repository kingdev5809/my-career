import ExperienceLoader from "components/Skeleton/ExperienceLoader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { experienceDelete, experienceGet } from "reduxToolkit/extraReducers";
import { activeDoteAction } from "reduxToolkit/resumeControlsSlice/resumeControls";
import { ReactComponent as Edit } from "../../../../../../../assets/images/icons/edit.svg";
import { ReactComponent as Trash } from "../../../../../../../assets/images/icons/trash.svg";
import MyWork from "../AddExprience/AddExperience";
import "./style.scss";

const defaultInputData = {
  companyName: "",
  job: "",
  currentWorking: false,
  description: "",
  dateFrom: "",
  dateTo: "",
};
function WorkExperience({ setActiveModal }) {
  const [isMoadalActive, setMoadalActive] = useState({
    experienceAdd: false,
    experienceEdit: false,
  });
  const [editData, setEditData] = useState({});
  const { experiencePostIsSuccess, loading, experienceList } = useSelector(
    (state) => state.resume
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(experienceGet());
  }, [experiencePostIsSuccess]);

  const editExperience = (value) => {
    setEditData(value.data);
    setMoadalActive((prev) => ({ ...prev, experienceEdit: value.modal }));
  };

  // if (loading) {
  //   return <b>Loading...</b>;
  // }

  return (
    <>
      {loading ? (
        <ExperienceLoader />
      ) : (
        <div className="experience">
          <div className="experience__inner">
            <div>
              <h2 className="experience__title">Work Experience</h2>
              <p className="experience__text">
                <span className="experience__textSpan">
                  Freelancers who add their experience are twice as likely to
                  win work.
                </span>
                <span className="experience__textSpan">
                  But if you're just starting out, you can still create a great
                  profile.
                </span>
                <span className="experience__textSpan">
                  Just head on to the next page.
                </span>
              </p>

              <div className="experience__box">
                {experienceList.map((el, int) => (
                  <div className="experience__content" key={el.id}>
                    <div className="experience__texts">
                      <span className="experience__subtitle">
                        {el.companyName}
                      </span>
                      <span className="experience__span">{el.job}</span>
                    </div>

                    <div className="experience__icons">
                      <span
                        className="experience__icon--create"
                        onClick={() =>
                          editExperience({ data: el, modal: true })
                        }
                      >
                        <Edit name="create-outline" />
                      </span>

                      <span
                        className="experience__icon--delete"
                        onClick={() => dispatch(experienceDelete(el.id))}
                      >
                        <Trash name="trash-outline" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="experience__wrapper">
                <button
                  style={{ cursor: "pointer" }}
                  className="experience__buttonAdd"
                  onClick={() =>
                    setMoadalActive((prev) => ({
                      ...prev,
                      experienceAdd: true,
                    }))
                  }
                >
                  + Add new
                </button>
              </div>

              <div className="experience__button">
                <button
                  className="experience__back"
                  type="button"
                  onClick={() => setActiveModal(null)}
                >
                  Back
                </button>
                <button
                  className="experience__next"
                  type="submit"
                  onClick={() => setActiveModal(null)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isMoadalActive.experienceAdd && (
        <MyWork
          removeModal={setMoadalActive}
          defaultData={{ ...defaultInputData, type: "add" }}
        />
      )}

      {isMoadalActive.experienceEdit && (
        <MyWork
          removeModal={setMoadalActive}
          defaultData={{ ...editData, type: "edit" }}
        />
      )}
    </>
  );
}

export default WorkExperience;
