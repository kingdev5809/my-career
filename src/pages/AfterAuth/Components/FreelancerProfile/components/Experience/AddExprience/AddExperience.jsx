import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { experienceEdit, experiencePost } from 'reduxToolkit/extraReducers';
import './style.scss';
function MyWork({ removeModal, defaultData }) {
  const {
    companyName,
    job,
    currentWorking,
    description,
    dateFrom,
    dateTo,
    type,
    id,
  } = defaultData;

  const dispatch = useDispatch();

  const [data, setData] = useState({
    companyName,
    job,
    dateFrom,
    dateTo,
    description,
    currentWorking,
  })

  const handleClick = e => {
    e.preventDefault();
    if (type === 'add') {
      removeModal(prev => ({ ...prev, experienceAdd: false }));
      dispatch(experiencePost(data));
    } else {
      dispatch(experienceEdit({ data, id }));
      removeModal(false);
    }
  };

  const changePage = e => {
    e.preventDefault();
    removeModal(false);
  };

  const sanitizeInput = value => {
    const sanitizedValue = value.replace(
      /<script.*?<\/script>|<\/?\w+[^>]*>/gi,
      '',
    );
    return sanitizedValue;
  };

  const handleChange = (event, name) => {
    const sanitizedValue = sanitizeInput(event.target.value);
    if (name == 'location') {
      setData(prev => ({
        ...prev,
        location: sanitizeInput(event.target.value),
      }));
    } else if (name == 'name') {
      setData(prev => ({ ...prev, name: sanitizeInput(event.target.value) }));
    }
    setData(sanitizedValue);
  };

  return (
    <div className='mywork'>
      <div className='mywork__inner'>
        <form onSubmit={handleClick}>
          <h2 className='mywork__text'>Work experience</h2>
          <div className='mywork__content'>
            <input
              className='mywork__input'
              type='text'
              placeholder='Company name'
              value={data.companyName}
              onChange={e =>
                setData(prev => ({
                  ...prev,
                  companyName: sanitizeInput(e.target.value),
                }))
              }
              required
            />
          </div>

          <div className='mywork__content'>
            <input
              className='mywork__input'
              type='text'
              placeholder='Job'
              value={data.job}
              onChange={e =>
                setData(prev => ({
                  ...prev,
                  job: sanitizeInput(e.target.value),
                }))
              }
              required
            />
          </div>

          <div className='mywork__checkbox'>
            <input
              className='mywork__inputCheckbox'
              type='checkbox'
              id='checkbox'
              checked={data.currentWorking}
              onChange={() =>
                setData(prev => ({
                  ...prev,
                  currentWorking: !prev.currentWorking,
                }))
              }
            />
            <label className='mywork__labelCheckbox' htmlFor='checkbox'>
              I am currently working in this role
            </label>
          </div>

          <div className='mywork__wrapper'>
            <div className='mywork__wrapperDate'>
              <label className='mywork__label' htmlFor='data'>
                Date from
              </label>
              <input
                value={data.dateFrom ? data.dateFrom.slice(0, 10) : ''}
                className='mywork__inputDate'
                type='date'
                id='data'
                data-date-format='YYYY:MMMM:DD'
                onChange={e =>
                  setData(prev => ({
                    ...prev,
                    dateFrom: new Date(e.target.value).toISOString(),
                  }))
                }
                required
              />
            </div>

            <div className='mywork__wrapperDate'>
              <label className='mywork__label' htmlFor='time'>
                To
              </label>
              {data.currentWorking ? (
                <input
                  value={''}
                  disabled={true}
                  className='mywork__inputDate'
                  type='date'
                  id='time'
                  data-date-format='YYYY:MMMM:DD'
                  onChange={e =>
                    setData(prev => ({
                      ...prev,
                      dateTo: new Date(e.target.value).toISOString(),
                    }))
                  }
                />
              ) : (
                <input
                  disabled={false}
                  value={
                    data.dateTo
                      ? data.dateTo.slice(0, 10)
                      : '' && data.dateFrom.value < data.dateTo.value
                      ? ''
                      : data.dateTo
                  }
                  className='mywork__inputDate'
                  type='date'
                  id='time'
                  data-date-format='YYYY:MMMM:DD'
                  onChange={e =>
                    setData(prev => ({
                      ...prev,
                      dateTo: new Date(e.target.value).toISOString(),
                    }))
                  }
                  required
                />
              )}
            </div>
          </div>

          <div className='mywork__descriptionWrapper'>
            <textarea
              className='mywork__description'
              placeholder='Description'
              value={data.description}
              onChange={e =>
                setData(prev => ({
                  ...prev,
                  description: sanitizeInput(e.target.value),
                }))
              }
            ></textarea>
          </div>

          <div className='mywork__button'>
            <button type='button' className='mywork__back' onClick={changePage}>
              Cancel
            </button>
            <button type='submit' className='mywork__next'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyWork;
