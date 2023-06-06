import whatsUpIcon from '../img/whatsap.svg';

const Resume5 = ({
  phoneNumber,
  bio,
  experiences,
  email,
  address,
  freelancerContact,
  freelancerHobbies,
  defaultuserImage,
  educations,
  freelancerPosition,
  firstName,
  lastName,
  languageNames
}) => {
  return (
    <>
      <div className='ComplateResume'>
        <div className='resume2_5 resume-watch'>
          <div className='resume2_5__top-contents'>
            <div className='resume2_5-top-left'>
              <div className='resume2_5-top-left-name'>
                <span className='resume2_5-firstname'>{firstName} </span>
                <br />
                <span className='resume2_5-lastname'>{lastName} </span>
                <p className='resume2_5-job'>Frontend devoloper</p>
                <div className='resume2_5-top-left-contact'>
                  <div className='resume2_5-top-left-contact-item'>
                    <p>Phone</p>
                    <span>{phoneNumber}</span>
                  </div>

                  <div className='resume2_5-top-left-contact-item'>
                    <p>E-mail</p>
                    <span>{email}</span>
                  </div>

                  <div className='resume2_5-top-left-contact-item'>
                    <p>Address</p>
                    <span>{address?.street}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='resume2_5-top-right'>
              <div className='resume2_5-user-img'>
                <img src={defaultuserImage} alt={firstName} />
              </div>
            </div>
          </div>

          <div className='resume2_5-bottom'>
            <div className='resume2_5-bottom-left'>
              <div className='resume2_5-bottom-left-wrapper'>
                <div className='resume2_5-bottom-title res2_5_color1'>
                  Skills
                </div>
                <ul className='resume2_5-bottom-text-div'>
                  <li>
                    <p>Figma</p>
                  </li>
                  <li>
                    <p>Figma</p>
                  </li>
                  <li>
                    <p>Figma</p>
                  </li>
                </ul>
                <div className='resume2_5-bottom-title res2_5_color1'>
                  education
                </div>
                <ul className='resume2_5-bottom-text-div'>
                  {educations?.map((item, i) => {
                    return (
                      <li className='resume2_5-bottom-text' key={i + 1}>
                        <span className='resume2_5-year'>
                          {item?.dateFrom?.substring(0, 4)} -{' '}
                          {item?.dateTo?.substring(0, 4)}
                        </span>
                        {/* <b>{item?.degree} </b> */}
                        <h4>Bakalavr</h4>

                        <span>{item?.name}</span>
                      </li>
                    );
                  })}
                </ul>

                <div className='resume2_5-bottom-title res2_5_color1'>
                  experience
                </div>

                {experiences.map((item, i) => (
                  <div className='resume2_5-bottom-text-div' key={i + 1}>
                    <div className='resume2_5-bottom-text'>
                      <span className='resume2_5-year'>
                        {item?.dateFrom?.substring(0, 4)} -{' '}
                        {item?.dateTo?.substring(0, 4)}
                      </span>
                      <h4>{item?.job}</h4>

                      <div>
                        <span>{item?.companyName}</span>
                      </div>
                      <p>{item?.description}</p>
                    </div>
                  </div>
                ))}

                <div className='resume2_5-bottom-title res2_5_color1'>
                  Languages
                </div>
                <ul className='resume2_5-bottom-circles'>
                  {/*  */}
                  <li
                    className='resume2_5-bottom-circle'
                    style={{
                      background: ` conic-gradient(rgb(255, 201, 5) 50%, #ededed 0deg)`,
                    }}
                  >
                    <span>French</span>
                  </li>
                  <li
                    className='resume2_5-bottom-circle'
                    style={{
                      background:
                        ' conic-gradient(rgb(255, 201, 5) 70%, #ededed 0deg)',
                    }}
                  >
                    <span>English</span>8
                  </li>
                  <li
                    className='resume2_5-bottom-circle'
                    style={{
                      background:
                        ' conic-gradient(rgb(255, 201, 5) 40%, #ededed 0deg)',
                    }}
                  >
                    <span>Russia</span>
                  </li>
                  <li
                    className='resume2_5-bottom-circle'
                    style={{
                      background:
                        ' conic-gradient(rgb(255, 201, 5) 10%, #ededed 0deg)',
                    }}
                  >
                    <span>Uzbek</span>
                  </li>
                </ul>

                <div className='resume2_5-bottom-title res2_5_color1'>
                  Contact
                </div>

                <div className='resume2_5-bottom-text-div'>
                  <div className='resume2_5-bottom-text-contact'>
                    <div className='resume2_5-bottom-text-contact-item'>
                      <img src={whatsUpIcon} alt='whatsup' />
                      <p>kingdev7008</p>
                    </div>
                    <div className='resume2_5-bottom-text-contact-item'>
                      <img src={whatsUpIcon} alt='whatsup' />
                      <p>kingdev7008</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='resume2_5-bottom-right'>
              <div className='resume2_5-bottom-right-wrapper'>
                <div className='resume2_5-bottom-title res2_5_color2'>
                  About me
                </div>
                <div className='resume2_5-bottom-right-text'>
                  <p>{bio}</p>
                </div>

                <div className='resume2_5-bottom-title res2_5_color2'>
                  hobbies
                </div>
                <ul className='resume2_5-bottom-right-hobbies'>
                  {freelancerHobbies?.map((item, i) => {
                    return (
                      <li key={i + 1}>
                        <p>{item.name}</p>
                        <p>React</p>
                      </li>
                    );
                  })}
                  <li>
                    <p>React</p>
                  </li>
                  <li>
                    <p>React</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume5;
