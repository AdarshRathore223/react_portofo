import React from 'react'

function Project() {
    return (
        <section className="Projects" id="Projects">
            <div className="heading">
                <h2>Projects</h2>
            </div>
            <div className="Projects-content">

                <div className="Projects-box">
                    <i className='bx bx-code-alt'></i>
                    <h3>Web Development</h3>
                    <a href="#">Learn More</a>
                </div>

                <div className="Projects-box">
                    <i className='bx bx-server'></i>
                    <h3>Backend Development</h3>
                    <a href="#">Learn More</a>
                </div>
                <div className="Projects-box">
                    <i className='bx bx-br/ush'></i>
                    <h3>UI/UX Design</h3>
                    <a href="#">Learn More</a>
                </div>

                <div className="Projects-box">
                    <i className='bx bxl-android'></i>
                    <h3>App Development</h3>
                    <a href="#">Learn More</a>
                </div>
            </div>
        </section>
    )
}

export default Project