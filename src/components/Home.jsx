import React, { useRef } from 'react';
import style from './home.module.css';
import pic from "/public/assets/images/casual_picture_2.jpg";
import sus from "/public/assets/misc/Among Us Sound Effect.mp3";

function HomePage() {
  const audioRef = useRef(null);  //Create a ref for the audio 

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.play();  //Play audio when mouse hover
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();  //Stop audio on mouse leave
      audioRef.current.currentTime = 0;  //Reset audio to start
    }
  };

  return (
    <div className={style.container}>
      <div className={style.leftColumn}>
        <h1 className={style.intro_name}>I am <strong>Nicholas Chung</strong>, a</h1>
        <h2 className={style.headline}>Full Stack Software Engineer</h2>
        <h3 className={style.statement}>"Together as one."</h3>
      </div>
      <div className={style.rightColumn}>
        <div className={style.hiddenText1}>OwO</div>
        <img 
          src={pic} 
          alt="Nicholas Chung" 
          className={style.personal_image}
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        />
        <div className={style.hiddenText2}>Follow my GitHub & LinkedIn💖</div>
        <audio ref={audioRef} src={sus} preload="auto">
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

export default HomePage;
