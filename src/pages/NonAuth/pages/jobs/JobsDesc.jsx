import { useEffect, useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import checkImg from '../../../../assets/images/checkImg.png';
import searchIcon from '../../../../assets/images/searchIcon.png';
import classes from './JobsDesc.module.scss';
import jobsData from './jobsData';

function JobsDesc() {
  const [likes, setLikes] = useState([]);
  const [isActive, setIsActive] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilterJobs] = useState(jobs);

  const len = useSelector(state => state.lenguage.lenguage);

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  useEffect(() => {
    const newFilteredJobs = jobs.filter(job => {
      return job.title?.toLocaleLowerCase().includes(searchField);
    });
    setFilterJobs(newFilteredJobs);
  }, [jobs, searchField]);

  const onSearchChange = event => {
    const searchFieldString = event.target.value?.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onClickLike = item => {
    let index = likes.findIndex(x => x === item.id);
    if (index >= 0) likes.splice(index, 1);
    else likes.push(item.id);
    setLikes([...likes]);
  };

  const onClickAccordion = item => {
    let index = isActive.findIndex(x => x === item.id);
    if (index >= 0) isActive.splice(index, 1);
    else isActive.push(item.id);
    setIsActive([...isActive]);
  };

  return (
    <div className={classes.jobsDesc}>
      <div className={`${classes.jobsSearch}`}>
        <div className={classes.jobsSearchForm}>
          <input
            type='text'
            placeholder='Job title, keywords...'
            onChange={onSearchChange}
          />
          <button type='submit'>
            <img src={searchIcon} alt='Search Icon' />
          </button>
        </div>
      </div>
      <div className={classes.jobsCard}>
        {filteredJobs.map((item, index) => (
          <div className={classes.jobsCardItem} key={index} id={index}>
            <div className={classes.jobsCardItemHeader}>
              <Link to={`/${len}/jobAd`}>
                <p className={classes.title}>{item.title}</p>
              </Link>
              <span className={classes.headerVerLine}></span>
              <p className={classes.paymentPerHour}>{item.paymentPerHour}</p>
              <span className={classes.headerVerLine}></span>
              <p className={classes.duration}>{item.duration}</p>
              <span className={classes.headerVerLine}></span>
              <div className={classes.selectLevel}>
                <label htmlFor='level'>Required level:</label>
                <select name='levels' id='levels'>
                  <option value='junior'>Junior</option>
                  <option value='middle'>Middle</option>
                  <option value='senior'>Senior</option>
                </select>
              </div>
              <div
                className={classes.liked}
                onClick={onClickLike.bind(this, item)}
              >
                {likes.findIndex(x => x === item.id) >= 0 ? (
                  <BsHeartFill className={classes.bsheartfill} />
                ) : (
                  <BsHeart className={classes.bsheart} />
                )}
              </div>
            </div>
            <div className={classes.jobsCardHorLine}></div>

            <div
              className={classes.description}
              onClick={onClickAccordion.bind(item.jobDescription)}
            >
              {isActive.findIndex(x => x === item.id) >= 0 ? (
                <>
                  <p className={classes.descContent}>{item.jobDescription}</p>
                  <span className={classes.faChevronDown}>
                    <FaChevronUp />
                  </span>
                </>
              ) : (
                <>
                  <p className={classes.descContent}>
                    {item.jobDescription.substring(0, 300)}
                  </p>
                  <span className={classes.faChevronDown}>
                    <FaChevronDown />
                  </span>
                </>
              )}
            </div>
            <div className={classes.jobsCardHorLine}></div>
            <div className={classes.skills}>
              {item.skills.map((skilItem, index) => (
                <>
                  <p key={index} id={index}>
                    {skilItem}
                  </p>
                  <div className={classes['skills-border']}></div>
                </>
              ))}
            </div>
            <div className={classes.cardItemBottom}>
              <div className={classes.imgCompName}>
                <img
                  src={item.compLogo}
                  alt='Company Logo'
                  className={classes.compImgLogo}
                />
                <div className={classes.compNamecheckImg}>
                  <p>{item.compName}</p>
                  <span>
                    <img src={checkImg} alt='' /> Verified
                  </span>
                </div>
              </div>
              <span className={classes.bottomVerLine}></span>
              <div className={classes.experienceInService}>
                <p>{item.experience}</p>
                <span>In service</span>
              </div>
              <span className={classes.bottomVerLine}></span>
              <div className={classes.completedJobs}>
                <p>{item.completedJobs}</p>
                <span>Completed jobs</span>
              </div>
              <span className={classes.bottomVerLine}></span>
              <div className={classes.paid}>
                <p>{item.paid}</p>
                <span>Paid</span>
              </div>
              <span className={classes.bottomVerLine}></span>
              <div className={classes.postedDay}>
                <span>Posted 1 day ago</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobsDesc;
