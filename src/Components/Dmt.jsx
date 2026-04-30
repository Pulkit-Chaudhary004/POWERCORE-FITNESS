import React from "react";

const Dmt = ({img11,img12,img13,img14, img21,img22,img23,img24}) => {
  return (
    <>
      <div className="container my-5">
      <h1 className="d-flex justify-content-center my-5 text-white">Dynamic Movement Training (DMT)</h1>
        {/* ROW 1 */}
        <div className="row g-4">
          
          <div className="col-md-6 col-lg-3 d-flex justify-content-center border-0">
            <div className="card w-100 h-100 border-0 " style={{ maxWidth: "15rem"}}>
              <img className="card-img-top" src={img11} alt="" style={{height:"160px", objectFit:"cover"}}/>
              <div className="card-body px-0 text-white"style={{backgroundColor:"#a3a39e"}}>
                <p className="card-text text-start ">Dynamic Movement Training uses the body’s natural movement patterns through three-dimensional exercises.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex justify-content-center border-0">
            <div className="card w-100 h-100 border-0" style={{ maxWidth: "15rem"}}>
              <img className="card-img-top" src={img12} alt="" style={{height:"160px", objectFit:"cover"}} />
              <div className="card-body px-0 text-white" style={{backgroundColor:"#a3a39e"}}>
                <p className="card-text text-start">Involve your whole body by challenging your cardiovascular, muscular and neural systems at the same time.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex justify-content-center border-0">
            <div className="card w-100 h-100 border-0" style={{ maxWidth: "15rem"}}>
              <img className="card-img-top" src={img13} alt="" style={{height:"160px", objectFit:"cover"}} />
              <div className="card-body px-0 text-white" style={{backgroundColor:"#a3a39e"}}>
                <p className="card-text text-start">Movements can just use your body weight or be loaded for greater benefit.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex justify-content-center border-0">
            <div className="card w-100 h-100 border-0" style={{ maxWidth: "15rem"}}>
              <img className="card-img-top" src={img14} alt="" style={{height:"160px", objectFit:"cover"}}/>
              <div className="card-body px-0 text-white" style={{backgroundColor:"#a3a39e"}} >
                <p className="card-text text-start">The more dynamically you move, the better you’ll feel and perform.</p>
              </div>
            </div>
          </div>

        </div>

        {/* ROW 2  */}
        <div className="row g-4 my-5">
          
          <div className="col-md-6 col-lg-3 d-flex justify-content-center border-0">
            <div className="card w-100 h-100 border-0" style={{ maxWidth: "15rem"}}>
              <img className="card-img-top" src={img21} alt="" style={{height:"160px", objectFit:"cover"}}/>
              <div className="card-body px-0 text-white" style={{backgroundColor:"#a3a39e"}}>
                <p className="card-text text-start ">Combine dynamic strength, fitness and functional training to exercise three times more effectively.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex justify-content-center border-0">
            <div className="card w-100 h-100 border-0" style={{ maxWidth: "15rem"}}>
              <img className="card-img-top" src={img22} alt="" style={{height:"160px", objectFit:"cover"}} />
              <div className="card-body px-0 text-white" style={{backgroundColor:"#a3a39e"}}>
                <p className="card-text text-start">Improve muscular control, use more energy for accelerated weight loss and build performance in everyday life and sport.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex justify-content-center border-0">
            <div className="card w-100 h-100 border-0" style={{ maxWidth: "15rem"}}>
              <img className="card-img-top" src={img23} alt="" style={{height:"160px", objectFit:"cover"}} />
              <div className="card-body px-0 text-white" style={{backgroundColor:"#a3a39e"}}>
                <p className="card-text text-start">Dynamic movement training is important to help you maintain a healthy body and healthy mind.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex justify-content-center border-0">
            <div className="card w-100 h-100 border-0" style={{ maxWidth: "15rem"}}>
              <img className="card-img-top" src={img24} alt="" style={{height:"160px", objectFit:"cover"}}/>
              <div className="card-body px-0 text-white" style={{backgroundColor:"#a3a39e"}}>
                <p className="card-text text-start">Whatever you want from a workout, make DMT part of your training programme for quicker and more effective results.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Dmt;