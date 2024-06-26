import React from 'react';
import style from './projects.module.css';
import pokecheck from "/public/assets/images/pokeball.png";
import foodreview from "/public/assets/images/csuf_tuffy.png";
import personal from "/public/assets/images/React.png";
import fruit from "/public/assets/images/farmer.png";
import ai from "/public/assets/images/trex.png";
import moyai from "/public/assets/images/moyai.png";

function ProjectsPage() {
  return (
    <div>
      <h1 className={style.call_to_action}>PROJECTS! 💻</h1>
      <div className={style.grid_container}>
          <div className={style.grid_item1}>
            <div className={style.project_title}>PokeCheck Website</div>
            <img src={pokecheck} alt="PokeCheck Website" style={{ width: '30%', height: 'auto' }} />
            <p><strong>Technologies: HTML, CSS, JS, PokeAPI, VSCode</strong></p>
            Gotta check them all, gotta check them all! Check on your fav pokemon on any browser!
            <br />
            <a href="https://github.com/Minsuhk/PokedexWebsite" className = {style.learn_button} target="_blank"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>Learn More!</a>
          </div>
          <div className={style.grid_item2}>
            <div className={style.project_title}>CSUF Food Review App</div>
            <img src={foodreview} alt="CSUF Food Review App" style={{ width: '30%', height: 'auto' }} />
            <p><strong>Technologies: Swift, Firebase, XCodee</strong></p>
            Feeling hungry at CSUF? Use this app!
            <br />
            <a href="https://github.com/CSUF-CPSC223W-2022S/project-group-9" className = {style.learn_button} target="_blank"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>Learn More!</a>
          </div>
          <div className={style.grid_item3}>
            <div className={style.project_title}>React Personal Website</div>
            <img src={personal} alt="React Personal Website" style={{ width: '30%', height: 'auto' }} />
            <p><strong>Technologies: HTML, CSS, React, VSCode</strong></p>
            A website all about me!
            <br />
            <a href="https://github.com/Minsuhk/349-Project-2" className = {style.learn_button} target="_blank"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>Learn More!</a>
          </div>
          <div className={style.grid_item4}>
            <div className={style.project_title}>Fruit Catching Game</div>
            <img src={fruit} alt="Super duper fun happy honey bee farm harvest simulator 5000.2" style={{ width: '20%', height: 'auto' }} />
            <p><strong>Technologies: C#, Unity, VSCode</strong></p>
            Gotta save the cute, falling fruits to save the farm!
            <br />
            <a href="https://github.com/Minsuhk/Happy-Farm-Game" className = {style.learn_button} target="_blank"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>Learn More!</a>
          </div>
          <div className={style.grid_item5}>
            <div className={style.project_title}>T-Rex AI Model</div>
            <img src={ai} alt="T-Rex AI Model" style={{ width: '30%', height: 'auto' }} />
            <p><strong>Technologies: Python, HTML, CSS, VSCode</strong></p>
            If we can't get over a score of 1000 on the Google T-Rex game, then we will train an AI to do it for us!
            <br />
            <a href="https://github.com/JustinLieng/CPSC-481-Dino-AI" className = {style.learn_button} target="_blank"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>Learn More!</a>
          </div>
          <div className={style.grid_item6}>
            <div className={style.project_title}>Moyai Game Info Website</div>
            <img src={moyai} alt="Moyai Game Info Website" style={{ width: '30%', height: 'auto' }} />
            <p><strong>Technologies: HTML, CSS, JS, Flask, MongoDB, YouTube API, SteamAPI, VSCode</strong></p>
            The one-stop site for all your game info needs!
            <br />
            <a href="https://github.com/HunterBendel/Moyai" className = {style.learn_button} target="_blank"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>Learn More!</a>
          </div>
      </div>
    </div>
  );
}

export default ProjectsPage;