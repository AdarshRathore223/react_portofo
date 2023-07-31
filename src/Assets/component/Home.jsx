import React from 'react'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Typedcomponent from './Typedcomponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../img/main.png';

function Home() {
  const handleDownload = () => {
    const fileUrl = '../files/Adarsh_Rathore_Resume.pdf';

    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'Adarsh_Rathore_Resume.pdf';
    anchor.click();
  };
  return (
    <section className="home" id="home">
      <div className="social">
        <a className='linkdein' target='_blank' href="https://www.linkedin.com/in/adarsh-rathore-157851130/"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a className='twitter' target='_blank' href="https://twitter.com/Adarshrathore23"><FontAwesomeIcon icon={faTwitter} /></a>
        <a className='github' target='_blank' href="https://github.com/AdarshRathore223"><FontAwesomeIcon icon={faGithub} /></a>
      </div>
      <div className="home-img">
        <img src={img} alt="" />
      </div>
      <div className="home-text">
        <span>Hello, I'm</span>
        <h1 className="animation">Adarsh Rathore</h1>
        <Typedcomponent /><br />
        <a onClick={handleDownload} className="btn">Download CV</a>
      </div>
    </section>
  )
}

export default Home