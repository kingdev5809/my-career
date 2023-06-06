import React, { useEffect, useRef } from "react";
import classes from "./Background.module.scss";
import logo from "../../assets/images/text.png";
import Round from "./Round";
import MyCareer from "./MyCareer";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import { useState } from "react";
import classesNav from "./Navigation.module.scss";
import Talants from "./pages/talants/Talants";
import CircleSlider from "./CircleSlider";
import Jobs from "./pages/jobs/Jobs";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import backgroundImg from "../../assets//images/home-header-bg.png";

function Background() {
  const [count, setCount] = useState(1);
  const [innerWidth, setInnerWidth] = useState(null);
  const [customTransition, setCustomTransition] = useState({
    transform: "translateX(0)",
    width: "75px",
  });
  const len = useSelector((state) => state.lenguage.lenguage);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    const handleWindowResize = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  let step1 = false,
    step2 = false,
    step3 = false,
    step4 = false,
    step5 = false,
    step6 = false,
    step7 = false,
    step8 = false;

  switch (count) {
    case 1:
      step1 = true;
      break;
    case 2:
      step2 = true;
      break;
    case 3:
      step3 = true;
      break;
    case 4:
      step4 = true;
      break;
    case 5:
      step5 = true;
      break;
    case 6:
      step6 = true;
      break;

    case 7:
      step7 = true;
      break;

    case 8:
      step8 = true;
      break;

    default:
      step1 = true;
  }

  useEffect(() => {
    if (innerWidth < 1350) {
      if (step1) {
        setCustomTransition({ transform: "translateX(0)", width: "50px" });
      } else if (step5) {
        setCustomTransition({ transform: "translateX(66px)", width: "60px" });
      } else if (step6) {
        setCustomTransition({ transform: "translateX(142px)", width: "44px" });
      } else if (step7) {
        setCustomTransition({ transform: "translateX(200px)", width: "75px" });
      } else if (step8) {
        setCustomTransition({ transform: "translateX(292px)", width: "88px" });
      }
    }
  }, [count]);

  useEffect(() => {
    if (innerWidth > 1350) {
      if (step1) {
        setCustomTransition({ transform: "translateX(0)", width: "60px" });
      } else if (step5) {
        setCustomTransition({ transform: "translateX(80px)", width: "70px" });
      } else if (step6) {
        setCustomTransition({ transform: "translateX(169px)", width: "50px" });
      } else if (step7) {
        setCustomTransition({ transform: "translateX(235px)", width: "90px" });
      } else if (step8) {
        setCustomTransition({ transform: "translateX(343px)", width: "105px" });
      }
    }
  }, [count]);

  return (
    <div className={classes.background}>
      <div className={classes.background__container}>
        <div className={`${classesNav.menu} container-vw`}>
          <div className={classesNav.menu__container}>
            <img
              className={classesNav.backgroundImg}
              src={backgroundImg}
              alt="blue circle"
            />
            <div className={classesNav.menu__inner}>
              <img
                className={classesNav.automative}
                src={logo}
                alt="Automative logo"
              />
              <ul className={classesNav.menu__links}>
                <li
                  className={
                    step1 || step2 || step3 || step4
                      ? classesNav.active
                      : classesNav.menu__link
                  }
                  onClick={() => setCount(1)}
                >
                  Home
                </li>
                <li
                  className={step5 ? classesNav.active : classesNav.menu__link}
                  onClick={() => setCount(5)}
                >
                  Talants
                </li>
                <li
                  className={step6 ? classesNav.active : classesNav.menu__link}
                  onClick={() => setCount(6)}
                >
                  Jobs
                </li>
                <li
                  className={step7 ? classesNav.active : classesNav.menu__link}
                  onClick={() => setCount(7)}
                >
                  About us
                </li>
                <li
                  className={step8 ? classesNav.active : classesNav.menu__link}
                  onClick={() => setCount(8)}
                >
                  Contact us
                </li>
                <div
                  className={classesNav.active_line}
                  style={customTransition}
                />
              </ul>
              <div className={classesNav.menu__buttons}>
                <Link to={`/${len}/login`}>
                  <button className={classesNav.menu__login}>Log in</button>
                </Link>
                <Link to={`/${len}/sign-up`}>
                  <button className={classesNav.menu__signup}>Sign up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classesNav.mainSection}>
          {step1 && <MyCareer />}
          {step2 && <Page2 />}
          {step3 && <Page3 />}
          {step4 && <Page4 />}
          {step5 && <Talants />}
          {step6 && <Jobs />}
          {step7 && <div className={classes.nonAuthContact}>{<Aboutus />}</div>}
          {step8 && <Contactus />}
        </div>

        <CircleSlider
          step1={step1}
          step2={step2}
          step3={step3}
          step4={step4}
          step5={step5}
          step6={step6}
          step7={step7}
          step8={step8}
          setCount={setCount}
        />
        <div className={classes.roundContainer}>
          <div
            className={
              step1
                ? classes.round1
                : step2
                ? classes.round2
                : step3
                ? classes.round3
                : step4
                ? classes.round4
                : classes.round1
            }
          >
            <div className={classes.scale}>
              <Round />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
