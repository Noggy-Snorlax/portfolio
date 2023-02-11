
import { useEffect, useState } from 'react';
import LightBanner from "../img/LightXmas.png";
import DarkBanner from "../img/NightXmas.png";
import MunchlaxWithDodoco from "../img/MunchlaxAndDodocoSideCamera.png";
import MunchlaxWithHat from "../img/MunchlaxWithHatOnly.png";
import askar from "../img/askar.png";
import buku_hadiah from "../img/buku-hadiah.jpg";
import NyanCat from "../img/b7a.gif";
import FPCSS from '../css/front-page.module.css';
import '../css/front-page.module.css';
import rotationCSS from '../css/phone-rotation.module.css';
import sk_sec_CSS from '../css/skill-section.module.css';
import '../css/phone-rotation.module.css';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../reducer/Counter'
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { changeTheme } from '../reducer/AppBev';
import logo from '.././logo.svg';
import { ReactComponent as ReactLogo } from '.././logo.svg';
import { openCloseDialog, changeImageURL } from '../reducer/ExpandDialog';
import Tictactoe from './Tictactoe';
import { Swiper, SwiperSlide } from "swiper/react";

import LandscapeImage1 from "../img/LandscapeImage/LSImage1.png";
import LandscapeImage2 from "../img/LandscapeImage/LSImage2.png";
import LandscapeImage3 from "../img/LandscapeImage/LSImage3.png";
import LandscapeImage4 from "../img/LandscapeImage/LSImage4.jpg";
import LandscapeImage5 from "../img/LandscapeImage/LSImage5.png";
import LandscapeImage6 from "../img/LandscapeImage/LSImage6.png";
import LandscapeImage7 from "../img/LandscapeImage/LSImage7.png";
import LandscapeImage8 from "../img/LandscapeImage/LSImage8.png";
import LandscapeImage9 from "../img/LandscapeImage/LSImage9.jpg";
import LandscapeImage10 from "../img/LandscapeImage/LSImage10.jpg";
import SquareImage1 from "../img/SquareImage/Sqimage1.jpg";
import SquareImage2 from "../img/SquareImage/Sqimage2.png";
import SquareImage3 from "../img/SquareImage/Sqimage3.jpg";
import SquareImage4 from "../img/SquareImage/Sqimage4.png";
import SquareImage5 from "../img/SquareImage/Sqimage5.jpg";
import SquareImage6 from "../img/SquareImage/Sqimage6.jpg";
import SquareImage7 from "../img/SquareImage/Sqimage7.png";
import SquareImage8 from "../img/SquareImage/Sqimage8.png";
import SquareImage9 from "../img/SquareImage/Sqimage9.png";
import SquareImage10 from "../img/SquareImage/Sqimage10.png";
import SquareImage11 from "../img/SquareImage/Sqimage11.png";
import SquareImage12 from "../img/SquareImage/Sqimage12.png";
import SquareImage13 from "../img/SquareImage/Sqimage13.png";
import SquareImage14 from "../img/SquareImage/Sqimage14.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import '../css/style.css';
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { EffectFade, Pagination, EffectCube } from "swiper";
import Calculator from './Calculator';

function Counter() {
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div style={{ color: "white" }}>{count}</div>
      </div>
    </div>
  )
}

