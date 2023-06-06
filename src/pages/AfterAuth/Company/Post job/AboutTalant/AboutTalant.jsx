import { MultiSelect } from '@mantine/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { activeDoteAction } from 'reduxToolkit/jobsSlice/JobsSlice';
import '../DescribeJob/DescribeJob.scss';
import './AboutTalant.scss';
function AboutTalant() {
  const [activeLI1, setActiveLi1] = useState(false);
  const [activeLI2, setActiveLi2] = useState(false);
  const [activeLI3, setActiveLi3] = useState(false);

  var dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      activeDoteAction([
        { id: 4, label: 'Terms' },
        { id: 4, type: 'Terms' },
      ]),
    );
  };
  const backPage = e => {
    e.preventDefault();
    dispatch(
      activeDoteAction([
        { id: 2, label: 'Describe the job' },
        { id: 2, type: 'Describe' },
      ]),
    );
  };

  const skills = [
    { id: 1, value: 'Figma', label: 'Figma' },
    { id: 2, value: 'html', label: 'html' },
    { id: 3, value: 'react', label: 'react' },
    { id: 4, value: 'js', label: 'js' },
  ];

  const language = [
    { id: 1, label: 'spanish', value: 'spanish' },
    { id: 2, value: 'russian', label: 'russian' },
    { id: 3, value: 'kazakh', label: 'kazakh' },
    { id: 4, value: 'tatar', label: 'tatar' },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <h2 className="card__title">About the talant</h2>
          <div className="card__select__level">
            <h3 className="card__select-level__title">
              What level of experience should your freelancer have?
            </h3>
            <ul className="card__select-level__selected">
              <li
                onClick={() => setActiveLi1(!activeLI1)}
                className={`${activeLI1 ? "active__li" : ""}  
                 `}
              >
                Junior
              </li>
              <li
                onClick={() => setActiveLi2(!activeLI2)}
                className={`${activeLI2 ? "active__li" : ""}  
                 `}
              >
                Middle
              </li>
              <li
                onClick={() => setActiveLi3(!activeLI3)}
                className={`${activeLI3 ? "active__li" : ""}  
                 `}
              >
                Senior
              </li>
            </ul>
          </div>

          <div className="card__select-skills">
            <h3 className="card__select-skills__title">
              Enter skills needed (optional)
            </h3>
            <MultiSelect
              data={skills}
              className="card__select-skills__selected"
            />
          </div>

          <div className="card__select-language">
            <h3 className="card__select-language__title">
              The language a freelancer should know (optional)
            </h3>
            <MultiSelect
              data={language}
              className="card__select-language__selected"
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
        </div>
      </form>
    </div>
  );
}

export default AboutTalant;
