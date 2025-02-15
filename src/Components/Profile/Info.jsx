import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className="about__box">
        <h3 className="about__title">Web Dev</h3>
        <span className="about__subtitle">HTML<br/>CSS<br/>JS<br/>ReactJS</span>
      </div>

      <div className="about__box">
        <h3 className="about__title">Programming</h3>
        <span className="about__subtitle">Java DSA<br/>C++<br/>C</span>
      </div>

      <div className="about__box">
        <h3 className="about__title">Machine Learning</h3>
        <span className="about__subtitle">Python</span>
      </div>

      <div className="about__box">
        <h3 className="about__title">Design</h3>
        <span className="about__subtitle">Figma<br/>Framer<br/>Canva</span>
      </div>

      {/* <div className="about__box">
        <h3 className="about__title">Version Control</h3>
        <span className="about__subtitle">GitHub<br/>Git</span>
      </div> */}
    </div>
  )
}

export default Info