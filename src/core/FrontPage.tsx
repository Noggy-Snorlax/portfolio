
import { useEffect, useState } from 'react';
import LightBanner from "../img/LightXmas.png";
import DarkBanner from "../img/NightXmas.png";
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
      <div style={{ display: "flex", flexDirection: "column", height: "50%", justifyContent: "space-around" }}>
        <div className={FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} onClick={() => { var element = document.getElementById("section1")!; element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }}>
          Back To Top
        </div>
        <div className={FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} onClick={() => { var element = document.getElementById("section2")!; element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }}>
          About Me
        </div>
        <div className={FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} onClick={() => { var element = document.getElementById("section3")!; element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }}>
          Skill
        </div>
        <div className={FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} onClick={() => { var element = document.getElementById("section6")!; element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }}>
          Tic Tac Toe
        </div>
        <div className={FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} onClick={() => { var element = document.getElementById("section4")!; element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }}>
          Art Gallary
        </div>
        <div className={FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} onClick={() => { var element = document.getElementById("section5")!; element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }}>
          Contact Me
        </div>
      </div>

    </div>
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
    const elements3 = document.querySelectorAll('.' + FPCSS.aboutMeImg1 + ', .' + FPCSS.aboutMeImg1TextDiv + ', .' + FPCSS.aboutMeTitleText);
    elements3.forEach(el => {
      observer3.observe(el, options3);
    });
  });





  return (
    <div id="section2" style={{ height: "42vw" }}>
      <div className={FPCSS.aboutMeTitleText + " " + FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
        About Me
      </div>
      <div className={"font-30px font-bold font-color"} style={{ display: "flex", padding: "1vw" }}>
        <div className={FPCSS.aboutMeImg1} style={{}}>
          <img onClick={() => { dispatch(openCloseDialog()); dispatch(changeImageURL('https://drive.google.com/uc?export=view&id=1_OHjWPiicthLQa9xOYdGELnPFg3zsim8')) }} src='https://drive.google.com/uc?export=view&id=1_OHjWPiicthLQa9xOYdGELnPFg3zsim8' alt="" style={{ width: "100%", height: "auto" }} />

        </div>
        <div className={FPCSS['font-20px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} style={{ width: "80%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className={FPCSS.aboutMeImg1TextDiv}>
            <div>
              <div>
                Hi there, I am graduate student from UKM major in Software Engineer (Multimedia).
              </div>
              <div>
                Currently have an 1 and 1/2 year of working experience as a front-end web developer and 6 month of internship QA experience.
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
                <div>- Exercising to keep a healthy lift style 😊.</div>
                <div>- Will try and hack or exploit some website once in awhile.</div>
              </div>
              <div>
                <div style={{ paddingTop: "1em" }}> Special about me :</div>
                <div>- Join ROTU during University. Yup, I am an army officer.🗡️</div>
                <div>- Representative for my University to join programming competition(ICPC).💻</div>
              </div>

            </div>
            <div style={{ paddingTop: "1em" }}>
              <Button variant='contained' onClick={() => { var element = document.getElementById("section5")!; element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }}>Contact Me</Button>
            </div>

          </div>
        </div>
        <div className={FPCSS.aboutMeImg2} style={{}}>
          <img onClick={() => { dispatch(openCloseDialog()); dispatch(changeImageURL('https://drive.google.com/uc?export=view&id=1ArSBU-NnnunC-js1szu2vEQMjDeRg9mX')) }} src='https://drive.google.com/uc?export=view&id=1ArSBU-NnnunC-js1szu2vEQMjDeRg9mX' alt="" style={{ width: "100%", height: "auto" }} />

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
      <div className={FPCSS.skillTitle + " " + FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} style={{}}>
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
                    Frigma</div>
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
        Art Gallary
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
          <img src="https://drive.google.com/uc?export=view&id=1lkXBbHEHOs8Qw8wh9sf6kcAw0ZdLaEOJ" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://drive.google.com/uc?export=view&id=11wrw_0mlbNK9OGdolXuEUAEYalwrd64Y" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://drive.google.com/uc?export=view&id=1U4tV9QJVmruNekSKgMti_wnEdml3Sreo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://drive.google.com/uc?export=view&id=1y6k5Gaj6tqvfo8FJMpe5R-KOO_vndVhh" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://drive.google.com/uc?export=view&id=12QwHr66hvNOmBbYbjdvrg4NbavbbcAcf" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://drive.google.com/uc?export=view&id=1wAuWqiNu3Y6XP9fIo1Wk95VHec3Zz2ba" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://drive.google.com/uc?export=view&id=1XaPCNLpIDKXFCXt-qHFQ8HLFskDKkGYA" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://drive.google.com/uc?export=view&id=1r6jwVDbB7iLdNR9gmSTmxLQ4fHWSwWpS" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://drive.google.com/uc?export=view&id=1A5c6S4xowQBGa3m6kvOFJ5r8DTccsAh3" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://drive.google.com/uc?export=view&id=1CIwgO2zUG90TVo7pQ1mXjWQH0550VvqA" />
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
    <div style={{ width: "100%", height: "fit-content", display: "flex", alignItems: "center", justifyContent: "center",paddingTop:"2em",paddingBottom:"2em" }}>
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
            <img src="https://drive.google.com/uc?export=view&id=1JpQ6ttp_QjrKB4rpW5zvaXQwQorwY50R" />
          </SwiperSlide>
          <SwiperSlide >
            <img src="https://drive.google.com/uc?export=view&id=1_OHjWPiicthLQa9xOYdGELnPFg3zsim8" />
          </SwiperSlide>
          <SwiperSlide >
            <img src="https://drive.google.com/uc?export=view&id=1sQOaAWGvHw8A9n5oenDKeNbkxaJvrajw" />
          </SwiperSlide>
          <SwiperSlide >
            <img src="https://drive.google.com/uc?export=view&id=1AMCrDbczXLaIP5JFEQloW8pUeGIBYOHG" />
          </SwiperSlide>
          <SwiperSlide >
            <img src="https://drive.google.com/uc?export=view&id=1WdGCCUanhJTY3GNk90Kbsb5yjk8q77cj" />
          </SwiperSlide>
          <SwiperSlide >
            <img src="https://drive.google.com/uc?export=view&id=1ld3TIjpanoaQsCRxlGy6wYMf8re_Gl2U" />
          </SwiperSlide>
          <SwiperSlide >
            <img src="https://drive.google.com/uc?export=view&id=1ZPyOf8WuFL-6e3_c7i6TOhDHE-zeo7Gl" />
          </SwiperSlide>
          <SwiperSlide >
            <img src="https://drive.google.com/uc?export=view&id=1c3-mRbijK_duLiK4g-jimUDcPNY5Tp9E" />
          </SwiperSlide>
          <SwiperSlide >
            <img src="https://drive.google.com/uc?export=view&id=1ArSBU-NnnunC-js1szu2vEQMjDeRg9mX" />
          </SwiperSlide>
          <SwiperSlide >
            <img src="https://drive.google.com/uc?export=view&id=1I1_9ZznrbGbqVIe7lUZmHvXUAIj8W0hZ" />
          </SwiperSlide>
          <SwiperSlide >
            <img src="https://drive.google.com/uc?export=view&id=1mG4T-ZCoLTDPn4V4DehyPBVUHr-amowl" />
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
        <div style={{paddingTop:"1em"}}>
          <div className={FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
          🏠 Address
            </div>
          <div className={FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
            Not provided because of privacy
            </div>

        </div>
        <div style={{paddingTop:"1em"}}>
          <div className={FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
          📞 Phone
             </div>
          <div className={FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
            +6017-379 4661
            </div>


        </div>
        <div style={{paddingTop:"1em"}}>
          <div className={FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
          📧 Email
            </div>
          <div className={FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}><a className={FPCSS['font-25px']  + " " + FPCSS['font-color']} href="mailto:hoong.970912@hotmail.com">
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
