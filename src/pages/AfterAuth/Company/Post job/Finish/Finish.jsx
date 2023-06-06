import React from "react";
import "./Finish.scss";
import project_file from "../../../../../assets/images/Company/project_file.png";
import { useDispatch, useSelector } from "react-redux";
import { activeDoteAction } from "reduxToolkit/jobsSlice/JobsSlice";
import { useNavigate } from "react-router";
function Finish() {
  const len = useSelector((state) => state.lenguage.lenguage);
  var dispatch = useDispatch()
  var navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate(`/${len}/my-jobs`)
  }
  const backPage = (e) => {
    e.preventDefault();
    dispatch(
      activeDoteAction([
        { id: 4, label: "Terms" },
        { id: 4, type: "Terms" },
      ])
    );
  };
  return (
    <div className="finish_main">
      <h2>Review and post</h2>
      <br />
      <form onSubmit={handleSubmit}>
      <div className="titles">
        <h3>Title</h3>

        <p>Name your job posting</p>
        <span>Business Card Design</span>

        <br />
        <div>
          <p>Category</p>
          <span>Design and art</span>
        </div>
        <br />
        <hr />
        <br />
        <h2 style={{ marginBottom: "8px" }}>Describe the job</h2>
        <p>Description</p>
        <span>
          Sit lacinia feugiat commodo hac tristique. Non lobortis in eu a,
          mattis ullamcorper nullam. Facilisi ipsum mattis hac urna scelerisque
          nunc id. Aliquam nullam turpis magna placerat. Amet aliquam eget
          dignissim odio leo, in adipiscing. Aliquet mattis in tortor, eros.
          <span className="description_span">
            site:<a>https://hipsdontlies.com/</a>
          </span>
        </span>
        <div className="aditional_projects">
          <p>Additional project files</p>
          <span>
            <img src={project_file} />
          </span>
          <p></p>
        </div>
        <hr />
        <br />
        <h3>About the talant</h3>
        <div className="select_levels">
          <p>Required level</p>
          <span>Junior</span>
        </div>
        <div className="select_skills">
          <p>Skills needed</p>
          <div className="skills">
            <div>Figma</div>
            <div>html</div>
            <div>UX/UI</div>
          </div>
        </div>
        <div className="select_skills">
          <p>The language a freelancer should know</p>
          <div className="skills">
            <div>English-C1</div>
            <div>Russian - C2</div>
          </div>
        </div>
        <hr style={{ margin: "20px 0px" }} />
        <div>
          <h3>Terms</h3>
          <div className="terms">
            <div>
              <p>Price</p>
              <span>5 %</span>
            </div>
            <div>
              {" "}
              <p>Dedline</p>
              <span>1 day</span>
            </div>
          </div>
          <hr style={{ margin: "20px 0px" }} />
        </div>
      </div>
      <div className="buttons">
        <button className="backBtn" onClick={backPage}>
          Edit
        </button>
        <button type="submit" className="nextBtn">
          Save
        </button>
      </div>
      </form>
    </div>
  );
}

export default Finish;
