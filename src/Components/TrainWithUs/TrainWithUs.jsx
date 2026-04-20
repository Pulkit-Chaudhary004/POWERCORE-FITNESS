import React from "react";
import trainWithUs1 from "./images/trainWithUs1.jpg";
import Dmt from "../Dmt" 
import image11 from "./images/image11.jpg"  
import image12 from "./images/image12.jpg"
import image13 from "./images/image13.jpg"
import image14 from "./images/image14.jpg"
import image21 from "./images/image21.jpg"
import image22 from "./images/image22.jpg"
import image23 from "./images/image23.jpg"
import image24 from "./images/image24.jpg"
import freestyle from "./images/freestyle.jpg"
import freestyle2 from "./images/freestyle2.jpg"

const TrainWithUs = () => {
  return (
    <>
      {/* HERO IMAGE */}
      <div className="container-fluid px-0" style={{ marginTop: "8vh" }}>
        <div className="row g-0">
          <div className="col-12">
            <div
              style={{
                height: "45vh",
                width: "100%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Image */}
              <img
                src={trainWithUs1}
                alt=""
                className="h-100 w-100"
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />

              {/* TEXT ON IMAGE */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <h1 className="fw-bold">Train With Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLLSPY NAVBAR */}

      {/* NAVBAR */}
      {/* <nav
        style={{
          position: "sticky",
          top: 0,
          height: "70px",
          background: "orange",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          fontWeight: "bold"
        }}
      >
        MAIN NAVBAR
      </nav> */}

      {/* SECOND NAVBAR */}
      <nav style={{
          position: "sticky",
          top:"70px",
          marginTop: "4vh", // 👈
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
          zIndex: 999,
          backgroundColor:"white"
        }}
      >
        <a href="#section1" style={{ textDecoration: "none", color: "black" }}>
          Freestyle
        </a>
        <a href="#section2" style={{ textDecoration: "none", color: "black" }}>
          Freestyle Group Training
        </a>
        <a href="#section3" style={{ textDecoration: "none", color: "black" }}>
          Group Exercise
        </a>
        <a href="#section4" style={{ textDecoration: "none", color: "black" }}>
          Cardio Training
        </a>
        <a href="#section5" style={{ textDecoration: "none", color: "black" }}>
          Strength Training
        </a>
        <a href="#section6" style={{ textDecoration: "none", color: "black" }}>
          1 to 1 Training
        </a>
      </nav>

<div className="border" style={{backgroundColor:"#a3a39e"}} >
  <Dmt img11={image11} img12={image12} img13={image13} img14={image14} img21={image21} img22={image22} img23={image23} img24={image24}/>
</div>

{/* <div className="container my-5">
      <div className="row">
      
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
</div> */}

      {/* SECTIONS */}
      <div
        id="section1"
        style={{
          height: "100vh",
          padding: "20px",
          scrollMarginTop: "120px", // 👈 prevents hiding
        }}
      >
        <h2 className="text-uppercase text-center" style={{marginTop:"7vh"}}>Freestyle</h2>
        <p className="text-center">Our dedicated Freestyle™ areas and fitness experts can help you discover new training techniques and exercises that offer a dynamic and efficient full-body workout.</p>

        <div className="">
          <div className="row justify-content-center">
            <div className="col p-1" style={{maxWidth:"25rem", height:"20rem"}}>
              <img className="h-100 w-100" src={image22} alt="" style={{objectFit:"cover"}}/>
            </div>

           <div className="col p-1" style={{maxWidth:"25rem", height:"20rem"}}>
              <img className="h-100 w-100" src={freestyle} alt="" style={{objectFit:"cover", objectPosition: "right"}}/>
            </div>


            <div className="col p-1" style={{maxWidth:"25rem", height:"20rem"}}>
              <img className="h-100 w-100" src={freestyle2} alt="" style={{objectFit:"cover"}}/>
            </div>

          </div>
        </div>
      </div>

      <div
        id="section2"
        style={{
          height: "100vh",
          padding: "20px",
          scrollMarginTop: "120px",
        }}
      >
        <h2>Section 2</h2>
        <p>Content for section 2...</p>
      </div>

      <div
        id="section3"
        style={{
          height: "100vh",
          padding: "20px",
          scrollMarginTop: "120px",
        }}
      >
        <h2>Section 3</h2>
        <p>Content for section 3...</p>
      </div>

      <div
        id="section4"
        style={{
          height: "100vh",
          padding: "20px",
          scrollMarginTop: "120px", // 👈 prevents hiding
        }}
      >
        <h2>Section 4</h2>
        <p>Content for section 4...</p>
      </div>

      <div
        id="section5"
        style={{
          height: "100vh",
          padding: "20px",
          scrollMarginTop: "120px", // 👈 prevents hiding
        }}
      >
        <h2>Section 5</h2>
        <p>Content for section 5...</p>
      </div>

      <div
        id="section6"
        style={{
          height: "100vh",
          padding: "20px",
          scrollMarginTop: "120px", // 👈 prevents hiding
        }}
      >
        <h2>Section 6</h2>
        <p>Content for section 6...</p>
      </div>
    </>
  );
};

export default TrainWithUs;
