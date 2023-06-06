import whatsUpIcon from '../img/whatsap.svg';
const Resume4 = ({
  phoneNumber,
  bio,
  experiences,
  email,
  address,
  freelancerContact,
  defaultuserImage,
  educations,
  freelancerPosition,
  firstName,
  lastName,
  freelancerLang
}) => {
  console.log(phoneNumber);
  return (
    <>
      <div className='ComplateResume'>
        <div className='resume4 resume-watch'>
          <div className='resume4-left'>
            <div className='resume4-left-user-pic'>
              <img src={defaultuserImage} alt={firstName} />
            </div>
            <div className='resume4-left-contact'>
              <div className='resume4-left-contact-title'>phone</div>
              <p className='resume4-left-contact-text'>{phoneNumber}</p>

              <div className='resume4-left-contact-title'>email</div>
              <p className='resume4-left-contact-text'>{email}</p>

              <div className='resume4-left-contact-title'>website</div>
              <p className='resume4-left-contact-text'>
                {freelancerContact?.webSite}
              </p>

              <div className='resume4-left-contact-title'>adsress</div>
              <p className='resume4-left-contact-text'>
                {address?.countryName} {address?.regionName} {address?.home}
                {address?.street}
              </p>
            </div>
            <div className='resume4-left-info'>
              <div className='resume4_title-l r4lt'>Skills</div>
              <div className='resume4-left-info-class'>
                {freelancerPosition?.map((item, i) => {
                  return (
                    <div className='resume4-left-info-class-item' key={i + 1}>
                      <p className='skills-text'>{item.name}</p>
                      <p className='skills-level' />
                    </div>
                  );
                })}
                <div className='resume4-left-info-class-item'>
                  <p className='text'>React</p>
                </div>
                <div className='resume4-left-info-class-item'>
                  <p className='text'>Node JS</p>
                </div>
                <div className='resume4-left-info-class-item'>
                  <p className='text'>Redux</p>
                </div>
              </div>
            </div>

            <div className='resume4-left-info'>
              <div className='resume4_title-l r4lt'>Languages</div>
              <div className='resume4-left-info-class'>
                {freelancerLang?.map((lang) => (
                  <div className='resume4-left-info-class-item'>
                    <p className='text'>{lang.language} - {lang.level}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='resume4-left-info'>
              <div className='resume4_title-l r4lt'>Hobbies</div>
              <div className='resume4-left-info-class'>
                <div className='resume4-left-info-class-item'>
                  <p className='text'>Football </p>
                </div>
                <div className='resume4-left-info-class-item'>
                  <p className='text'>Football </p>
                </div>
                <div className='resume4-left-info-class-item'>
                  <p className='text'>Football </p>
                </div>
              </div>
            </div>

            <div className='resume4-left-info'>
              <div className='resume4_title-l r4lt '>Contact</div>
              <div className='resume4-left-info-class'>
                <div className='resume4-left-info-class-item contact-info'>
                  <img src={whatsUpIcon} alt='' />
                  <p className='text'>Abdurashid.7008 </p>
                </div>
                <div className='resume4-left-info-class-item contact-info'>
                  <img src={whatsUpIcon} alt='' />
                  <p className='text'>Abdurashid.7008 </p>
                </div>
                <div className='resume4-left-info-class-item contact-info'>
                  <img src={whatsUpIcon} alt='' />
                  <p className='text'>Abdurashid.7008 </p>
                </div>
              </div>
            </div>
          </div>

          <div className='resume4-right'>
            <div className='resume4-right-name'>
              <div className='resume4-right-user-name'>
                {firstName} {lastName}
              </div>
              <div className='resume4-right-user-title'>PROFFESIONAL TITLE</div>
            </div>

            <div className='resume4-all-about-user'>
              <div className='resume4-right-user-about'>
                <h3 className='resume4_title-l r4rt'>about me</h3>

                <p>{bio}</p>
              </div>
              {/* education */}
              <div className='resume4-right-user-works'>
                <h3 className='resume4_title-l r4rt'>Education</h3>

                {educations.map((item, i) => (
                  <div className='resume4-right-user-job'>
                    <div className='user-experience-year'>
                      {item?.dateFrom?.substring(0, 4)} -{' '}
                      {item?.dateTo?.substring(0, 4)}
                    </div>
                    <div className='user-experience-text'>
                      {/* <h3>{item.degree}</h3>  */}
                      <h3>Bakalavr</h3>
                      <span>{item.name}</span>
                      <p>{item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* experience */}
              <div className='resume4-right-user-works'>
                <h3 className='resume4_title-l r4rt'>Experience</h3>
                {experiences?.map((item, i) => {
                  return (
                    <div className='resume4-right-user-job' key={i + 1}>
                      <div className='user-experience-year'>
                        {item?.dateFrom?.substring(0, 4)} -{' '}
                        {item?.dateTo?.substring(0, 4)}
                      </div>
                      <div className='user-experience-text'>
                        <h3>{item?.job}</h3>
                        <span>{item?.companyName}</span>
                        <p>{item?.description}</p>
                      </div>
                    </div>
                  );
                })}
                <div className='resume4-right-user-job'>
                  <div className='user-experience-year'>2012 - 2022</div>
                  <div className='user-experience-text'>
                    <h3>Frontend</h3>
                    <span>Google</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi sed assumenda perferendis maxime ducimus doloribus
                      quia doloremque voluptatum incidunt neque.
                    </p>
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

export default Resume4;
