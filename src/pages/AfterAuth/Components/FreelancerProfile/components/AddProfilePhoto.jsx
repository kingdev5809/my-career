import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { countryList, photoUpload } from "reduxToolkit/resumeSlice/ResumeSlice";
import Select from 'react-select';
// import image from "../../../../assets/images/FreelancerPortfolio/woman.svg";
import './AddProfilePhoto.scss';
// import { useContext } from "react";
// import Context from "components/Context/Context";
const AddProfilePhoto = ({ setActiveModal }) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });

  const AddIsPortfolioFunc = () => {};

  const [uploaded, setUploaded] = useState(false);
  const firstName = useRef('');
  const lastName = useRef('');
  const email = useRef('');
  const price = useRef('');
  const hiddenFileInput = useRef(null);
  const dispatch = useDispatch();

  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  let fileUploaded;
  const handleChange = event => {
    fileUploaded = event.target.files[0];
    setUploaded(event.target.files[0]);
  };
  const handleSubmit = e => {
    let formdatas = new FormData();
    formdatas.append('FirstName', firstName.current.value);
    formdatas.append('LastName', lastName.current.value);
    formdatas.append('Email', email.current.value);
    formdatas.append('Price', price.current.value);
    formdatas.append('Image', fileUploaded);
    // dispatch(countryList());
    // dispatch(photoUpload(formdatas));
    e.preventDefault();
  };

  // 	const [userChoice, setUserChoice] = useState([0, 0]);

  // const positionList = useSelector(state => state.resume.positionList);
  //     	let options = [];
  // let skills = [];
  // for (let i = 0; i < 5; i++) {
  // 	options.push({ value: [positionList[i].id, positionList.indexOf(positionList[i])], label: positionList[i].name });
  // 	skills.push(positionList[i].skills);
  // }

  //     let skillsList = [];
  //     for (let i = 0; i < skills[userChoice[1]].length; i++) {
  // 	skillsList.push({ value: skills[userChoice[1]][i].id, label: skills[userChoice[1]][i].name });
  // }

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
            <h5>Firstname</h5>
            <input
              onChange={e => setData({ ...data, firstName: e.target.value })}
              type='text'
              value={data.firstName}
              placeholder='Write in your first name'
              required
            />
          </div>
          <div>
            <h5>Lastname</h5>
            <input
              onChange={e => setData({ ...data, lastName: e.target.value })}
              type='text'
              value={data.lastName}
              placeholder='Write in your last name'
              required
            />
          </div>
          <div>
            <h5>Position</h5>
            <Select
              className=''
              classNamePrefix='mySelect__control'
              options={[{ value: 'asd', placeholder: 'asdsd' }]}
              placeholder='Positions'
              onChange={e => setData({ ...data, position: e.target.value })}
            />
          </div>
          <div>
            <h5>Price ($/hour)</h5>
            <input
              onChange={e => setData({ ...data, price: e.target.value })}
              type='text'
              value={data.price}
              placeholder='Digits only'
              required
            />
          </div>
        </div>
        <div className='btn-group-addprofile'>
          <button className='cancel_btn' onClick={() => setActiveModal(null)}>
            Cancel
          </button>
          <button className='save_btn'>Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddProfilePhoto;
