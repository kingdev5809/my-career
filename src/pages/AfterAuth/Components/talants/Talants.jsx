import Cart from 'pages/AfterAuth/Freelancer/components/Cart';
import { useEffect, useState } from 'react';
import serach_icon from '../../../../assets/images/Freelancer/serach_inp.svg';
import '../../Freelancer/Freelancer.scss';
// import Fillter from "../Freelancer/components/Fillter";
// import Filter from './components/filter/Filter';
import Round from 'components/Round/Round';
import Filter from 'pages/AfterAuth/Company/components/filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFreelancers } from 'reduxToolkit/extraReducers';
import './talants.scss';

const Talants = ({ ControlFilter }) => {
  const { AllFreelancerData, loading } = useSelector(state => state.resume);
  const [activeControl, setActiveControl] = useState('best-matches');
  const [searched, setSearched] = useState('');
  const [searchedData, setSearchedData] = useState([]);

  const dispatch = useDispatch();
  const search = AllFreelancerData?.filter(item =>
    item.firstName.toLowerCase().includes(searched.toLowerCase()),
  );
  useEffect(() => {
    if (!searched) {
      setSearchedData(AllFreelancerData);
    } else {
      setSearchedData(search);
    }
  }, [AllFreelancerData, searched]);

  useEffect(() => {
    if (!loading) {
      dispatch(getAllFreelancers());
    }
  }, []);

  return (
    <section className='freelancer'>
      <div className='freelancer_container'>
        <div className='freelancer_talants_container'>
          <form className='freelancer_container_outline'>
            <input
              type='text'
              placeholder='Title, keywords'
              className='freelancer_container_outline_inp'
              // onChange={(e)=> handleChange(e)}
              onChange={e => setSearched(e.target.value)}
            />
            <button type='submit' className='freelancer_container_outline_btn'>
              <img src={serach_icon} alt='search icon' />
            </button>
          </form>
          {ControlFilter ? <ControlFilter /> : ''}

          <Cart AllFreelancerData={searchedData} />

          <div className='freelancer_container_round'>
            <Round />
          </div>
        </div>
        <Filter />
      </div>
    </section>
  );
};

export default Talants;
