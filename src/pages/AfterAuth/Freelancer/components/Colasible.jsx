import { useState } from 'react';
import arrow from '../../../../assets/images/header/down_arrow.svg';
import './Colasible.scss';
const Colasible = ({ text , freelance}) => {
  const [anime, setAnime] = useState(false);

  return (
    <div>
      <div className={`colasible ${anime ? 'colasible1' : null}`}>
        <p className='colasible_info'>{text}</p>
        <div onClick={() => setAnime(!anime)} className='colasible_wrapper'>
          <img src={arrow} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Colasible;
