import { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "../talants/talants.scss";
import classes from "./Jobs.module.scss";
import Job from "../../Company/components/cards/Job";
import Filter from "../../Company/components/filter/Filter";

const Jobs = (props) => {
  const { ControlFilter } = props;
  const [clientJobs, setClientJobs] = useState("best");
  const len = useSelector((state) => state.lenguage.lenguage);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className={classes.jobAdContainer}>
        <div className={classes.jobAd}>
          <div className={classes.search}>
            <input type="text" placeholder="Title, keywords..." />
            <button>
              <HiOutlineSearch size={27} />
            </button>
          </div>
          {ControlFilter ? <ControlFilter /> : ""}
          <div className={classes.companyClientJobs}>
            <Job
              handleStateChange={props.handleStateChange}
              initialState={props.initialState}
            />
            <Job
              handleStateChange={props.handleStateChange}
              initialState={props.initialState}
            />
            <Job
              handleStateChange={props.handleStateChange}
              initialState={props.initialState}
            />
            <Job
              handleStateChange={props.handleStateChange}
              initialState={props.initialState}
            />
            <Job
              handleStateChange={props.handleStateChange}
              initialState={props.initialState}
            />
            <Job
              handleStateChange={props.handleStateChange}
              initialState={props.initialState}
            />
            <Job
              handleStateChange={props.handleStateChange}
              initialState={props.initialState}
            />
          </div>
        </div>
        <Filter />
      </div>
    </>
  );
};

export default Jobs;
