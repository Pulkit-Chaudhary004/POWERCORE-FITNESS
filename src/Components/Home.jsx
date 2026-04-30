import React, { useState } from "react";
import gymHome from "../assets/gymHome.jpg";
import carousel1 from "../assets/carousel1.jpg"
import carousel2 from "../assets/carousel2.jpg"
import carousel3 from "../assets/carousel3.jpg"


const Home = ({ gymName, imgComp1, imgComp2, imgComp3 }) => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hoverBtn, setHoverBtn] = useState(false);

  return (
    <>
    
<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">  

<div className="row">
  <div className="col-12 col-md-12  ">
    <div className="carousel-item active" style={{height:"80vh", overflow:"hidden"}}>
      <img src={carousel1} className="h-100 w-100" style={{objectFit:"cover "}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" style={{height:"80vh", overflow:"hidden"}}>
      <img src={carousel2} className="h-100 w-100" style={{objectFit:"cover"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item" style={{height:"80vh", overflow:"hidden"}}>
      <img src={carousel3}className="h-100 w-100" style={{objectFit:"cover"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


      <div className="container my-5 bg-warning">
        <h1 className="">
          {gymName} is free, social fitness you'll actually stick to.
        </h1>
      </div>

      <div className="container">
        <div className="card mb-4">
          <div className="row g-0 ">
            {/* Image Column */}
            <div className="col-md-4">
              <img
                src={gymHome}
                className="img-fluid rounded-start"
                alt="Gym"
              />
            </div>
            {/* Content Column */}
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">PowerCore Fitness</h5>
                <p className="card-text">
                  Our gym provides top-notch equipment, expert trainers, and
                  personalized plans to achieve your fitness goals.
                </p>
                <a href="#" className="btn btn-primary">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Container my-5 " style={{ overflow: "hidden" }}>
        <div
          className="row justify-content-center bg-dark align-items-center "
          style={{ height: "450px" }}
        >
          <div
            className="col col-lg-4 col-md-2 border-dark d-flex justify-content-center "
            style={{ position: "relative", overflow: "hidden" }}
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
          >
            <img
              src={imgComp1}
              alt="cardio1 image"
              className="img-fluid w-100"
              style={{
                height: "350px",
                objectFit: "cover",
                width: "100%",
                objectFit: "cover",
                transform: hover1 ? "scale(1.05)" : "scale(1)",
                filter: hover1 ? "blur(2px) brightness(0.9)" : "blur(0)",
                transition: "0.5s",
              }}
            />
            {hover1 && (
              <h3
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  zIndex: 2,
                }}
              >
                JOIN NOW
              </h3>
            )}
          </div>
          <div
            className="col col-lg-4 col-md-2 border-dark "
            style={{ position: "relative", overflow: "hidden" }}
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            <img
              src={imgComp2}
              alt="cardio1 image"
              className="img-fluid w-100"
              style={{
                height: "350px",
                objectFit: "cover",
                width: "100%",
                objectFit: "cover",
                transform: hover2 ? "scale(1.05)" : "scale(1)",
                filter: hover2 ? "blur(2px) brightness(0.9)" : "blur(0)",
                transition: "0.5s",
              }}
            />
            {hover2 && (
              <h3
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  zIndex: 2,
                }}
              >
                JOIN NOW
              </h3>
            )}
          </div>
        </div>
      </div>

      <div className="my-5">
        <h3 className="text-center fs-2">OUR HEALTH CLUBS</h3>
        <p className="text-center">
          Push your fitness further with our mix of facilities and we'll support
          you with advice on new and better ways to train.
        </p>
        <div className="d-flex justify-content-center my-4 " style={{position:"relative"}}
         onMouseEnter={()=>setHoverBtn(true)}
         onMouseLeave={()=>setHoverBtn(false)}
        >
        <button className="bg-warning text-white border-0 fs-4" style={{position:"absolute", transform:hoverBtn ? "scale(1.1)" : "scale(1)", transition:"0.3s"}}>Find a Club</button>
        </div>
      </div>

      <div
  className="container-fluid my-5 d-flex justify-content-center"
>
  <div style={{ position: "relative", width: "75%" }}>
    
    {/* Image */}
    <img
      className="img-fluid w-100"
      src={imgComp3}
      alt=""  
      style={{
        height: "70vh",
        objectFit: "cover",
        marginTop: "2rem",
        objectPosition: "top",
      }}
    />

    {/* Gradient overlay */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        marginTop: "2rem", // match image spacing
        background:
          "radial-gradient(circle at bottom left, rgba(255,193,7,0.7), transparent 60%)",
        pointerEvents: "none",
      }}
    />

  </div>
</div>

<div className="d-flex justify-content-center my-4">
  <h1 className="">POWERCORE INDIA ON INSTAGRAM</h1>
</div>  

 <p className="d-flex justify-content-center ">Follow us on,<span className="">  Instagram  </span> for tips, inspiration and the latest happenings in our clubs.</p>
      


      {/* FOOTER */}


      
{/* <footer className="text-center text-lg-start  text-muted" style={{backgroundColor:"#efeaea"}}>
  

  
  <section className="d-flex">
    <div className="container  text-center  mt-5">
     
      <div className="row mt-3">
        
        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </div>
   
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
         

        <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
       
      </div>
      
    </div>
  </section>
  

   <div className="d-flex justify-content-center w-100">
    <div className="mx-20">
  <a href="#!" className="me-4 text-reset">
    <i className="bi bi-facebook fs-5"></i>
  </a>

  <a href="#!" className="me-4 text-reset">
    <i className="bi bi-twitter fs-5"></i>
  </a>

  <a href="#!" className="me-4 text-reset">
    <i className="bi bi-google fs-5"></i>
  </a>

  <a href="#!" className="me-4 text-reset">
    <i className="bi bi-instagram fs-5"></i>
  </a>

  <a href="#!" className="me-4 text-reset">
    <i className="bi bi-linkedin fs-5"></i>
  </a>

  <a href="#!" className="me-4 text-reset">
    <i className="bi bi-github fs-5"></i>
  </a>
  </div>
</div>

  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>


</footer> */}


    </>
  );
};

export default Home;
