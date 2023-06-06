import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { activeDoteAction } from 'reduxToolkit/resumeControlsSlice/resumeControls';
import { getRegionsList } from '../../../../reduxToolkit/extraReducers';
import { secondStep } from '../../../../reduxToolkit/frilanserCardSlice/frilanserCardSlice';
import './Photo.scss';
import { createMemoryHistory } from 'history';

function Country() {
  const dispatch = useDispatch();
  const { firstName } = useSelector(
    state => state.frilanserCardSlice.freelancer,
  );
  const freelancer = useSelector(state => state.frilanserCardSlice.freelancer);
  const [userChoice, setUserChoice] = useState([0]);
  const [countryName, setCountryName] = useState(null);
  const [regionName, setRegionName] = useState(null);
  const [userChoice2, setUserChoice2] = useState(0);
  const countryList = useSelector(state => state.resume.countryList);
  const regionsList = useSelector(state => state.resume.regionsList);
  let options = [];

  useEffect(() => {
    dispatch(getRegionsList(userChoice[0]));
  }, [userChoice]);

  let optionsRegion = [];
  for (let i = 0; i < countryList.length; i++) {
    options.push({
      value: [countryList[i].id, countryList.indexOf(countryList[i])],
      label: countryList[i].name,
    });
  }
  for (let i = 0; i < regionsList.length; i++) {
    optionsRegion.push({
      value: [regionsList[i].id, regionsList.indexOf(regionsList[i])],
      label: regionsList[i].name,
    });
  }
  const [data, setData] = useState({
    countryId: '',
    country: '',
    street: '',
  });

  const onCountryChange = choice => {
    if(choice){
     console.log(choice?.value[0])
    }
    setCountryName(choice);
    setUserChoice(choice.value);
    setData({ ...data, countryId: choice.label });
  };

  const onRegionChange = choice => {
    // console.log( 'Region', choice)
    setRegionName(choice);
    setUserChoice2(choice.value);
    setData({ ...data, country: choice.label });
  };

  const handleSubmit = event => {
    localStorage.setItem('country', JSON.stringify(data));
    localStorage.setItem(
      'activDoteAction',
      JSON.stringify([
        { id: 3, label: 'About yourself and skills' },
        { id: 3, type: 'yourself' },
      ]),
    );

    dispatch(secondStep(data));
    dispatch(
      activeDoteAction([
        { id: 3, label: 'About yourself and skills' },
        { id: 3, type: 'yourself' },
      ]),
    );

    event.preventDefault();
  };

  const removePage = event => {
    event.preventDefault();
    dispatch(
      activeDoteAction([
        { id: 1, label: 'Personal information' },
        { id: 1, type: 'photo' },
      ]),
    );
  };
  useEffect(() => {
    if (countryName) {
      setUserChoice(countryName.value[0]);
      localStorage.setItem('countryName', JSON.stringify(countryName));
    }
    if (regionName) {
      localStorage.setItem('regionName', JSON.stringify(regionName));
    }
  }, [countryName, regionName]);

  useEffect(() => {
    var countryName = localStorage.getItem('countryName');
    if (countryName) {
      setCountryName(JSON.parse(countryName));
    }
    var regionName = JSON.parse(localStorage.getItem('regionName'));
    if (regionName) {
      setRegionName(regionName);
    }
    var country = JSON.parse(localStorage.getItem('country'));
    if (country) {
      setData(country);
    }
    var dotAction = JSON.parse(localStorage.getItem('activDoteAction'));
    if (dotAction) {
      dispatch(activeDoteAction(dotAction));
    }
    if (freelancer.address.street === '') {
      var prevCountry = JSON.parse(localStorage.getItem('country'));
      if (prevCountry) {
        dispatch(secondStep(prevCountry));
      }
    }
  }, []);

  const sanitizeInput = value => {
    const sanitizedValue = value.replace(
      /<script.*?<\/script>|<\/?\w+[^>]*>/gi,
      '',
    );
    return sanitizedValue;
  };

  const handleChange = (event, name) => {
    const sanitizedValue = sanitizeInput(event.target.value);
    setData(prev => ({ ...prev, name: sanitizeInput(event.target.value) }));
    setData(sanitizedValue);
  };

  return (
    <div className='countryCard'>
      <div className='country'>
        <form className='country__form' onSubmit={handleSubmit}>
          <h2 className='country__title'>Welcome {firstName}</h2>
          <p className='country__text'>
            Complete your profile to join our global community of freelancers
            and start selling your services to our growing network of
            businesses.
          </p>
          <div className='country__content'>
            <h5 className='country__subtitle'>Living address</h5>
            <div className='country__wrapper'>
              <div className='country__info'>
                <Select
                  classNamePrefix='mySelect'
                  options={options}
                  placeholder='Country*'
                  onChange={onCountryChange}
                  value={countryName}
                />
              </div>
              <div className='country__info'>
                <Select
                  classNamePrefix='mySelect'
                  options={optionsRegion}
                  placeholder='Region*'
                  onChange={onRegionChange}
                  value={regionName}
                />
              </div>
            </div>
            <input
              value={data.street}
              onChange={e =>
                setData(prev => ({
                  ...prev,
                  street: sanitizeInput(e.target.value),
                }))
              }
              className='country__inputStreet'
              type='text'
              placeholder='Street, apartment'
            />
          </div>
          <div className='country__button'>
            <button
              className='country__back'
              type='button'
              onClick={removePage}
            >
              Back
            </button>
            <button className='country__next' type='submit'>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Country;
