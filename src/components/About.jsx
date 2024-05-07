import React from 'react';
import style from './about.module.css';

function AboutPage() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.leftColumn}>
          <h2 className={style.headline}>About Me</h2>
          <h3 className={style.statement}>
            Hey hey! I am Nicholas Chung, a full stack developer from sunny Southern California.
            I am here to show that you can find fun in every little bit of code.
          </h3>
        </div>
        <div className={style.rightColumn}>
          <img 
            src="public/casual_picture_3.jpg" 
            alt="Nicholas Chung" 
            className={style.personal_image}
          />
        </div>
      </div>

      <hr className={style.divider}/>

      <div className={style.container}>
        <div className={style.leftColumn}>
          <h2 className={style.headline}>Skills</h2>
          <h3 className={style.statement}>
            Checkout these neato skills I have acquired!
          </h3>
        </div>
        <div className={style.rightColumn}>
          <div className={style.skills_grid}>
              <div className={style.skill}>C++</div>
              <div className={style.skill}>C#</div>
              <div className={style.skill}>Python</div>
              <div className={style.skill}>Swift</div>
              <div className={style.skill}>In-Line x86 ASM</div>
              <div className={style.skill}>HTML5</div>
              <div className={style.skill}>CSS3</div>
              <div className={style.skill}>JavaScript</div>
              <div className={style.skill}>R</div>
              <div className={style.skill}>React</div>
              <div className={style.skill}>Flask</div>
              <div className={style.skill}>Git</div>
          </div>
        </div>
      </div>

      <hr className={style.divider}/>

      <div className={style.container}>
        <div className={style.leftColumn}>
          <h2 className={style.headline_long}>Experiences</h2>
          <h2 className={style.headline_short}>Exp</h2>
          <h3 className={style.statement}>
            Wow! Did I really do that?
          </h3>
        </div>
        <div className={style.rightColumn}>
          <ul className={style.no_dot}>
            <li>
              <h1>Supplemental Instruction</h1>

            </li>
            <li>
              <h1>The Coder School Tutor</h1>
            </li>
          </ul>
        </div>
      </div>











    </div>
  );
}

export default AboutPage;
