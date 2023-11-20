import Link from "next/link";
import { IMG_URL } from "../../../config/config";

const Default = ({data}) => {
   if(!data)
    return(<></>)
   return (
      <section className="feature-product section-padding">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  {/* section title start */}
                  <div className="section-title text-center">
                     <h2 className="title">{data.title}</h2>
                     <p className="sub-title">{data.sub_title}</p>
                  </div>
                  {/* section title start */}
               </div>
            </div>
         </div>
         
         <div className="banner-statistics-area newArrivalSection">
            <div className="container">
               <div className="row row-20 mtn-20">
               <div className="col-sm-4">
                  <div className="col-sm-12">
                     <figure className="banner-statistics mt-20">
                     <a href={data.media[0].url}>
                        <img src={IMG_URL+ data.media[0].image} alt="product banner" 
                        className="new-arrival-img-1" />
                     </a>
                     </figure>
                  </div>
                  <div className="col-sm-12">
                     <figure className="banner-statistics mt-20">
                     <a href={data.media[1].url}>
                        <img src={IMG_URL+ data.media[1].image} alt="product banner" 
                        className="new-arrival-img-2" />
                     </a>
                     
                     </figure>
                  </div>
               </div>
               <div className="col-sm-4">
                  <div className="col-sm-12">
                     <figure className="banner-statistics mt-20">
                     <a href={data.media[2].url}>
                        <img
                           src={IMG_URL+ data.media[2].image}
                           alt="product banner"
                           style={{ height: 381, marginTop: "-4px" }} 
                           className="new-arrival-img-3"
                        />
                     </a>
                     </figure>
                  </div>
               </div>
               <div className="col-sm-4">
                  <div className="col-sm-12">
                     <figure className="banner-statistics mt-20">
                     <a href={data.media[3].url}>
                        <img src={IMG_URL+ data.media[3].image} alt="product banner"  
                        className="new-arrival-img-4"/>
                     </a>
                     </figure>
                  </div>
                  <div className="col-sm-12">
                     <figure className="banner-statistics mt-20">
                     <a href={data.media[4].url}>
                        <img src={IMG_URL+ data.media[4].image} alt="product banner" 
                        className="new-arrival-img-5" />
                     </a>
                     </figure>
                  </div>
               </div>
               </div>
            </div>
         </div>
      </section>

   );
};

export default Default;