function Header() {
  const isDarkTheme = useSelector((state: any) => state.appBev.isDarkTheme);
  const dispatch = useDispatch();
  useEffect(() => {

    const startAnimation3 = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle(FPCSS.slideInRightAnimation, entry.isIntersecting);
      });
    };
    const observer3: any = new IntersectionObserver(startAnimation3);
    const options3 = { root: null, rootMargin: '0px', threshold: 1 };
    const elements3 = document.querySelectorAll('.' + FPCSS.pageHeaderTextDiv);
    elements3.forEach(el => {
      observer3.observe(el, options3);
    });
  });

  return (

    <div id="section1" style={{ position: "relative", height: "auto", width: "100%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className={FPCSS.pageHeaderTextDiv} style={{}}>
        <div className={FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
          Welcome~
        </div>
        <div className={FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
          To My Portfolio.
        </div>
        <div className={FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} style={{ width: "auto", height: "auto", paddingTop: "1em", paddingBottom: "1em" }}>
          <div>
            This Page Is Created Using React Redux Framework.

          </div>
          <div>
            *There is light and dark theme

          </div>
          <div>
            *The image can be click on the about me section

          </div>
          <div>
            *If the image unable to load please use reopen the link in Google Chrome

          </div>
        </div>

      </div>
      <div className={FPCSS.reactIconDiv} onClick={() => { dispatch(changeTheme()) }} style={{}}>
        <ReactLogo className={FPCSS['App-logo']} />
      </div>
      <img src={DarkBanner} alt="" style={{ zIndex: 0, height: "auto", width: "100%", position: "absolute", transition: "2s", opacity: isDarkTheme ? 1 : 0 }} />
      <img src={LightBanner} alt="" style={{ zIndex: 0, width: "100%", transition: "2s", opacity: isDarkTheme ? 0 : 1 }} />




    </div>
  );
}

function NavigationDrawer() {
  useEffect(() => {


  });

  return (
    <div className={FPCSS.drawerContainer} >
      <div className={ FPCSS['font-25px'] + " " + FPCSS['font-color']}style={{width:"80%",fontFamily:"cursive",fontSize:"2vw",fontWeight:"bold"}}>
        Portfolio
      </div>

      <div style={{width:"80%", display: "flex", flexDirection: "column", height: "50%",alignItems:"flex-start" }}>
        <div className={FPCSS.navigationDrawerSelection +" "+FPCSS['font-25px'] + " " + FPCSS['font-color']} onClick={() => { var element = document.getElementById("section1")!; element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }}>
          <div className={FPCSS.navigationDrawerContent}>
          <ArrowSVG/>
          Back To Top
          </div>
         
        </div>
        <div className={FPCSS.navigationDrawerSelection +" "+FPCSS['font-25px']  + " " + FPCSS['font-color']} onClick={() => { var element = document.getElementById("section2")!; element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }}>
        <div className={FPCSS.navigationDrawerContent}>
           
        <ArrowSVG/>
          About Me
          </div>
    
        </div>
        <div className={FPCSS.navigationDrawerSelection +" "+FPCSS['font-25px']  + " " + FPCSS['font-color']} onClick={() => { var element = document.getElementById("section3")!; element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }}>
        <div className={FPCSS.navigationDrawerContent}>
        <ArrowSVG/>
          Skill
          </div>
      
        </div>
        <div className={FPCSS.navigationDrawerSelection +" "+FPCSS['font-25px'] + " " + FPCSS['font-color']} onClick={() => { var element = document.getElementById("section6")!; element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }}>
        <div className={FPCSS.navigationDrawerContent}>
        <ArrowSVG/>
          Tic Tac Toe
          </div>

        </div>
        <div className={FPCSS.navigationDrawerSelection +" "+FPCSS['font-25px'] + " " + FPCSS['font-color']} onClick={() => { var element = document.getElementById("section4")!; element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }}>
        <div className={FPCSS.navigationDrawerContent}>
        <ArrowSVG/>
         Art Gallery
          </div>
    
        </div>
        <div className={FPCSS.navigationDrawerSelection +" "+FPCSS['font-25px'] + " " + FPCSS['font-color']} onClick={() => { var element = document.getElementById("section5")!; element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }}>
        <div className={FPCSS.navigationDrawerContent}>
        <ArrowSVG/>
          Contact Me
          </div>
        
      
        </div>
      </div>

    </div>
  )
}


function ArrowSVG(){
  return(
    <svg width="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height:"1em"}}>
            <g clipPath="url(#clip0_822_2)">
              <path className={FPCSS.navigationDrawerArrowPath} d="M25.5 13.134C26.1667 13.5189 26.1667 14.4811 25.5 14.866L4.5 26.9904C3.83333 27.3753 3 26.8942 3 26.1244L3 1.87564C3 1.10584 3.83333 0.624719 4.5 1.00962L25.5 13.134Z" fill="#7000FF" />
            </g>
            <defs>
              <clipPath id="clip0_822_2">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>

  )
}

function LightDarkIcon() {
  const isDarkTheme = useSelector((state: any) => state.appBev.isDarkTheme)
  const dispatch = useDispatch()
  return (
    <IconButton className={FPCSS['theme-icon-div']} onClick={() => { dispatch(changeTheme()) }} aria-label="delete" style={{ position: "absolute", right: "1vw", top: "1vw", zIndex: 3 }}>
      {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}

    </IconButton>
  )
}

function LoadingBar() {

  useEffect(() => {

    const startAnimation2 = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle(FPCSS['incrase-bar'], entry.isIntersecting);
      });
    };
    const observer2: any = new IntersectionObserver(startAnimation2);
    const options2 = { root: null, rootMargin: '0px', threshold: 1 };
    const elements2 = document.querySelectorAll("." + FPCSS['bar-test']);
    elements2.forEach(el => {
      observer2.observe(el, options2);
    });
  });

  return (

    <div className={FPCSS['bar-test']}>
      <img src={NyanCat} alt="" style={{ width: "auto", height: "200%", position: "relative", left: "2vw" }} />
    </div>

  )
}

