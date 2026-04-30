import React from 'react'
import Routing from './Routes/Routing';

const App = () => {
  return (
    <Routing />
  )
}

export default App
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Navbar from './Components/Navbar'
// import Home from './Components/Home'
// import Franchise from './Components/Franchise'
// import cardio1 from "./assets/cardio1.webp"
// import cardio2 from "./assets/cardio2.jpeg"
// import cardio3 from "./assets/cardio3.jpg"


// const App = () => {
//   return (
//    <BrowserRouter>
//     <div className="">
//       <Navbar gymName="POWERCORE FITNESS" />
//     </div>
//     <Routes>
//         <Route path="/home" element={<Home gymName="POWERCORE FITNESS" imgComp1={cardio1} imgComp2={cardio2} imgComp3={cardio3}/>} />
//         <Route path="/franchise" element={<Franchise />} />
//     </Routes>
//     </BrowserRouter>
    
  
//   )
// }

// export default App