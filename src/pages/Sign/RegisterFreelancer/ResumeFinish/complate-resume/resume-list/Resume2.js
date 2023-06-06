import { useSelector } from 'react-redux';

const Resume2 = props => {
  const { loading } = useSelector(state => state.resume);
  const {
    firstName,
    phoneNumber,
    bio,
    experiences,
    email,
    freelancerHobbies,
    defaultuserImage,
    educations,
    freelancerPosition,
    lastName,
    address,
    birthday,
    freelancerLang
  } = props;

  return (
    <>
      <div className='ComplateResume'>
        <div className='resume2_2 resume-watch'>
          <div className='resume2_2-top'>
            <div className='resume2_2-top-left'>
              <div className='resume2_2-top-left-img'>
                <img src={props?.defaultuserImage} alt={props?.firstName} />
              </div>
            </div>

            <div className='resume2_2-top-right'>
              <div className='resume2_2-top-right-fullname'>
                <span className='top-right-fullname'>{props?.firstName}</span>
                <br />
                <span className='top-right-fullname'>{props?.lastName}</span>
                <br />
                <span className='top-right-job'>
                  Frontend developer
                  {/* {FreelancPositions} */}
                </span>
              </div>

              <div className='resume2_2-top-right-contact'>
                <div>
                  <span className='resume2_2-contact-title'>phone:</span>
                  <br />
                  {props?.phoneNumber}
                </div>

                <div>
                  <span className='resume2_2-contact-title'>email:</span>
                  <br />
                  {props?.email}
                </div>

                <div>
                  <span className='resume2_2-contact-title'>adress:</span>
                  <br />
                  <span>
                    {props?.address?.countryName}
                    {'  '}
                    {props?.address?.regionName}
                    {'  '}
                    {props?.address?.home}
                    {props?.address?.street}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ borderRadius: '0 0 20px 20px' }}
            className={'resume2_1'}
          >
            <div className='resume2_1-body'>
              <div className='resume2_1-left bg-grey'>
                <div className='resume2_1-left__block resume2_1-left__block'>
                  <p className='resume2_1-left-contacts__text'>skills</p>
                  {freelancerPosition?.map((item, i) => {
                    return <span key={i + 1}>{item}</span>;
                  })}
                  <span>PhotoShop</span>
                </div>
                <div className='resume2_1-left-contacts'>
                  <div className='resume2_1-left-contacts__texts resume2_1-left__block'>
                    <p className='resume2_1-left-contacts__text'>languages</p>
                    {freelancerLang?.map((item, i) => {
                      return (
                        <span key={i}>
                          {item?.language} - {item?.level}
                        </span>
                      );
                    })}
                  </div>

                  <div className='resume2_1-left-contacts__texts resume2_1-left__block'>
                    <p className='resume2_1-left-contacts__text'>Hobbies</p>
                    {freelancerHobbies?.map((item, i) => {
                      return <li key={i + 1}>{item}</li>;
                    })}
                    <li>Fooball</li>
                  </div>

                  <div className='resume2_1-left-contacts__texts resume2_1-left__block'>
                    <p className='resume2_1-left-contacts__text'>Contacts</p>
                    {freelancerHobbies?.map((item, i) => {
                      return <span key={i + 1}>{item}</span>;
                    })}
                    <span>Murphy_design</span>
                  </div>
                </div>
              </div>

              <div className='resume2_1__body mb-t'>
                <div className='resume2_1__body mb-b'>
                  <p className='resume2_1__body__title'>About me</p>
                  {experiences?.map((item, i) => {
                    return (
                      <span className={'resume2_1__body__bio'} key={i + 1}>
                        {item?.bio}
                      </span>
                    );
                  })}
                  <span className={'resume2_1__body__bio'}>lorem5</span>
                </div>

                <div className='resume2_1__body mb-b'>
                  <p className='resume2_1__body__title'>Education</p>
                  {educations?.map((item, i) => {
                    return (
                      <div key={i} className={'resume2_1__body__block'}>
                        <div className={'resume2_1__body__block__left'}>
                          <h5>{item?.year}</h5>
                          <p>{item?.name}</p>
                        </div>
                        <div className={'resume2_1__body__block__right'}>
                          <h5>{item?.degree}</h5>
                          <p>{item?.description}</p>
                        </div>
                      </div>
                    );
                  })}
                  <div className={'resume2_1__body__block'}>
                    <div className={'resume2_1__body__block__left'}>
                      <h5>2012 - 2014</h5>
                      <p>University name</p>
                    </div>
                    <div className={'resume2_1__body__block__right'}>
                      <h5>bachlouer</h5>
                      <p>lorem3</p>
                    </div>
                  </div>
                </div>

                <div className='resume2_1__body mb-b'>
                  <p className='resume2_1__body__title'>Experience</p>
                  {experiences?.map((item, i) => {
                    return (
                      <div key={i} className={'resume2_1__body__block'}>
                        <div className={'resume2_1__body__block__left'}>
                          <h5>{item?.year}</h5>
                          <p>{item?.name}</p>
                        </div>
                        <div className={'resume2_1__body__block__right'}>
                          <h5>{item?.degree}</h5>
                          <p>{item?.description}</p>
                        </div>
                      </div>
                    );
                  })}
                  <div className={'resume2_1__body__block'}>
                    <div className={'resume2_1__body__block__left'}>
                      <h5>2020 - present</h5>
                      <p>Company name</p>
                    </div>
                    <div className={'resume2_1__body__block__right'}>
                      <h5>Senior UX Designer</h5>
                      <p>lorem5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume2;