function AboutMe() {
  const dispatch = useDispatch();

  useEffect(() => {
    const startAnimation3 = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle(FPCSS.slideInRightAnimation, entry.isIntersecting);
      });
    };
    const observer3: any = new IntersectionObserver(startAnimation3);
    const options3 = { root: null, rootMargin: '0px', threshold: 1 };
    const elements3 = document.querySelectorAll('.' + FPCSS.aboutMeImg1 + ', .' + FPCSS.aboutMeImg1TextDiv + ', .' + FPCSS.aboutMeTitleText+', .'+ FPCSS.animationSlide);
    elements3.forEach(el => {
      observer3.observe(el, options3);
    });
  });





  return (
    <div id="section2" style={{ height: "60vw" }}>
      <div className={FPCSS.aboutMeTitleText + " " + FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
        About Me
      </div>
      <div className={"font-30px font-bold font-color"} style={{ display: "flex", padding: "1vw" }}>
        <div className={FPCSS.aboutMeImg1} style={{}}>
          <img onClick={() => { dispatch(openCloseDialog()); dispatch(changeImageURL(MunchlaxWithDodoco)); }} src={MunchlaxWithDodoco} alt="" style={{ width: "100%", height: "auto",cursor:"pointer" }} />

        </div>
        <div className={FPCSS['font-20px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} style={{ width: "80%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className={FPCSS.aboutMeImg1TextDiv}>
            <div>
              <div>
                Hi there, I am graduate student from UKM major in Software Engineer (Multimedia).
              </div>
              <div>
                Currently have an 2 years of working experience as a front-end web developer and 6 month of internship QA experience.
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={"font-30px font-bold font-color"} style={{ display: "flex", padding: "1vw" }}>

        <div className={FPCSS['font-20px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} style={{ width: "80%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className={FPCSS.aboutMeImg1TextDiv}>
            <div>
              <div>
                <div>Hobbies :</div>
                <div>- Playing/making games.</div>
                <div>- Thinking complex logic.</div>
                <div>- Exercising to keep a healthy life style 😊.</div>
                <div>- Will try and hack or exploit some website once in awhile.</div>
              </div>
              <div>
                <div style={{ paddingTop: "1em" }}> Special about me :</div>
                <div>- Join ROTU during University. Yup, I am an army officer.<b onClick={() => { dispatch(openCloseDialog()); dispatch(changeImageURL(askar)); }} style={{cursor:"pointer"}}>🗡️</b></div>
                <div>- Representative for my University to join programming competition(ICPC).💻</div>
              </div>

            </div>
            {
//  <div style={{ paddingTop: "1em" }}>
//  <Button variant='contained' onClick={() => { var element = document.getElementById("section5")!; element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }}>Contact Me</Button>
// </div>

            }
           

          </div>
        </div>
        <div className={FPCSS.aboutMeImg2} style={{}}>
          <img onClick={() => { dispatch(openCloseDialog()); dispatch(changeImageURL(MunchlaxWithHat)) }} src={MunchlaxWithHat} alt="" style={{ width: "100%", height: "auto",cursor:"pointer"  }} />

        </div>
      </div>
      <div className={FPCSS.animationSlide} style={{width:"100%",height:"23vw",display:"flex",justifyContent:"center"}}>
      <div style={{width:"80%",height:"100%"}}>
        <div style={{width:"100%",height:"50%",display:"flex",justifyContent:"space-between"}}>
            <div style={{width:"48%",height:"100%",display:"flex",flexDirection:"column"}}>
              <div className={FPCSS['font-20px']+" "+FPCSS['font-bold']+ " " + FPCSS['font-color']+" "+FPCSS.aboutMeExtraTitle} style={{paddingLeft:"3%"}}>Fast Learner ⚡</div>
              <div className={FPCSS['font-color']+" "+FPCSS['font-15px']} style={{borderLeft:"solid 2px transparent",paddingLeft:"3%", textAlign:"justify"}}>
                How to prove that I am a fast learner? Maybe this university <b onClick={() => { dispatch(openCloseDialog()); dispatch(changeImageURL(buku_hadiah)); }} style={{color:"blue",cursor:"pointer"}}>certificate</b> can be one of the prove.
                This "Buku Hadiah" certificate is given out to the highest CGPA in each course. 
                When I join my first company as a fresh graduate, I did pickup the React Redux framework from scratch within 2 week and come out a working game
                within 2 month.
              </div>
            </div>
            <div style={{width:"48%",height:"100%",display:"flex",flexDirection:"column"}}>
            <div className={FPCSS['font-20px']+" "+FPCSS['font-bold']+ " " + FPCSS['font-color']+" "+FPCSS.aboutMeExtraTitle} style={{paddingLeft:"3%"}}>Independent 💪</div>
              <div className={FPCSS['font-color']+" "+FPCSS['font-15px']} style={{borderLeft:"solid 2px transparent",paddingLeft:"3%", textAlign:"justify"}}>
                Not say that I am independent and I am not a team player. Independent in here is mean by I am able to find information and come out with and alternate solution alone.
              </div>
            </div>
        </div>
        <div style={{width:"100%",height:"50%",display:"flex",justifyContent:"space-between"}}>
            <div style={{width:"48%",height:"100%",display:"flex",flexDirection:"column"}}>
              <div className={FPCSS['font-20px']+" "+FPCSS['font-bold']+ " " + FPCSS['font-color']+" "+FPCSS.aboutMeExtraTitle} style={{paddingLeft:"3%"}}>Sharing is caring ❤️</div>
              <div className={FPCSS['font-color']+" "+FPCSS['font-15px']} style={{borderLeft:"solid 2px transparent",paddingLeft:"3%", textAlign:"justify"}}>
                Knowledge must be share around freely. I have this thinking because I hate people that greedy with sharing knowledge.
              </div>
            </div>
            <div style={{width:"48%",height:"100%",display:"flex",flexDirection:"column"}}>
            <div className={FPCSS['font-20px']+" "+FPCSS['font-bold']+ " " + FPCSS['font-color']+" "+FPCSS.aboutMeExtraTitle} style={{paddingLeft:"3%"}}>Creative and innovative 🖌️</div>
              <div className={FPCSS['font-color']+" "+FPCSS['font-15px']} style={{borderLeft:"solid 2px transparent",paddingLeft:"3%", textAlign:"justify"}}>
                Yup, I like creative and innovative creation. Something that can "WOW" myself and the world.
                
              </div>
            </div>
        </div>
      </div>
      </div>
      
    </div>

  )
}

function SkillSection() {
  const dispatch = useDispatch();

  useEffect(() => {


    const startAnimation3 = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle(FPCSS['incrase-bar2'], entry.isIntersecting);
      });
    };
    const observer3: any = new IntersectionObserver(startAnimation3);
    const options3 = { root: null, rootMargin: '0px', threshold: 1 };
    const elements3 = document.querySelectorAll('.' + FPCSS['bar-table']);
    elements3.forEach(el => {
      observer3.observe(el, options3);
    });
  });


  return (
    <div id="section3">
      <div className={FPCSS.aboutMeTitleText + " " + FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} style={{}}>
        Skill
      </div>
      <div className={FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} style={{ display: "flex", padding: "1vw" }}>

        <div className={FPCSS.skillSectionBox + " " + FPCSS['font-20px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} style={{}}>
          <div className={FPCSS.skillSectionBoxDiv}>
            <div className={FPCSS.skillSectionLayer3}>
              <div className={FPCSS.skillSectionBoxTitle + " " + FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
                Skill Rating
              </div>
              <div className={FPCSS.skillSectionBarDiv + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']} >
                <div className={FPCSS.skillSection_X_Lable_Div} style={{}}>
                  <div className={FPCSS.skillSection_X_Lable_Text + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']}>
                    html</div>
                  <div className={FPCSS.skillSection_X_Lable_Text + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']}>
                    php</div>
                  <div className={FPCSS.skillSection_X_Lable_Text + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']}>
                    JavaScript</div>
                  <div className={FPCSS.skillSection_X_Lable_Text + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']}>
                    TypeScript</div>
                  <div className={FPCSS.skillSection_X_Lable_Text + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']}>
                    C#</div>
                  <div className={FPCSS.skillSection_X_Lable_Text + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']}>
                    Java</div>
                  <div className={FPCSS.skillSection_X_Lable_Text + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']}>
                    SQL</div>
                  <div className={FPCSS.skillSection_X_Lable_Text + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']}>
                    Android Studio</div>
                  <div className={FPCSS.skillSection_X_Lable_Text + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']}>
                    Firebase</div>
                  <div className={FPCSS.skillSection_X_Lable_Text + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']}>
                    Unity</div>
                  <div className={FPCSS.skillSection_X_Lable_Text + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']}>
                    Blender</div>
                  <div className={FPCSS.skillSection_X_Lable_Text + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']}>
                    Photoshop</div>
                  <div className={FPCSS.skillSection_X_Lable_Text + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']}>
                    Figma</div>
                </div>

                <div style={{ width: "95%", borderLeft: "solid 1px black", borderBottom: "solid 1px black" }}>
                  <div className={FPCSS.skillSection_X_Value + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']} style={{ width: "93%" }}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']} style={{ width: "75%" }}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']} style={{ width: "80%" }}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']} style={{ width: "80%" }}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']} style={{ width: "75%" }}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']} style={{ width: "70%" }}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']} style={{ width: "40%" }}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']} style={{ width: "60%" }}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']} style={{ width: "60%" }}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']} style={{ width: "80%" }}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']} style={{ width: "40%" }}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']} style={{ width: "50%" }}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value + " " + FPCSS['font-20px'] + " " + FPCSS['font-color']} style={{ width: "30%" }}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                </div>

              </div>
              <div className={FPCSS.skillSection_Y_Lable_Div + " " + FPCSS['font-20px']}>
                <div style={{ width: "10%", height: "100%", maxHeight: "100%" }}>

                </div>
                <div style={{ width: "95%", display: "flex", justifyContent: "space-evenly" }}>
                  <div className={FPCSS['font-20px'] + " " + FPCSS['font-color']}>10%</div>
                  <div className={FPCSS['font-20px'] + " " + FPCSS['font-color']}>20%</div>
                  <div className={FPCSS['font-20px'] + " " + FPCSS['font-color']}>30%</div>
                  <div className={FPCSS['font-20px'] + " " + FPCSS['font-color']}>40%</div>
                  <div className={FPCSS['font-20px'] + " " + FPCSS['font-color']}>50%</div>
                  <div className={FPCSS['font-20px'] + " " + FPCSS['font-color']}>60%</div>
                  <div className={FPCSS['font-20px'] + " " + FPCSS['font-color']}>70%</div>
                  <div className={FPCSS['font-20px'] + " " + FPCSS['font-color']}>80%</div>
                  <div className={FPCSS['font-20px'] + " " + FPCSS['font-color']}>90%</div>
                  <div className={FPCSS['font-20px'] + " " + FPCSS['font-color']}>100%</div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

function BlenderImage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    const startAnimation3 = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle(FPCSS.slideInRightAnimation, entry.isIntersecting);
      });
    };
    const observer3: any = new IntersectionObserver(startAnimation3);
    const options3 = { root: null, rootMargin: '0px', threshold: 1 };
    const elements3 = document.querySelectorAll('.mySwiper');
    elements3.forEach(el => {
      observer3.observe(el, options3);
    });
  });


  return (
    <div id="section4" style={{ width: "100%", height: "fit-content", paddingTop: "1em" }}>
      <div className={FPCSS.aboutMeTitleText + " " + FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
        Art Gallery
      </div>

      <Swiper
        spaceBetween={30}

        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={LandscapeImage1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LandscapeImage2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LandscapeImage3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LandscapeImage4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LandscapeImage5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LandscapeImage6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LandscapeImage7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LandscapeImage8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LandscapeImage9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LandscapeImage10} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  )
}
function CubeImage() {
  useEffect(() => {
    const startAnimation3 = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle(FPCSS.slideInRightAnimation, entry.isIntersecting);
      });
    };
    const observer3: any = new IntersectionObserver(startAnimation3);
    const options3 = { root: null, rootMargin: '0px', threshold: 1 };
    const elements3 = document.querySelectorAll('.mySwiper2');
    elements3.forEach(el => {
      observer3.observe(el, options3);
    });
  });

  return (
    <div style={{ width: "100%", height: "fit-content", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ width: "50%", height: "80%" }}>
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper2"
        >

          <SwiperSlide >
            <img src={SquareImage1} alt=""/>
          </SwiperSlide>
          <SwiperSlide >
            <img src={SquareImage2} alt=""/>
          </SwiperSlide>
          <SwiperSlide >
            <img src={SquareImage3} alt=""/>
          </SwiperSlide>
          <SwiperSlide >
            <img src={SquareImage4} alt=""/>
          </SwiperSlide>
          <SwiperSlide >
            <img src={SquareImage5} alt=""/>
          </SwiperSlide>
          <SwiperSlide >
            <img src={SquareImage6} alt=""/>
          </SwiperSlide>
          <SwiperSlide >
            <img src={SquareImage7} alt=""/>
          </SwiperSlide>
          <SwiperSlide >
            <img src={SquareImage8} alt=""/>
          </SwiperSlide>
          <SwiperSlide >
            <img src={SquareImage9} alt=""/>
          </SwiperSlide>
          <SwiperSlide >
            <img src={SquareImage10} alt=""/>
          </SwiperSlide>
          <SwiperSlide >
            <img src={SquareImage11} alt=""/>
          </SwiperSlide>
          <SwiperSlide >
            <img src={SquareImage12} alt=""/>
          </SwiperSlide>
          <SwiperSlide >
            <img src={SquareImage13} alt=""/>
          </SwiperSlide>
          <SwiperSlide >
            <img src={SquareImage14} alt=""/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

  )
}

