import { useEffect, useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllFreelancers } from 'reduxToolkit/extraReducers';
import user_img from '../../../../assets/images/Freelancer/girl_img.svg';
import location from '../../../../assets/images/Freelancer/location.svg';
import ticked from '../../../../assets/images/Freelancer/ticked.svg';
import classes from '../../../NonAuth/pages/jobs/JobsDesc.module.scss';
import './Cart.scss';
import Colasible from './Colasible';
const Cart = ({ AllFreelancerData }) => {
  const [likes, setLikes] = useState([]);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.resume);
  useEffect(() => {
    if (!loading) {
      dispatch(getAllFreelancers());
    }
  }, []);

  const onClickLike = item => {
    let index = likes.findIndex(x => x === item.id);
    if (index >= 0) likes.splice(index, 1);
    else likes.push(item.id);
    setLikes([...likes]);
  };

  console.log(AllFreelancerData);

  return (
    <div className='freelancer_cart'>
      {AllFreelancerData?.map(freelancer => (
        <div className='freelancer_cart-item' key={freelancer.id}>
          <ul className='freelancer_cart_list'>
            <li className='freelancer_cart_list_item freelancer_cart_list_item1'>
              <img src={user_img} alt='' />
              <div>
                <h4 className='freelancer_cart_list_item_title'>
                  <span>{freelancer.firstName}</span>
                  <img src={ticked} alt='' />
                </h4>
                <p className='freelancer_cart_list_item_info'>
                  Web-design UI/UX aaaaaaa
                </p>
              </div>
            </li>

            <li className='freelancer_cart_list_item '>
              <div>
                <h4 className='freelancer_cart_list_item_title'> 80% </h4>
                <progress id='file' max='100' value='70'>
                  70%
                </progress>
                <p className='freelancer_cart_list_item_info'> Job Success </p>
              </div>
            </li>

            <li className='freelancer_cart_list_item '>
              <div>
                <h4 className='freelancer_cart_list_item_title'> 5$ </h4>
                <p className='freelancer_cart_list_item_info'> Hourly </p>
              </div>
            </li>

            <li className='freelancer_cart_list_item '>
              <div>
                <h4 className='freelancer_cart_list_item_title'> 324 </h4>
                <p className='freelancer_cart_list_item_info'>
                  {' '}
                  Completed jobs{' '}
                </p>
              </div>
            </li>
            {pathname.slice(4) === 'talants' && (
              <div className='freelancer_cart_list_wrapper'>
                <div
                  className={classes.liked}
                  onClick={onClickLike.bind(this, freelancer)}
                >
                  {likes.findIndex(x => x === freelancer.id) >= 0 ? (
                    <BsHeartFill className={classes.bsheartfill} />
                  ) : (
                    <BsHeart className={classes.bsheart} />
                  )}
                </div>
              </div>
            )}
          </ul>

          <Colasible text={freelancer.bio} freelance={freelancer.lastName} />

          <div className='freelancer_cart_skill'>
            <div className='freelancer_cart_skill_skills'>
              <h4>Figma</h4>
              <h4>html</h4>
              <h4>Adobe PhotoShop</h4>
            </div>

            <div className='freelancer_cart_skill_level'>
              <p>
                Level: <span>Junior</span>{' '}
              </p>
            </div>
          </div>

          <div className='freelancer_cart_location'>
            <h4>
              <span>3 years </span> of experience
            </h4>
            <h4>
              {' '}
              <img src={location} alt='' /> Tashkent, Uzbekistan
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

//       <Colasible />

//       <div className='freelancer_cart_skill'>
//         <div className='freelancer_cart_skill_skills'>
//           <h4>Figma</h4>
//           <h4>html</h4>
//           <h4>Adobe PhotoShop</h4>
//         </div>

//         <div className='freelancer_cart_skill_level'>
//           <p>
//             Level: <span>Middle</span>{' '}
//           </p>
//         </div>
//       </div>

//       <div className='freelancer_cart_location'>
//         <h4>
//           <span>3 years </span> of experience
//         </h4>
//         <h4>
//           {' '}
//           <img src={location} alt='' /> Tashkent, Uzbekistan
//         </h4>
//       </div>
//     </div>
//   );
// };

export default Cart;
