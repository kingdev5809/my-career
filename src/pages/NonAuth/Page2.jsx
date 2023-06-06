import business2 from '../../assets/images/business_page2.png';
import searchIcon from '../../assets/images/searchIcon.png';
import classes from './Page2.module.scss';

function Page2() {
  return (
    <div className={classes.page2Box}>
      <div className='container-vw'>
        <div className={classes.page2BoxContainer}>
          <div className={classes.page2BoxInner}>
            <div className={classes.busines2Img}>
              <img src={business2} alt='business environment' />
            </div>
            <div className={classes.searchTalants}>
              <h2>Search talants!</h2>
              <p>
                Ipsum harum assumenda in eum vel eveniet numquam, cumque vero
                vitae enim cupiditate deserunt eligendi officia modi
                consectetur.
              </p>
              <form action='submit'>
                <div className={classes.page2Search}>
                  <input type='text' placeholder='Job title, keywords...' />
                  <button type='submit'>
                    <img src={searchIcon} alt='search Icon' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