function ContactMe() {
  return (
    <div id="section5" style={{ width: "100%", height: "40vw", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "80%" }}>
        <div className={FPCSS.aboutMeTitleText + " " + FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
          Contact
        </div>
        <div style={{ paddingTop: "1em" }}>
          <div className={FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
            🏠 Address
          </div>
          <div className={FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
            currently not available
          </div>

        </div>
        <div style={{ paddingTop: "1em" }}>
          <div className={FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
            📞 Phone
          </div>
          <div className={FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
            currently not available
          </div>


        </div>
        <div style={{ paddingTop: "1em" }}>
          <div className={FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
            📧 Email
          </div>
          <div className={FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}><a className={FPCSS['font-25px'] + " " + FPCSS['font-color']} href="mailto:hoong.970912@hotmail.com">
            hoong.970912@hotmail.com
          </a></div>
        </div>

      </div>

    </div>

  )
}

function FrontPage() {
  const isDarkTheme = useSelector((state: any) => state.appBev.isDarkTheme)

  return (
    <div className={isDarkTheme ? FPCSS['parent-isDark'] : FPCSS['parent-isLight']} style={{ display: "flex", width: "100%", height: "100%", position: "relative" }}>
      <LightDarkIcon />
      <NavigationDrawer />
      <div className={FPCSS.bannerImg} style={{}}>
        <Header />
        <div style={{ position: "relative", top: "-0.5vw" }}>
          <LoadingBar />
        </div>

        <AboutMe />
        <LoadingBar />
        <SkillSection />
        <LoadingBar />
        
        <Tictactoe />
        <LoadingBar/>
        <Calculator/>
        <LoadingBar />
        <BlenderImage />
        <CubeImage />
        <LoadingBar />
        <ContactMe />
      </div>
    </div>

  );
}


export default FrontPage;
