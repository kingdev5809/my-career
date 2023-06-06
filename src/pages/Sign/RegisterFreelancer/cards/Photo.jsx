import { useEffect, useRef, useState } from 'react';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryList } from 'reduxToolkit/extraReducers';
import { firstStep } from 'reduxToolkit/frilanserCardSlice/frilanserCardSlice';
import { activeDoteAction } from 'reduxToolkit/resumeControlsSlice/resumeControls';
import './Photo.scss';

function Photo() {
  const freelancer = useSelector(state => state.frilanserCardSlice.freelancer);
  const hiddenFileInput = useRef();
  const [uploaded, setUploaded] = useState('');
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });

  useEffect(() => {
    dispatch(getCountryList());
  }, [handleSubmit]);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    setUploaded(event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(firstStep(data));
    localStorage.setItem('photo', JSON.stringify(data));
    localStorage.setItem(
      'activDoteAction',
      JSON.stringify([
        { id: 2, label: 'Address' },
        { id: 2, type: 'country' },
      ]),
    );
    dispatch(
      activeDoteAction([
        { id: 2, label: 'Address' },
        { id: 2, type: 'country' },
      ]),
    );
  };
  useEffect(() => {
    if (freelancer.firstName === '') {
      var prevData = JSON.parse(localStorage.getItem('photo'));
      if (prevData) {
        dispatch(firstStep(prevData));
      }
    }
    var dotAction = JSON.parse(localStorage.getItem('activDoteAction'));
    if (dotAction) {
      dispatch(activeDoteAction(dotAction));
    }
    var photo = JSON.parse(localStorage.getItem('photo'));
    if (photo) {
      setData(photo);
    }
  }, []);
  return (
    <div className='photoCard'>
      {!uploaded && (
        <div onClick={handleClick} className='imageUpload'>
          <div className={'imageUpload__inside'}>
            <div className='imageUp' />
            <h3 className='title'>Add your profile photo</h3>
          </div>
        </div>
      )}
      {uploaded && (
        <div onClick={handleClick} className='imageUpload'>
          <div className='imageUp'>
            <img
              className='uploadedImage'
              src={URL.createObjectURL(uploaded)}
              alt='uploaded images'
            />
          </div>
          <h3 className='title'>Change your profile photo</h3>
        </div>
      )}
      <input
        type='file'
        accept='.png, .jpg, .jpeg'
        onChange={handleChange}
        style={{ display: 'none' }}
        ref={hiddenFileInput}
      />
      <form onSubmit={handleSubmit} method='post'>
        <div className='inputBox'>
          <div>
            <h5>Firstname*</h5>
            <input
              onChange={e => setData({ ...data, firstName: e.target.value })}
              type='text'
              value={data.firstName}
              placeholder='Write in your first name'
              required
            />
          </div>
          <div>
            <h5>Lastname*</h5>
            <input
              onChange={e => setData({ ...data, lastName: e.target.value })}
              type='text'
              value={data.lastName}
              placeholder='Write in your last name'
              required
            />
          </div>
          <div>
            <h5>E-mail*</h5>
            <input
              onChange={e => setData({ ...data, email: e.target.value })}
              type='email'
              value={data.email}
              placeholder='Abcdefg1234@inbox.com'
              required
            />
          </div>
          <div>
            <h5>Phone Number*</h5>
            <InputMask
              onChange={e =>
                setData({
                  ...data,
                  phoneNumber: e.target.value.match(/[0-9]/g).join(''),
                })
              }
              value={data.phoneNumber}
              mask='+998 (99)-999-99-99'
              placeholder='+XXX (XX) XXX-XX-XX'
              required
            />
          </div>
        </div>
        <button className='next_btn_photoCart'>Next</button>
      </form>
    </div>
  );
}

export default Photo;
