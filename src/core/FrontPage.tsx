
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

    <div style={{ position: "relative", height: "auto", width: "100%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className={FPCSS.pageHeaderTextDiv} style={{  }}>
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
  return (
    <div style={{ width: "20%", height: "100%", backgroundColor: "whitesmoke" }}>
      asd
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
    const elements3 = document.querySelectorAll('.' + FPCSS.aboutMeImg1+', .'+FPCSS.aboutMeImg1TextDiv+', .'+FPCSS.aboutMeTitleText);
    elements3.forEach(el => {
      observer3.observe(el, options3);
    });
  });

  



  return (
    <div style={{ height: "30vw" }}>
      <div className={FPCSS.aboutMeTitleText+" "+ FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
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

            <Button variant='contained'>Contact Me</Button>
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
    <div>
      <div className={FPCSS.skillTitle+" "+FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} style={{  }}>
        Skill
      </div>
      <div className={FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} style={{ display: "flex", padding: "1vw" }}>

        <div className={FPCSS.skillSectionBox+" "+FPCSS['font-20px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} style={{ }}>
          <div className={FPCSS.skillSectionBoxDiv}>
            <div className={FPCSS.skillSectionLayer3}>
              <div className={FPCSS.skillSectionBoxTitle+" "+FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']}>
                Skill Rating
              </div>
              <div className={FPCSS.skillSectionBarDiv+" "+FPCSS['font-20px']+ " " + FPCSS['font-color']} >
                <div className={FPCSS.skillSection_X_Lable_Div} style={{ }}>
                  <div className={FPCSS.skillSection_X_Lable_Text+" "+FPCSS['font-20px']+ " " + FPCSS['font-color']}>
                    html</div>
                  <div className={FPCSS.skillSection_X_Lable_Text+" "+FPCSS['font-20px']+ " " + FPCSS['font-color']}>
                    php</div>
                  <div className={FPCSS.skillSection_X_Lable_Text+" "+FPCSS['font-20px']+ " " + FPCSS['font-color']}>
                    JavaScript</div>
                  <div className={FPCSS.skillSection_X_Lable_Text+" "+FPCSS['font-20px']+ " " + FPCSS['font-color']}>
                    TypeScript</div>
                  <div className={FPCSS.skillSection_X_Lable_Text+" "+FPCSS['font-20px']+ " " + FPCSS['font-color']}>
                    C#</div>
                  <div className={FPCSS.skillSection_X_Lable_Text+" "+FPCSS['font-20px']+ " " + FPCSS['font-color']}>
                    Java</div>
                  <div className={FPCSS.skillSection_X_Lable_Text+" "+FPCSS['font-20px']+ " " + FPCSS['font-color']}>
                    SQL</div>
                  </div>
                <div style={{ width: "95%", borderLeft: "solid 1px black", borderBottom: "solid 1px black" }}>
                  <div className={FPCSS.skillSection_X_Value+" "+FPCSS['font-20px']+ " " + FPCSS['font-color']} style={{width: "93%" }}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value+" "+FPCSS['font-20px']+ " " + FPCSS['font-color']} style={{width: "75%"}}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value+" "+FPCSS['font-20px']+ " " + FPCSS['font-color']} style={{width: "80%"}}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value+" "+FPCSS['font-20px']+ " " + FPCSS['font-color']} style={{width: "80%"}}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value+" "+FPCSS['font-20px']+ " " + FPCSS['font-color']} style={{width: "75%"}}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value+" "+FPCSS['font-20px']+ " " + FPCSS['font-color']} style={{width: "70%"}}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                  <div className={FPCSS.skillSection_X_Value+" "+FPCSS['font-20px']+ " " + FPCSS['font-color']} style={{width: "40%"}}>
                    <div className={FPCSS['bar-table']}>
                    </div>
                  </div>
                </div>

              </div>
              <div className={FPCSS.skillSection_Y_Lable_Div+" "+FPCSS['font-20px']}>
                <div style={{ width: "10%", height: "100%", maxHeight: "100%" }}>

                </div>
                <div style={{ width: "95%", display: "flex", justifyContent: "space-evenly" }}>
                  <div className={FPCSS['font-20px']+ " " + FPCSS['font-color']}>10%</div>
                  <div className={FPCSS['font-20px']+ " " + FPCSS['font-color']}>20%</div>
                  <div className={FPCSS['font-20px']+ " " + FPCSS['font-color']}>30%</div>
                  <div className={FPCSS['font-20px']+ " " + FPCSS['font-color']}>40%</div>
                  <div className={FPCSS['font-20px']+ " " + FPCSS['font-color']}>50%</div>
                  <div className={FPCSS['font-20px']+ " " + FPCSS['font-color']}>60%</div>
                  <div className={FPCSS['font-20px']+ " " + FPCSS['font-color']}>70%</div>
                  <div className={FPCSS['font-20px']+ " " + FPCSS['font-color']}>80%</div>
                  <div className={FPCSS['font-20px']+ " " + FPCSS['font-color']}>90%</div>
                  <div className={FPCSS['font-20px']+ " " + FPCSS['font-color']}>100%</div>
                </div>

              </div>
            </div>
          </div>
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
        <Tictactoe/>
      </div>
    </div>

  );
}


export default FrontPage;
