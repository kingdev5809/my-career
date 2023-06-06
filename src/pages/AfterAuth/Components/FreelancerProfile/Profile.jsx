import CompanyCard from "pages/AfterAuth/Company/components/CompanyCard";
import Fvideo from "pages/AfterAuth/Freelancer/components/Fvideo";
import PortfolioCard from "pages/AfterAuth/Freelancer/components/PortfolioCard";
import location from "../../../../assets/images/Freelancer/location.svg";
import ticked from "../../../../assets/images/Freelancer/ticked.svg";
import { useEffect, useState } from "react";
import { ReactComponent as Telegram } from "../../../../assets/images/FreelancerPortfolio/telegram.svg";
import { ReactComponent as Instagram } from "../../../../assets/images/FreelancerPortfolio/instagramm.svg";
import { ReactComponent as Twitter } from "../../../../assets/images/FreelancerPortfolio/twitter.svg";
import { ReactComponent as Facebook } from "../../../../assets/images/FreelancerPortfolio/facebook.svg";
import { ReactComponent as Github } from "../../../../assets/images/FreelancerPortfolio/github.svg";
import { ReactComponent as Whatsapp } from "../../../../assets/images/FreelancerPortfolio/whatsapp.svg";
import React from "react";
import "./Profile.scss";
import { useSelector, useDispatch } from "react-redux";

import { getFreelancer } from "reduxToolkit/extraReducers";
import { useTranslation } from "react-i18next";
import { UserCircle } from "tabler-icons-react";
import AddProfilePhoto from "./components/AddProfilePhoto";
import Available from "./components/Available";
import AddLanguage from "./components/AddLanguage";
import AddContacts from "./components/AddContacts";
import AddLocation from "./components/AddLocation";
import AddPortfolioProject from "./components/AddPortfolioProject";
import Education from "./components/Educations/Education";
import WorkExperience from "./components/Experience/Experience/WorkExperience";

