import React, {useEffect, useRef} from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../Navigation';
import "./Carousel.css"
import img from "../../images/carousel.ico"
// import sctplg2 from "../../images/scottpilg.jpg"
// import sctplg from "../../images/scottpilg2.jpg"
//"https://bit.ly/2VpUNYI"

function Carousel() {
    
  const scrollerRef = useRef(null);

  useEffect(()=>{
    if(scrollerRef){
      window.onkeydown = e => {
        if(e.key==="ArrowRight" || e.key==="l") handleScrollButtons(-1);  
        if(e.key==="ArrowLeft" || e.key==="h") handleScrollButtons(1);  
      }

      scrollerRef.current.onmousedown = e => {
        e.preventDefault();
        // console.log(e)
        
        scrollerRef.current.onmousemove = e2 =>{
          //console.log(e2.clientX, e2.screenX, scrollerRef.current.scrollLeft);
          if(e2.movementX<0) scrollerRef.current.scrollLeft+=300;
          if(e2.movementX>0) scrollerRef.current.scrollLeft-=300;
        }

        scrollerRef.current.onmouseup = () =>{
          scrollerRef.current.onmouseup = null;
          scrollerRef.current.onmousemove = null;
        }

      }
    }
  },[])

  const handleScrollButtons = (val) =>{
    // console.log(scrollerRef.current); 
    if(val<0) scrollerRef.current.scrollLeft+= 300;
    if(val>0) scrollerRef.current.scrollLeft-= 300;
  }
    return (
        <div className="Carousel">
            <Helmet>
                <title>Carousel | UI Showcase</title>
                <meta name="description" content="UI Design for carousel | scrollable, draggable, clickable carousel" />
                <link rel="icon" type="image/x-icon" href={img} />
            </Helmet>
            <Navigation subhead="carousel"/>
            <div className="carousel_container">
              <div className="scroll_buttons previous" onClick={()=>handleScrollButtons(+1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                </div>
                <div ref={scrollerRef} className="scroller">
                    <div className="carousel_img" loading="lazy" draggable="false"><img src="https://bit.ly/2VpUNYI" alt="scott-pilgrim" /></div>
                    <div className="carousel_img" loading="lazy" draggable="false"><img src="https://bit.ly/2Vq987T" alt="scott-pilgrim" /></div>
                    <div className="carousel_img" loading="lazy" draggable="false"><img src="https://bit.ly/3fz06MJ" alt="scott-pilgrim" /></div>
                    <div className="carousel_img" loading="lazy" draggable="false"><img src="https://bit.ly/3inP3I4" alt="scott-pilgrim" /></div>
                    <div className="carousel_img" loading="lazy" draggable="false"><img src="https://bit.ly/3xsa3lg" alt="scott-pilgrim" /></div>
                    <div className="carousel_img" loading="lazy" draggable="false"><img src="https://bit.ly/3yqOL8Y" alt="scott-pilgrim" /></div>
                </div>
                <div className="scroll_buttons next" onClick={()=>handleScrollButtons(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                </div>
                <div className="scroll_bar"></div>
            </div>
        </div>
    )
}

export default Carousel
