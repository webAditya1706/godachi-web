import { useRef, useEffect } from "react";
import Link from "next/link";
import { IMG_URL } from "../../../config/config";
import { findDOMNode } from "react-dom";
const Default = ({data}) => {
  const ref = useRef(null)
  if(!data)
    return(<></>)
  
  const runSlider = () =>{
    if(ref){
      const $ = window.$;
      const el = findDOMNode(ref.current);
      $(el).slick({
        fade: true,
        speed: 1000,
        dots: false,
        autoplay: true,
        prevArrow: '<button type="button" className="slick-prev"><i className="pe-7s-angle-left"></i></button>',
        nextArrow: '<button type="button" className="slick-next"><i className="pe-7s-angle-right"></i></button>',
        responsive: [{
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true
          }
        }]
      });
    }
  }
  useEffect(()=>{
    runSlider();
  },[ref])
  return (
    <section className="slider-area">
      <div 
        className="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style"
        ref={ref}
      >
        {
          data.media.map((media)=>{
            return(
              <div className="hero-single-slide hero-overlay">
                
                  <a
                    className="hero-slider-item bg-img"
                    data-bg={IMG_URL+media.image}
                    style={{
                      backgroundImage: `url(${IMG_URL+media.image})`
                    }}
                    href={media.url}
                    target="_blank"
                  >
                
                  
                </a>
                
              </div>
            )
          })
        }
       
      </div>
    </section>
  
   );
};

export default Default;
