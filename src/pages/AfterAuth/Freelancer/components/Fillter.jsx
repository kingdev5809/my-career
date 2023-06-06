import { useState } from 'react';
import { ReactComponent as Arrow } from '../../../../assets/images/Freelancer/filter_arrow.svg';
import './Fillter.scss';
// import { MultiSelect } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryList } from 'reduxToolkit/extraReducers';
import { filterData } from 'reduxToolkit/jobsSlice/JobsSlice';

// import "bootstrap/dist/css/bootstrap.min.css"

const Fillter = () => {
  const products = useSelector(state => state.jobs);
  const dispatch = useDispatch();
  const countryList = useSelector(state => state.resume.countryList);

  var options = [];
  for (let i = 0; i < countryList.length; i++) {
    options.push({
      value: [countryList[i].id, countryList.indexOf(countryList[i])],
      label: countryList[i].name,
    });
  }

  useEffect(() => {
    dispatch(getCountryList());
  }, []);

  const [data, setData] = useState([
    { value: 'react', label: 'React' },
    { value: 'figma', label: 'Figma' },
    { value: 'Html', label: 'Html' },
    { value: 'Adobe PhotoShop', label: 'Adobe PhotoShop' },
  ]);

  const formSubmit = e => {
    e.preventDefault();
    const {
      priceFrom,
      priceTo,
      paymentAmount,
      levelFrom,
      levelTo,
      verified,
      region,
      completedJob,
      skills,
    } = e.target;

    const filter = {
      priceFrom: priceFrom.value || 0,
      priceTo: priceTo.value,
      paymentAmount: paymentAmount.value,
      levelFrom: levelFrom.value,
      levelTo: levelTo.value,
      verified: verified.checked,
      region: region.value.split(','),
      completedJob: completedJob.value,
      skills: skills.value.split(','),
    };
    dispatch(filterData(filter));
  };

  return (
    <div>
      <form className='filter' onSubmit={formSubmit}>
        <h2 className='filter_title'> Filter </h2>
        <h3 className='filter_text'> Payment amount </h3>
        <div className='filter_from'>
          <div className='filter_from_left'>
            <h3 style={{ fontSize: '40px' }}>From</h3>
            <input type='number' placeholder='10$' min='0' name='priceFrom' />
          </div>
          <div className='filter_from_right'>
            <h3>To</h3>
            <input type='number' placeholder='20$' min='0' name='priceTo' />
          </div>
        </div>
        <h3 className='filter_text'> Payment amount </h3>
        <input
          type='number'
          className='filter_job_success'
          max={100}
          min={0}
          placeholder='More than 80%'
          name='paymentAmount'
        />
        <h3 className='filter_text'>Required level </h3>

        <div className='filter_from'>
          <div className='filter_from_left'>
            <h3>From</h3>
            <div className='filter_from_main'>
              <select name='levelFrom'>
                <option value='junior'>Junior</option>
                <option value='middle'>Middle</option>
                <option value='senior'>Senior</option>
                <option value='team_lead'>Team Lead</option>
              </select>
              <Arrow />
            </div>
          </div>

          <div className='filter_from_right'>
            <h3>To</h3>
            <div className='filter_from_main'>
              <select name='levelTo'>
                <option value='junior'>Junior</option>
                <option value='middle'>Middle</option>
                <option value='senior'>Senior</option>
                <option value='team_lead'>Team Lead</option>
              </select>
              <Arrow />
            </div>
          </div>
        </div>

        <div className='filter_verify'>
          <input type='checkbox' name='verified' />
          <h3 className='filter_verify_text' style={{ fontSize: '16px' }}>
            Verified employee
          </h3>
        </div>

        <h3 className='filter_text'>Region</h3>
        <MultiSelect data={options} placeholder='Select Region' name='region' />

        <h3 className='filter_text'>Completed jobs (minimum)</h3>

        <input
          type='number'
          className='filter_job_success'
          placeholder='10'
          name='completedJob'
        />

        <h3 className='filter_text'>Required Skills</h3>

        <MultiSelect
          data={data}
          placeholder='Select items'
          name='skills'
          searchable
          creatable
          getCreateLabel={query => `+ Create ${query}`}
          onCreate={query => {
            const item = { value: query, label: query };
            setData(current => [...current, item]);
            return item;
          }}
        />

        <div className='apply_filter'>
          <button type='submit'>Apply Filter</button>
        </div>
      </form>
    </div>
  );
};

export default Fillter;

