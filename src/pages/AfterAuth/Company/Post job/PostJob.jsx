import Round from 'components/Round/Round';
import CareerSlider from 'pages/Sign/RegisterFreelancer/CareerSlider/CareerSlider';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import back from '../../../../assets/images/Resume/back.png';
import classes from '../../../Sign/RegisterCompany/RegisterCompany.module.scss';
import AboutTalant from './AboutTalant/AboutTalant';
import DescribeJob from './DescribeJob/DescribeJob';
import Finish from './Finish/Finish';
import './PostJob.scss';
import Terms from './Terms/Terms';
import Title from './Title/Title';

function PostJob() {
  const { activeCard } = useSelector(state => state.jobs);
  const len = useSelector(state => state.lenguage.lenguage);
  const { activeDote } = useSelector(state => state.jobs);

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${len}/my-jobs`);
  };

  const dot = [
    { id: 1, label: 'Title' },
    { id: 2, label: 'Describe the job' },
    { id: 3, label: 'About the talant' },
    { id: 4, label: 'Terms' },
    { id: 5, label: 'Review and post' },
  ];

  const cards = [
    { id: 1, label: <Title />, type: 'Title' },
    { id: 2, label: <DescribeJob />, type: 'Describe the job' },
    { id: 3, label: <AboutTalant />, type: 'About the talant' },
    { id: 4, label: <Terms />, type: 'Terms' },
    { id: 5, label: <Finish />, type: 'Review and post' },
  ];
  return (
    <div>
      <div className='allBackground'>
        <div className='container'>
          <div className='allBackground_inner'>
            <div className='backSign'>
              <button onClick={handleClick} className='backSign_btn'>
                <img src={back} alt='back sign' />
                {t('back')}
              </button>

              <div className='round'>
                <Round />
              </div>
            </div>

            <div className="cards">
            {cards.map((el) => (
                     <div
                        className={`${classes.card_box} ${el.type === activeCard.type ? classes.active : ""}`}
                        key={el.id}
                        style={{ top: el.id < activeCard.id ? "-200%" : el.id === activeCard.id ? "15%" : "200%" }}>
                        {el.label}
                      </div>
              ))}
            </div>

            <div className='career'>
              <CareerSlider
                classNameLine='myCompany__line'
                dot={dot}
                activeDote={activeDote}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