const FreelancerProfile = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState(null);
  const [profileData, setProfileData] = useState([]);

  const { data } = useSelector((state) => state.freelance);
  const info = JSON.parse(localStorage.getItem("info"));

  useEffect(() => {
    dispatch(getFreelancer());
    if (data) {
      setProfileData(data);
    } else if (info) {
      setProfileData(info);
    } else {
      return;
    }
  }, []);

  const handleSetData = (data) => {
    setActiveModal(data.modal);
    console.log(activeModal);
  };

  return (
    <>
      <div className="freelancer_container">
        <div className="userfreelancermodal">
          <div className="userfreelancermodal_left">
            <ul className="userfreelancermodal_left_list">
              <li className="userfreelancermodal_left_list_item userfreelancermodal_left_list_item1">
                {profileData?.freelancerImage ? (
                  <img
                    src={`http://localhost:5000/staticfiles/${profileData?.freelancerImage}`}
                    className="userfreelancermodal_left_list_item1_img"
                    style={{ borderRadius: "50%" }}
                    alt="user photos"
                  />
                ) : (
                  <UserCircle className="userfreelancermodal_left_list_item1_img" />
                )}
                <div>
                  <h4>
                    {profileData?.firstName} <img src={ticked} alt="" />{" "}
                  </h4>
                  <p style={{ fontSize: "22px" }}>
                    {profileData?.freelancerPosition?.name}
                    <span>Middle</span>{" "}
                  </p>
                </div>
              </li>
              <li className="userfreelancermodal_left_list_item userfreelancermodal_left_list_item2">
                <h4 className="userfreelancermodal_left_list_item_title">
                  {" "}
                  80%{" "}
                </h4>
                <progress id="file" max="100" value="70">
                  {" "}
                  70%{" "}
                </progress>
                <p className="userfreelancermodal_left_list_item_info">
                  {t("job_success")}{" "}
                </p>
              </li>
              <li className="userfreelancermodal_left_list_item">
                <h4 className="userfreelancermodal_left_list_item_title">
                  {" "}
                  5${" "}
                </h4>
                <p className="userfreelancermodal_left_list_item_info">
                  {" "}
                  {t("hourly")}{" "}
                </p>
              </li>
              <li className="userfreelancermodal_left_list_item">
                <div
                  className="userfreelancermodal_left_list_item_wrapper"
                  onClick={() => handleSetData({ modal: "addProfilePhoto" })}
                ></div>
              </li>
            </ul>

            <p className="userfreelancermodal_left_info">
              {profileData?.description}
            </p>
            <Fvideo />

            <h3 className="userfreelancermodal_left_title">
              {t("portfolio")} (13)
              <div
                className="userfreelancermodal_left_title_wrapper"
                onClick={() => handleSetData({ modal: "addPortfolioProject" })}
              ></div>{" "}
            </h3>
            <PortfolioCard />
            <h3 className="userfreelancermodal_left_title">
              {t("work_history")}
            </h3>
            <ul className="userfreelancermodal_left_wrapper">
              <li className="userfreelancermodal_left_wrapper_item">
                {t("completed")} (<span>324</span>)
              </li>
              <li className="userfreelancermodal_left_wrapper_item">
                {t("in_progress")}(<span>3</span>)
              </li>
            </ul>
            <CompanyCard />
          </div>
          <div className="userfreelancermodal_center_border"></div>
          <div className="userfreelancermodal_right">
            <ul className="userfreelancermodal_right_list">
              <li className="userfreelancermodal_right_list_item userfreelancermodal_right_list_item1">
                <h4>$5936</h4>
                <p>{t("total_earnings")}</p>
              </li>
              <li className="userfreelancermodal_right_list_item userfreelancermodal_right_list_item1">
                <h4>324</h4>
                <p>{t("total_jobs")}</p>
              </li>
              <li className="userfreelancermodal_right_list_item ">
                <h4>1027</h4>
                <p>{t("total_jobs")}</p>
              </li>
            </ul>

            <ul className="userfreelancermodal_right_mainlist">
              <li className="userfreelancermodal_right_mainlist_item">
                <h4>
                  {" "}
                  {t("available")}{" "}
                  <div
                    className="userfreelancermodal_right_mainlist_item_wrapper"
                    onClick={() => handleSetData({ modal: "available" })}
                  ></div>{" "}
                </h4>
                <span>
                  {t("more_than")} 10 {t("hrs/week")}{" "}
                </span>
              </li>

              <li className="userfreelancermodal_right_mainlist_item">
                <h4>{t("verifications")}</h4>
                <h5>
                  ID: <span>Verified</span> <img src={ticked} alt="" />
                </h5>
              </li>

              <li className="userfreelancermodal_right_mainlist_item">
                <h4>
                  {" "}
                  {t("language")}{" "}
                  <div
                    className="userfreelancermodal_right_mainlist_item_wrapper"
                    onClick={() => handleSetData({ modal: "addLanguage" })}
                  ></div>{" "}
                </h4>
                <div>
                  {profileData?.userLanguages?.map((e) => (
                    <>
                      <h5 className="userfreelancermodal_right_mainlist_item_h5">
                        {" "}
                        {e.name}: <span>{e.level} </span>{" "}
                      </h5>
                    </>
                  ))}
                </div>
              </li>
              <li className="userfreelancermodal_right_mainlist_item">
                <h4>
                  {" "}
                  {t("educations")}{" "}
                  <div
                    className="userfreelancermodal_right_mainlist_item_wrapper"
                    onClick={() => handleSetData({ modal: "addEducation" })}
                  >
                    {" "}
                  </div>{" "}
                </h4>
                <div>
                  {profileData?.educations?.map((e) => (
                    <>
                      <h5>
                        {e.schoolName} ({e.educationDegree}) {e.typeStudy}{" "}
                      </h5>
                      <h5>
                        {t("location")}: <h6>{e.location}</h6>
                      </h5>
                    </>
                  ))}
                </div>
              </li>

              <li className="userfreelancermodal_right_mainlist_item">
                <h4>
                  {" "}
                  {t("experience")}{" "}
                  <div
                    className="userfreelancermodal_right_mainlist_item_wrapper"
                    onClick={() => handleSetData({ modal: "addExperience" })}
                  ></div>{" "}
                </h4>
                <div>
                  {profileData?.experiences?.map((e) => (
                    <>
                      <h5>
                        {e.companyName}: <span>{e.job}</span>
                      </h5>
                    </>
                  ))}
                </div>
              </li>
              <li className="userfreelancermodal_right_mainlist_item">
                <h4>
                  {t("skills")}{" "}
                  <div className="userfreelancermodal_right_mainlist_item_wrapper"></div>{" "}
                </h4>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    maxWidth: "350px",
                    flexWrap: "wrap",
                  }}
                >
                  {profileData?.freelancerPosition?.freelancerSkills?.map(
                    (skill) => (
                      <b key={skill.id}>{skill.name}</b>
                    )
                  )}
                </div>
              </li>

              <li className="userfreelancermodal_right_mainlist_item">
                <h4>
                  {t("contacts")}{" "}
                  <div
                    className="userfreelancermodal_right_mainlist_item_wrapper"
                    onClick={() => handleSetData({ modal: "addContact" })}
                  ></div>{" "}
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {profileData?.freelancerContact?.instagram === null ? null : (
                    <a
                      href={`${profileData?.freelancerContact?.instagram}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <h5>
                        <Instagram /> Instagram
                      </h5>
                    </a>
                  )}
                  {profileData?.freelancerContact?.telegram === null ? null : (
                    <a
                      href={`${profileData?.freelancerContact?.telegram}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <h5>
                        <Telegram /> Telegram
                      </h5>
                    </a>
                  )}
                  {profileData?.freelancerContact?.facebook === null ? null : (
                    <a
                      href={`${profileData?.freelancerContact?.facebook}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <h5>
                        <Facebook /> Facebook
                      </h5>
                    </a>
                  )}
                  {profileData?.freelancerContact?.gitHub === null ? null : (
                    <a
                      href={`${profileData?.freelancerContact?.gitHub}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <h5>
                        <Github /> Github
                      </h5>{" "}
                    </a>
                  )}
                  {profileData?.freelancerContact?.watsApp === null ? null : (
                    <a
                      href={`${profileData?.freelancerContact?.watsApp}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <h5>
                        <Whatsapp /> WhatsApp
                      </h5>{" "}
                    </a>
                  )}
                  {profileData?.freelancerContact?.twitter === null ? null : (
                    <a
                      href={`${profileData?.freelancerContact?.twitter}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <h5>
                        <Twitter /> Twitter
                      </h5>{" "}
                    </a>
                  )}
                </div>
              </li>

              <li className="userfreelancermodal_right_mainlist_item">
                <h4>
                  {t("living_address")}{" "}
                  <div
                    className="userfreelancermodal_right_mainlist_item_wrapper"
                    onClick={() => handleSetData({ modal: "addLocation" })}
                  ></div>{" "}
                </h4>
                <h5>
                  <img src={location} alt="" />{" "}
                  <h6 style={{ marginLeft: "10px" }}>
                    {profileData?.address?.regionName},{" "}
                    {profileData?.address?.countryName}
                  </h6>{" "}
                </h5>
              </li>

              <li className="userfreelancermodal_right_mainlist_item">
                <h4>{t("member_since")}</h4>
                <span>{localStorage.getItem("member_since")}</span>
                <button className="userfreelancermodal_right_mainlist_item_btn">
                  Resume
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <AddProfilePhoto /> */}
      {activeModal ? (
        <div className="profile_modals">
          <div className="modal">
            {activeModal === "addProfilePhoto" ? (
              <AddProfilePhoto setActiveModal={setActiveModal} />
            ) : activeModal === "addEducation" ? (
              <Education setActiveModal={setActiveModal} />
            ) : activeModal === "available" ? (
              <Available setActiveModal={setActiveModal} />
            ) : activeModal === "addLanguage" ? (
              <AddLanguage setActiveModal={setActiveModal} />
            ) : activeModal === "addPortfolioProject" ? (
              <AddPortfolioProject setActiveModal={setActiveModal} />
            ) : activeModal === "addContact" ? (
              <AddContacts setActiveModal={setActiveModal} />
            ) : activeModal === "addLocation" ? (
              <AddLocation setActiveModal={setActiveModal} />
            ) : activeModal === "addExperience" ? (
              <WorkExperience setActiveModal={setActiveModal} />
            ) : (
              ""
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FreelancerProfile;
