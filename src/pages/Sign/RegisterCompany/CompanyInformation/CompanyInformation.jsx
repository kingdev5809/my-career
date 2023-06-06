import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InputMask from 'react-input-mask';
import { useDispatch } from 'react-redux';
import { activeDoteAction } from 'reduxToolkit/companyRegister/companyRegister';
import { addUser } from 'reduxToolkit/companyRegister/companyRegisterActions';
import './CompanyInformation.scss';

export const CompanyInformation = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleValues = ({ type, value }) => {
    setUser(prev => ({ ...prev, [type]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      activeDoteAction([
        { id: 2, label: 'Company' },
        { id: 2, type: 'Company' },
      ]),
    );
    dispatch(addUser(user));
  };

  return (
    <>
      <div className='photoCard'>
        <div className='companyInformation__top'>
          <h2>{t('welcome')}</h2>
          <p>
            {t(
              'Complete your profile to join our global community of freelancers and start selling your services to our growing network of businesses.',
            )}
          </p>
        </div>
        <form onSubmit={handleSubmit} method='post'>
          <div className='inputBox'>
            <div>
              <h5>{t('Firstname*')}</h5>
              <input
                type='text'
                value={user.firstName}
                onChange={e =>
                  handleValues({ type: 'firstName', value: e.target.value })
                }
                placeholder='Write in your firstname'
                required
              />
            </div>
            <div>
              <h5>{t('Lastname*')}</h5>
              <input
                value={user.lastName}
                onChange={e =>
                  handleValues({ type: 'lastName', value: e.target.value })
                }
                type='text'
                placeholder='Write your lastname'
                required
              />
            </div>
            <div>
              <h5>{t('E-mail*')}</h5>
              <input
                value={user.email}
                onChange={e =>
                  handleValues({ type: 'email', value: e.target.value })
                }
                type='email'
                placeholder='Abcdefg1234@inbox.com'
                required
              />
            </div>
            <div>
              <h5>{t('Phonenumber')}</h5>
              <InputMask
                onChange={e =>
                  handleValues({ type: 'phoneNumber', value: e.target.value })
                }
                value={user.phoneNumber}
                mask='+998 (99)-999-99-99'
                placeholder='+XXX (XX) XXX-XX-XX'
                required
              />
            </div>
          </div>
          <button className='next_btn_photoCart'>{t('Next')}</button>
        </form>
      </div>
    </>
  );
};
