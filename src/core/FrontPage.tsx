
import { useEffect, useState } from 'react';
import LightBanner from "../img/LightXmas.png";
import DarkBanner from "../img/NightXmas.png";
import "../css/front-page.css";
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../reducer/Counter'
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { changeTheme } from '../reducer/AppBev';
import logo from '.././logo.svg';
import { ReactComponent as ReactLogo } from '.././logo.svg';

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
  const isDarkTheme = useSelector((state: any) => state.appBev.isDarkTheme)

  return (

    <div style={{ position: "relative", height: "auto", width: "100%", overflow: "hidden",display:"flex",alignItems:"center",justifyContent:"center" }}>
      <div style={{ position: "absolute", left: "10%", top: "20%", zIndex: 1 }}>
        <div className={"font-25px font-bold font-color"}>
          Welcome~
        </div>
        <div className={"font-25px font-bold font-color"}>
          To My Portfolio.
        </div>
        <div className={"font-25px font-bold font-color"} style={{ width: "auto", height: "auto", paddingTop: "1em", paddingBottom: "1em" }}>
          <div>
            This Page Is Created Using React Redux Framework.
          </div>
        </div>
        <div className={"react-icon-div"} style={{}}>
          <ReactLogo className="App-logo" />
        </div>
      </div>
      <img src={DarkBanner} alt="" style={{ zIndex: 0, height: "auto", width: "100%", position: "absolute", transition: "2s", opacity: isDarkTheme ? 1 : 0 }} />
      <img src={LightBanner} alt="" style={{ zIndex: 0, width: "100%", transition: "2s", opacity: isDarkTheme ? 0 : 1 }} />




    </div>
  );
}

function NavigationDrawer() {
  return (
    <div style={{ width: "20%", height: "100%", backgroundColor: "whitesmoke" }}>

    </div>
  )
}

function LightDarkIcon() {
  const isDarkTheme = useSelector((state: any) => state.appBev.isDarkTheme)
  const dispatch = useDispatch()
  return (
    <IconButton className="theme-icon-div" onClick={() => { dispatch(changeTheme()) }} aria-label="delete" style={{ position: "absolute", right: "1vw", top: "1vw", zIndex: 3 }}>
      {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}

    </IconButton>
  )
}

function LoadingBar() {

  useEffect(() => {

    const startAnimation2 = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle("incrase-bar", entry.isIntersecting);
      });
    };
    const observer2: any = new IntersectionObserver(startAnimation2);
    const options2 = { root: null, rootMargin: '0px', threshold: 1 };
    const elements2 = document.querySelectorAll('.bar-test');
    elements2.forEach(el => {
      observer2.observe(el, options2);
    });
  });
  return (

    <div className="bar-test">

    </div>

  )
}

function AboutMe() {
  return (
    <div style={{ height: "30vw" }}>
      <div className={"font-30px font-bold font-color"} style={{ height: "5vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
        About Me
      </div>
      <div className={"font-30px font-bold font-color"} style={{ display: "flex", padding: "1vw" }}>
        <div style={{ width: "20%", height: "auto", backgroundColor: "yellow",display:"flex",alignItems:"center",justifyContent:"center" }}>
          <img src='https://drive.google.com/uc?export=view&id=1_OHjWPiicthLQa9xOYdGELnPFg3zsim8' alt="" style={{ width: "100%", height: "auto" }} />

        </div>
        <div className={"font-20px font-bold font-color"} style={{ width: "80%", display:"flex", justifyContent: "center",alignItems:"center"}}>
          <div style={{width:"90%"}}>
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

function FrontPage() {
  const isDarkTheme = useSelector((state: any) => state.appBev.isDarkTheme)
  return (
    <div className={isDarkTheme ? "parent-isDark" : "parent-isLight"} style={{ display: "flex", width: "100%", height: "100%", position: "relative" }}>
      <LightDarkIcon />
      <NavigationDrawer />
      <div className="banner-img" style={{ zIndex: 1, position: "relative", height: "100%", width: "80%", top: "0px", overflow: "auto" }}>
        <Header />
        <div style={{ position: "relative", top: "-0.5vw" }}>
          <LoadingBar />
        </div>

        <AboutMe />
      </div>
    </div>

  );
}


export default FrontPage;
