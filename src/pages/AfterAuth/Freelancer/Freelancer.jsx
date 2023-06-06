import Round from "pages/NonAuth/Round";
import Cart from "./components/Cart";
// import FreelancerModal from './components/FreelancerModal';
import "./Freelancer.scss";
import Fillter from "./components/Fillter";
// import { useContext } from 'react';
// import Context from 'components/Context/Context';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "reduxToolkit/extraReducers";
import serach_icon from "../../../assets/images/Freelancer/serach_inp.svg";

const Freelancer = () => {
  const { data } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getAllJobs({
        page: 1,
        size: 10,
      })
    );
  }, []);

  // const [blackHeight, setBlackHeight] = useState(0);

  // useEffect(() => {
  //     if(isActive){
  //     const freelancerWin = document.querySelector(".freelancermodal");
  //     const modal_height = freelancerWin.clientHeight;
  //     console.log(modal_height);
  //     setBlackHeight(modal_height);
  //     }
  // }, [isActive]);

  // const handleSubmit = (e) => {
  //     console.log("object click! ");
  //     e.preventDefault()
  // }

  return (
    <section className="freelancer">
      {/*             
            {
                isActive ? <div className='black-window' style={{"height":blackHeight}} ></div>  : null
            }
             */}
      <div className="freelancer_container">
        <div className="freelancer_talants_container">
          <form className="freelancer_container_outline">
            <input
              type="text"
              placeholder="Title, keywords..."
              className="freelancer_container_outline_inp"
            />
            <button type="submit" className="freelancer_container_outline_btn">
              <img src={serach_icon} alt="search icon" />
            </button>
          </form>
          <Cart />

          <div className="freelancer_container_round">
            <Round />
          </div>
        </div>
        <Fillter />
        {/* {
                <div>
                    <form className='freelancer_container_outline' >
                        <input type="text" placeholder='Title, keywords...' className='freelancer_container_outline_inp' />
                        <button type='submit' className='freelancer_container_outline_btn' ><img src={serach_icon} alt="search icon" /></button>
                    </form>
                    <Cart />
                    <div className='freelancer_container_round'>
                        <Round />
                    </div>
                </div>
                <Fillter />
                {/* {
                    isActive ? <FreelancerModal /> : null
                } */}
      </div>
    </section>
  );
};

export default Freelancer;
