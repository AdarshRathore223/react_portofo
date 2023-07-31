import React from 'react'
import img from '../img/main.png';
function Skill() {
  return (
    <section className="skills" id="skills">
        <div className="heading">
          <h2>Skills</h2>
          <span>My Skills</span>
        </div>

        <div className="skills-container">
          <div className="bars">

            <div className="bars-box">
              <h3>Web tecnology</h3>
              <span>94%</span>
              <div className="light-bar"></div>
              <div className="percent-bar html-bar"></div>
            </div>

            <div className="bars-box">
              <h3>Advannce Java</h3>
              <span>84%</span>
              <div className="light-bar"></div>
              <div className="percent-bar css-bar"></div>
            </div>

            <div className="bars-box">
              <h3>Graphic Design</h3>
              <span>74%</span>
              <div className="light-bar"></div>
              <div className="percent-bar js-bar"></div>
            </div>

            <div className="bars-box">
              <h3>Programming languages</h3>
              <span>60%</span>
              <div className="light-bar"></div>
              <div className="percent-bar react-bar"></div>
            </div>
          </div>
          <div className="skills-img">
            <img src={img} alt="Skill" />
          </div>
        </div>
      </section>
  )
}

export default Skill