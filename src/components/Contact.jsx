import React, { useRef } from 'react';
import style from './contact.module.css';

function ContactPage() {
  return (
    <div>
      <h1 className={style.call_to_action}>C'MON, SAY HI!!</h1>
      <div className={style.call_out_text}>
        You came to this page to see how to contact me, right?
        That means you are interested in contacting me, so why not contact me? 
        Feel free to contact me.
      </div>
      <br />
      <div className={style.socials}>
        <a href="https://github.com/Minsuhk" target="_blank"><i class="fa fa-github"></i></a>
        <a href="public/Nick's Resume (Updated 10.14.2023).pdf" target="_blank"><i class="fa fa-file-pdf-o"></i></a>
        <a href="https://www.linkedin.com/in/nicholasmchung/" target="_blank"><i class="fa fa-linkedin"></i></a>
        <a href="mailto: nicholasmchung@gmail.com" target="_blank"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
      </div>
    </div>
  );
}

export default ContactPage;