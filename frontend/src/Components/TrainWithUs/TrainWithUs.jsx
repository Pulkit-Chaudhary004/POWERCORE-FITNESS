import React from "react";
import trainWithUs1 from "./images/trainWithUs1.jpg";
import Dmt from "../Dmt";
import image11 from "./images/image11.jpg";
import image12 from "./images/image12.jpg";
import image13 from "./images/image13.jpg";
import image14 from "./images/image14.jpg";
import image21 from "./images/image21.jpg";
import image22 from "./images/image22.jpg";
import image23 from "./images/image23.jpg";
import image24 from "./images/image24.jpg";
import freestyle from "./images/freestyle.jpg";
import freestyle2 from "./images/freestyle2.jpg";
import section3 from "./images/section3.jpg";
import gymCardio from "./images/gymCardio.jpg";
import strengthTraining from "./images/strengthTraining.jpg";
import personalTraining from "./images/personalTraining.jpg";
import { Link } from "react-router-dom";

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
      <nav
        className=""
        style={{
          position: "sticky",
          top: "70px",
          // marginTop: "4vh", // 👈
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "15px",
          zIndex: 999,
          backgroundColor: "white",
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

      <div className="border" style={{ backgroundColor: "#a3a39e" }}>
        <Dmt
          img11={image11}
          img12={image12}
          img13={image13}
          img14={image14}
          img21={image21}
          img22={image22}
          img23={image23}
          img24={image24}
        />
      </div>

      {/* SECTIONS */}
      <div
        className="container py-5"
        id="section1"
        style={{
          scrollMarginTop: "120px", // 👈 prevents hiding
        }}
      >
        <h2 className="text-uppercase text-center" style={{ marginTop: "7vh" }}>
          Freestyle
        </h2>
        <p className="text-center">
          Our dedicated Freestyle™ areas and fitness experts can help you
          discover new training techniques and exercises that offer a dynamic
          and efficient full-body workout.
        </p>

        <div className="">
          <div className="row justify-content-center">
            <div
              className="col col-lg-4 col-md-6 col-sm-12 p-1"
              style={{ maxWidth: "25rem", height: "20rem" }}
            >
              <img
                className="h-100 w-100"
                src={image22}
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>

            <div
              className="col col-lg-4 col-md-6 p-1"
              style={{ maxWidth: "25rem", height: "20rem" }}
            >
              <img
                className="h-100 w-100"
                src={freestyle}
                alt=""
                style={{ objectFit: "cover", objectPosition: "right" }}
              />
            </div>

            <div
              className="col col-lg-4 col-md-6 p-1"
              style={{ maxWidth: "25rem", height: "20rem" }}
            >
              <img
                className="h-100 w-100"
                src={freestyle2}
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div
        className="container py-5 my-4"
        id="section2"
        style={{
          scrollMarginTop: "120px",
        }}
      >
        <div className="row align-items-start justify-content-center ">
          <div className="col-md-6 text-center">
            <h2 className="text-uppercase ">freestyle group training</h2>
            <p className="">
              Find motivation from training with others for an efficient and
              progressive workout. Offering interactive and energetic sessions,
              Freestyle™ Group Training incorporates the latest equipment and
              trained fitness staff. These classes are a great way to work the
              whole body and improve overall fitness.
            </p>
            <div className="my-4">
              <Link to="/">
                <button className="bg-warning border-0">Find more</button>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid w-100"
              src={image23}
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* SECTION 3 */}
      <div
        className="container py-5"
        id="section3"
        style={{
          scrollMarginTop: "120px",
        }}
      >
        <div className="row align-items-start justify-content-center ">
          <div className="col-md-6 text-center">
            <h2 className="text-uppercase ">Group Exercise Classes</h2>
            <p className="">
              Our range of classes will inspire you to explore new training
              styles and techniques, while keeping you motivated with other
              like-minded members. We have a wide choice of classes that are a
              great complement to any training programme. See our class
              timetable for details.
            </p>
            <div className="my-4">
              <Link to="/">
                <button className="bg-warning border-0">
                  Explore all our classes
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-4 position-relative">
            <img
              className="img-fluid w-100"
              src={section3}
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>


{/* SECTION4 */}
      <div
        className="container py-5"
        id="section4"
        style={{
          scrollMarginTop: "120px",
        }}
      >
        <div className="row align-items-start justify-content-center ">
          <div className="col-md-6 text-center">
            <h2 className="text-uppercase ">Cardio Training</h2>
            <p className="">Whether you want increased energy or reduced stress, cardio training (otherwise known as cardiovascular or CV training) helps you live a fitter life while strengthening your heart and lungs. From interval workouts to endurance exercises, cardio training can also help to lower blood pressure and cholesterol levels.
              Whether you want increased energy or reduced stress, cardio training (otherwise known as cardiovascular or CV training) helps you live a fitter life while strengthening your heart and lungs. From interval workouts to endurance exercises, cardio training can also help to lower blood pressure and cholesterol levels.
            </p>
            
          </div>
          <div className="col-md-4 position-relative">
            <img
              className="img-fluid w-100"
              src={gymCardio}
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>



{/* SECTION5 */}
      <div
        className="container py-5"
        id="section5"
        style={{
          scrollMarginTop: "120px",
        }}
      >
        <div className="row align-items-start justify-content-center ">
          <div className="col-md-6 text-center">
            <h2 className="text-uppercase ">Strength Training</h2>
            <p className="">Shape your body and burn fat with strength training. With the right equipment such as free weights or resistance machines and advice from our experts, you can improve your overall health while increasing muscle and bone strength.
            </p>
            
          </div>
          <div className="col-md-4 position-relative">
            <img
              className="img-fluid w-100"
              src={strengthTraining}
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>


{/* SECTION6 */}
      <div
        className="container py-5"
        id="section6"
        style={{
          scrollMarginTop: "120px",
        }}
      >
        <div className="row align-items-start justify-content-center ">
          <div className="col-md-6 text-center">
            <h2 className="text-uppercase ">One-to-One Training</h2>
            <p className="">Tailored specifically around your individual fitness, one-to-one personal training ensures you get the most out of every workout. Our expert personal trainers can offer support, advice and motivation to keep you on the right track.
            </p>
            
          </div>
          <div className="col-md-4 position-relative">
            <img
              className="img-fluid w-100"
              src={personalTraining}
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainWithUs;
