import { BrowserRouter } from "react-router-dom"

import {About, Contact, Feedbacks, Hero, Navbar, Tech, Works } from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern2 bg-cover bg-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Tech />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <About />
        </div>
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
      {/* <Feedbacks /> */}
    </BrowserRouter>
  )
}

export default App;
