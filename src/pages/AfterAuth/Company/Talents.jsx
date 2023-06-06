import { useEffect, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import classes from './Talents.module.scss';
import Freelancer from './components/cards/Freelancer';
import Filter from './components/filter/Filter';

const Talents = props => {
  const [clientJobs, setClientJobs] = useState('best');
  const len = useSelector(state => state.lenguage.lenguage);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className={classes.jobAdContainer}>
        <div className={classes.jobAd}>
          <div className={classes.search}>
            <input type='text' placeholder='Title, keywords' />
            <button>
              <HiOutlineSearch size={18} />
            </button>
          </div>
          <div className={classes.sort}>
            <ul className={classes.menu__links}>
              <li
                className={
                  clientJobs === 'best' ? classes.active : classes.menu__link
                }
                onClick={() => setClientJobs('best')}
              >
                Best matches
              </li>
              <li
                className={
                  clientJobs === 'recent' ? classes.active : classes.menu__link
                }
                onClick={() => setClientJobs('recent')}
              >
                Recent
              </li>
              <li
                className={
                  clientJobs === 'saved' ? classes.active : classes.menu__link
                }
                onClick={() => setClientJobs('saved')}
              >
                Saved
              </li>
            </ul>
          </div>
          <div className={classes.jobAdProposals}>
            <Freelancer
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

export default Talents;
