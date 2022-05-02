import homealone from './set_jpg/21330_prev_ui.png';
import pieces from './set_jpg/lego-icon-26.jpg';
import minifig from './set_jpg/icons8-lego-head-50.png';
import hashtag from './set_jpg/2867908_hashtag_icon.png';
// import triangle from './set_jpg/triangle-right-arrow.svg';
import triangle2 from './set_jpg/g24.png';
// import icons from './set_jpg'
// import images from './images'



function itemCard() {
    // const apple = images[0];
    // console.log(apple.src);
    
    return (
      <div className='card'>
  
        <div className='cardTop'>
          <button className='cardTopButtonLeft'><img src={triangle2} /></button>
          <div className='imgDivTop'>
            <img src={homealone} />
          </div>
          <button className='cardTopButtonRight'><img src={triangle2} /></button>
        </div>
        {/* <hr></hr> */}
  
        <div className='cardBottom'>
          <p className='title'>Home Alone</p>   
          <p className='price'>$249.99</p> 
          <div className='subInfo'>      
            <div className='subInfoItems'>
              {/* <img src={hashtag} />               */}
              <p className='subItemTitle'>Set #</p>
              <p className='subInfoItemsP'>21330</p>        
            </div>
            <hr className='itemSep'></hr>
            <div className='subInfoItems'>
              {/* <img src={pieces} /> */}
              <p className='subItemTitle'>Pieces</p>
              <p className='subInfoItemsP'>3955</p>        
            </div>
            <hr className='itemSep'></hr>
            <div className='subInfoItems'>
              {/* <img src={minifig} /> */}
              <p className='subItemTitle'>Minifigs</p>
              <p className='subInfoItemsP'>5</p>        
            </div>
          </div> 
  
          <div className='heartTag'></div>
        </div> 
  
      </div>
    );
  }
  
  export default itemCard;