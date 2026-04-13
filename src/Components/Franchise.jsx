import React from "react";
import gymHome from "../assets/gymHome.jpg";
import test from "../assets/test.jpg";
import gym from "../assets/gym.png";
import yoga from "../assets/yoga.jpg";
import features from "../assets/features.png";
import crossfit from "../assets/crossfit.jpg";

const Franchise = () => {
  return (
    <>
      <div className="container-fluid px-0">
        <div className="row g-0">
          <div className="col-12 col-md-12  ">
            <div
              className=""
              style={{ height: "70vh", width: "100", overflow: "hidden" }}
            >
              <img
                src={test}
                alt=""
                className="h-100 w-100"
                style={{ objectFit: "fill " }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center my-5">
        <p className="text-uppercase fw-light fs-1">
          Ready to own a franchise with us
        </p>
      </div>

      <div
        className="franchise-form container-fluid  "
        style={{ marginBottom: "15vh" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-3">
            {/* Name input */}
            <div data-mdb-input-init className="form-outline">
              <label className="form-label " for="form8Example1">
                Name
              </label>
              <input type="text" id="form8Example1" className="form-control " />
            </div>
          </div>
          <div className="col-lg-3">
            {/* Email input */}
            <div data-mdb-input-init className="form-outline">
              <label className="form-label" for="form8Example2">
                Mobile No
              </label>
              <input
                type="number"
                id="form8Example2"
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-3">
            {/* Name input  */}
            <div data-mdb-input-init className="form-outline">
              <label className="form-label" for="form8Example3">
                E-mail
              </label>
              <input type="text" id="form8Example3" className="form-control" />
            </div>
          </div>
          <div className="col-lg-3">
            {/* Name input  */}
            <div data-mdb-input-init className="form-outline">
              <label className="form-label" for="form8Example4">
                City
              </label>
              <input type="text" id="form8Example4" className="form-control" />
            </div>
          </div>
        </div>

        <div className="row mt-2 " style={{ marginLeft: "24vw" }}>
          <div className="col-lg-3 ">
            <label className="form-label" for="form8Example4">
              Capital Available
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select</option>
              <option value="1">4-6cr</option>
              <option value="2">6-8cr</option>
              <option value="2">10cr+</option>
            </select>
          </div>
          <div
            className="col d-flex align-items-end"
            style={{ marginLeft: "7vw" }}
          >
            <button
              data-mdb-ripple-init
              type="submit"
              className="btn btn-success"
              style={{ width: "5vw" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="d-flex justify-content-center fw-light fs-1 text-uppercase">
          About powercore fitness
        </h1>
        <p className="d-flex justify-content-center text-center fw-light fs-5">
          Premium and High end fitness clubs with state of the art machines &
          facilities.
          <br /> Presence in Bangalore, Delhi & Mumbai in India.
        </p>
      </div>

      <div className="container">
        <div className="row mb-5">
          <div className="col d-flex justify-content-center">
            <div className="">
              <div
                className="rounded-circle border border-warning border-3 d-flex justify-content-center align-items-center"
                style={{ width: "160px", height: "160px" }}
              >
                <div
                  className="rounded-circle d-flex flex-column justify-content-center align-items-center bg-warning "
                  style={{ width: "140px", height: "140px" }}
                >
                  <div className=" fw-bold text-uppercase">2000</div>
                  <div className="fs-4 fw-bold text-uppercase">founded</div>
                </div>
              </div>
              <div className="d-flex justify-content-center text-uppercase fs-4 fw-bold">
                in india
              </div>
            </div>
          </div>

          <div className="col d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center">
              <div
                className="rounded-circle border border-warning border-3 d-flex justify-content-center align-items-center"
                style={{ width: "160px", height: "160px" }}
              >
                <div
                  className="rounded-circle d-flex flex-column justify-content-center align-items-center bg-warning "
                  style={{ width: "140px", height: "140px" }}
                >
                  <div className=" fw-bold text-uppercase">380</div>
                  <div className="fs-4 fw-bold text-uppercase">clubs</div>
                </div>
              </div>
              <div className="d-flex justify-content-center text-uppercase fs-4 fw-bold">
                across 17 countries
              </div>
            </div>
          </div>

          <div className="col d-flex justify-content-center">
            <div className="">
              <div
                className="rounded-circle border border-warning border-3 d-flex justify-content-center align-items-center"
                style={{ width: "160px", height: "160px" }}
              >
                <div
                  className="rounded-circle d-flex flex-column justify-content-center align-items-center bg-warning "
                  style={{ width: "140px", height: "140px" }}
                >
                  <div className=" fw-bold text-uppercase">10</div>
                  <div className="fs-4 fw-bold text-uppercase">lac</div>
                </div>
              </div>
              <div className="d-flex justify-content-center text-uppercase fs-4 fw-bold">
                members
              </div>
            </div>
          </div>
        </div>
      </div>



      <div style={{ height: "70vh", width: "100%" }}>
  <div
    className="bg-dark h-100 w-100"
    style={{ position: "relative" }}
  >

    {/* Image */}
    <img
      className="w-100 h-100 position-absolute top-0 start-0"
      src={yoga}
      alt=""
      style={{ objectFit: "cover", objectPosition: "left", zIndex: 0 }}
    />

    {/* Overlay (blur + dark) */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(25, 24, 24, 0.75)",
        backdropFilter: "blur(2.5px)",
        WebkitBackdropFilter: "blur(2.5px)",
        zIndex: 1
      }}
    ></div>
    <div style={{
      position:"absolute",
      top:"5%",
      width:"100%",
      textAlign:"center",
      zIndex:2
    }}>
      <h1 className="text-white text-uppercase fw-light">
        Offerings & Facilities
      </h1>
    </div>

    {/* White Content Box (TOP - not blurred) */}
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "10%",
        transform: "translate(-55%, -100%)",
        backgroundColor: "white",
        width: "30vw",
        height: "30%",
        zIndex: 2   // 👈 VERY IMPORTANT
      }}
    >
      <img src={features} alt="" />
    </div>

  </div>
</div>





    </>
  );
};

export default Franchise;

// d-flex justify-content-center align-items-center text-center

 {/* <div className="" style={{position:"absolute",inset:0, backgroundColor:"white", height:"30%", width:"30vw"}}></div>
        */}






            {/* <div className="" style={{height: "70vh", width:"100%"}}>
        <div
          className="bg-dark h-100 w-100"
          style={{ position: "relative" }}
        >
          <img
            className="w-100 h-100"
            src={yoga}
            alt=""
            style={{objectFit: "cover", objectPosition:"50% 40%" }}
          />
           <div style={{position: "absolute",inset:0, backgroundColor:
        "rgba(0, 0, 0, 0.7)" , backdropFilter:"blur(1.5px)", WebkitBackdropFilter: "blur(1.5px)"}} ></div>
        </div>

        <div className="" style={{ position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        width: "30vw",
        height: "30%",
        zIndex: 2}}></div>

       
      </div> */}






       {/* <div  style={{
        position: "absolute",
        top: "50%",
        left: "70%",
        transform: "translate(-20%,-50%)",
        width: "30vw",
        height: "70%",
        zIndex: 2,
      }}>
      <img src={crossfit} alt="" className="h-100 w-100" style={{objectFit:"cover"}}/>
    </div> */}
