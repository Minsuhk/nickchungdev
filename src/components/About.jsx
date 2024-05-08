import React, {useEffect, useState} from 'react';
import style from './about.module.css';
import pic from "/public/assets/images/casual_picture_3.jpg";
import hob1 from "/public/assets/images/gunpla.png";
import hob2 from "/public/assets/images/LOL.png";
import hob3 from "/public/assets/images/bowling.png";

function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);


  const experiences = [
    {
      title: "Supplemental Instruction",
      details: [
        "Provided support for students by hosting bi-weekly study sessions, reinforcing concepts and challenging topics.",
        "Simplified C++ topics through group activities and coding exercises, aiding student success.",
        "Created reusable lesson plans and activities for use by current and future supplemental instructors.",
        "Developed strong communication and teaching skills, honing time management and adaptability."
      ]
    },
    {
      title: "The Coder School Tutor",
      details: [
        "Instructed aspiring game developers through hands-on coding with Scratch, fostering knowledge in game dev.",
        "Facilitated one-on-one coding sessions for K-12 students, improving understanding of programming concepts.",
        "Constructed engaging lesson plans to captivate students' interest, ensuring an enjoyable learning experience.",
        "Enhanced personalized instruction through collaborative efforts with fellow tutors, incorporating valuable insights from both students and peers' feedback."
      ]
    }
  ];

  const navigate = (direction) => {
    const newIndex = (currentIndex + direction + experiences.length) % experiences.length;
    setCurrentIndex(newIndex);
  };


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <br />
      <br />
      <br />
      <br />
      <div className={style.flex_cont}> 
        <div className={style.leftColumn}>
          <h2 className={style.headline}>About Me</h2>
          <h3 className={style.statement}>
            Hey hey! I am Nicholas Chung, a full stack developer from sunny Southern California.
            I am here to show that you can find fun in every little bit of code.
          </h3>
        </div>
        <div className={style.rightColumn}>
          <img 
            src={pic} 
            alt="Nicholas Chung" 
            className={style.personal_image}
          />
        </div>
      </div>


      <hr className={style.divider}/>

      <div className={style.flex_cont}>


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

      <div className={style.flex_cont}>
        <div className={style.leftColumn}>
          <h2 className={style.headline_long}>Experiences</h2>
          <h2 className={style.headline_short}>Exp</h2>
          <h3 className={style.statement}>
            Wow! Did I really do that?
          </h3>
        </div>
        <div className={style.rightColumn}>
          <div className={style.carousel}>
            {experiences.map((exp, index) => (
              <div key={index} className={`${style.carouselItem} ${index === currentIndex ? style.active : ''}`}>
                <h1>{exp.title}</h1>
                <ul>
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className={style.details}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
            <button onClick={() => navigate(-1)} className={style.carousel_buttons}>Previous</button>
            <button onClick={() => navigate(1)} className={style.carousel_buttons}>Next</button>
          </div>
        </div>
      </div>

      <hr className={style.divider}/>

      <div className={style.flex_cont}> 
        <div className={style.center_col}>
          <h2 className={style.headline}>Humble Hobbies</h2>
          <div clasName={style.hobby_container}>
            <img src={hob1} alt="Gunpla" className={style.hobby_image}/>
            <img src={hob2} alt="League of Legends" className={style.hobby_image}/>
            <img src={hob3} alt="Bowling" className={style.hobby_image}/>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}

export default AboutPage;
