
import { useEffect, useState } from 'react';
import LightBanner from "../img/LightXmas.png";
import DarkBanner from "../img/NightXmas.png";
import NyanCat from "../img/b7a.gif";
import frontPageCSS from '../css/front-page.module.css'; 
import '../css/front-page.module.css'; 
import rotationCSS from '../css/phone-rotation.module.css'; 
import skillSectionCSS from '../css/skill-section.module.css'; 
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
import { openCloseDialog,changeImageURL } from '../reducer/ExpandDialog';

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
  const dispatch = useDispatch()
  return (

    <div style={{ position: "relative", height: "auto", width: "100%", overflow: "hidden",display:"flex",alignItems:"center",justifyContent:"center" }}>
      <div style={{ position: "absolute", left: "10%", top: "20%", zIndex: 1 }}>
        <div className={frontPageCSS['font-25px']+" "+frontPageCSS['font-bold'] +" "+frontPageCSS['font-color']}>
          Welcome~
        </div>
        <div className={frontPageCSS['font-25px']+" "+frontPageCSS['font-bold'] +" "+frontPageCSS['font-color']}>
          To My Portfolio.
        </div>
        <div className={frontPageCSS['font-25px']+" "+frontPageCSS['font-bold'] +" "+frontPageCSS['font-color']} style={{ width: "auto", height: "auto", paddingTop: "1em", paddingBottom: "1em" }}>
          <div>
            This Page Is Created Using React Redux Framework.
          </div>
        </div>
        
      </div>
      <div className={frontPageCSS.reactIconDiv} onClick={() => { dispatch(changeTheme()) }} style={{}}>
          <ReactLogo className={frontPageCSS['App-logo']} />
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
    <IconButton className={frontPageCSS['theme-icon-div']} onClick={() => { dispatch(changeTheme()) }} aria-label="delete" style={{ position: "absolute", right: "1vw", top: "1vw", zIndex: 3 }}>
      {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}

    </IconButton>
  )
}

function LoadingBar() {

  useEffect(() => {

    const startAnimation2 = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle(frontPageCSS['incrase-bar'], entry.isIntersecting);
      });
    };
    const observer2: any = new IntersectionObserver(startAnimation2);
    const options2 = { root: null, rootMargin: '0px', threshold: 1 };
    const elements2 = document.querySelectorAll("."+frontPageCSS['bar-test']);
    elements2.forEach(el => {
      observer2.observe(el, options2);
    });
  });
 
  return (
    
    <div className={frontPageCSS['bar-test']}>
        <img src={NyanCat} alt="" style={{ width: "auto", height: "200%",position:"relative",left:"2vw" }} />
    </div>

  )
}

function AboutMe() {
  const dispatch = useDispatch();
  return (
    <div style={{ height: "30vw" }}>
      <div className={frontPageCSS['font-30px']+" "+frontPageCSS['font-bold'] +" "+frontPageCSS['font-color']} style={{ height: "5vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
        About Me
      </div>
      <div className={"font-30px font-bold font-color"} style={{ display: "flex", padding: "1vw" }}>
        <div className={frontPageCSS.aboutMe} style={{ width: "20%", height: "auto", backgroundColor: "yellow",display:"flex",alignItems:"center",justifyContent:"center" }}>
          <img onClick={()=>{dispatch(openCloseDialog());dispatch(changeImageURL('https://drive.google.com/uc?export=view&id=1_OHjWPiicthLQa9xOYdGELnPFg3zsim8'))}} src='https://drive.google.com/uc?export=view&id=1_OHjWPiicthLQa9xOYdGELnPFg3zsim8' alt="" style={{ width: "100%", height: "auto" }} />

        </div>
        <div className={frontPageCSS['font-20px']+" "+frontPageCSS['font-bold'] +" "+frontPageCSS['font-color']} style={{ width: "80%", display:"flex", justifyContent: "center",alignItems:"center"}}>
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

function SkillSection() {
  const dispatch = useDispatch();
  return (
    <div style={{ height: "30vw" }}>
      <div className={frontPageCSS['font-30px']+" "+frontPageCSS['font-bold'] +" "+frontPageCSS['font-color']} style={{ height: "5vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
        Skill
      </div>
      <div className={"font-30px font-bold font-color"} style={{ display: "flex", padding: "1vw" }}>
      
        <div className={frontPageCSS['font-20px']+" "+frontPageCSS['font-bold'] +" "+frontPageCSS['font-color']} style={{ width: "100%", display:"flex", justifyContent: "center",alignItems:"center"}}>
        <div
          style={{height: "32vw", position: "relative", width: "100%", display: "flex",alignItems: "center",justifyContent: "center"}}>
        <div
            style={{width: "94%",borderRadius: "0.5vw",overflow: "hidden",boxShadow:"0 8px 8px -4px rgb(218, 255, 115),0 3px 10px rgb(0 0 0 / 0.5)"}}>
            <div className="font-25px font-bold"
                style={{padding: "1%", color:"white", backgroundImage: "linear-gradient(to right,#949c20, #6c7401);text-shadow: 1px 1px 1px black"}}>
                Skill Rating
            </div>
            <div className="font-20px"
                style={{padding: "1%",backgroundColor: "#f9f9f9",height: "20vw",maxHeight: "20vw",display: "flex"}}>
                <div style={{width: "10%",height: "100%",maxHeight: "100%"}}>
                    <div className="font-20px"
                        style={{height: "14.28%",display: "flex",justifyContent: "flex-end",alignItems: "center",paddingRight: "1em"}}>
                        html</div>
                    <div className="font-20px"
                       style={{height: "14.28%",display: "flex",justifyContent: "flex-end",alignItems: "center",paddingRight: "1em"}}>
                        php</div>
                    <div className="font-20px"
                        style={{height: "14.28%",display: "flex",justifyContent: "flex-end",alignItems: "center",paddingRight: "1em"}}>
                        JavaScript</div>
                    <div className="font-20px"
                        style={{height: "14.28%",display: "flex",justifyContent: "flex-end",alignItems: "center",paddingRight: "1em"}}>
                        TypeScript</div>
                    <div className="font-20px"
                       style={{height: "14.28%",display: "flex",justifyContent: "flex-end",alignItems: "center",paddingRight: "1em"}}>
                        C#</div>
                    <div className="font-20px"
                       style={{height: "14.28%",display: "flex",justifyContent: "flex-end",alignItems: "center",paddingRight: "1em"}}>
                        Java</div>
                    <div className="font-20px"
                       style={{height: "14.28%",display: "flex",justifyContent: "flex-end",alignItems: "center",paddingRight: "1em"}}>
                        SQL</div>
                </div>
                <div style={{width: "95%",borderLeft: "solid 1px black",borderBottom: "solid 1px black"}}>
                    <div className="font-20px" style={{height: "14.28%",display: "flex",alignItems: "center",width: "93%"}}>
                        <div className={skillSectionCSS['bar-table']}>
                        </div>
                    </div>
                    <div className="font-20px" style={{height: "14.28%",display: "flex",alignItems: "center",width: "75%"}}>
                        <div className={skillSectionCSS['bar-table']}>
                        </div>
                    </div>
                    <div className="font-20px" style={{height: "14.28%",display: "flex",alignItems: "center",width: "80%"}}>
                        <div className={skillSectionCSS['bar-table']}>
                        </div>
                    </div>
                    <div className="font-20px" style={{height: "14.28%",display: "flex",alignItems: "center",width: "80%"}}>
                        <div className={skillSectionCSS['bar-table']}>
                        </div>
                    </div>
                    <div className="font-20px" style={{height: "14.28%",display: "flex",alignItems: "center",width: "75%"}}>
                        <div className={skillSectionCSS['bar-table']}>
                        </div>
                    </div>
                    <div className="font-20px" style={{height: "14.28%",display: "flex",alignItems: "center",width: "70%"}}>
                        <div className={skillSectionCSS['bar-table']}>
                        </div>
                    </div>
                    <div className="font-20px" style={{height: "14.28%",display: "flex",alignItems: "center",width: "40%"}}>
                        <div className={skillSectionCSS['bar-table']}>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="font-20px"
            style={{padding: "1%",backgroundColor: "#f9f9f9",height: "2vw",maxHeight: "20vw",display: "flex",paddingTop: "0%"}}>
            <div style={{width: "10%",height: "100%",maxHeight: "100%"}}>
               
            </div>
            <div style={{width: "95%",display: "flex",justifyContent: "space-evenly"}}>
                <div>10%</div>
                <div>20%</div>
                <div>30%</div>
                <div>40%</div>
                <div>50%</div>
                <div>60%</div>
                <div>70%</div>
                <div>80%</div>
                <div>90%</div>
                <div>100%</div>
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
    <div className={isDarkTheme ? frontPageCSS['parent-isDark'] : frontPageCSS['parent-isLight']} style={{ display: "flex", width: "100%", height: "100%", position: "relative" }}>
      <LightDarkIcon />
      <NavigationDrawer />
      <div className={frontPageCSS.bannerImg} style={{ }}>
        <Header />
        <div style={{ position: "relative", top: "-0.5vw" }}>
          <LoadingBar />
        </div>

        <AboutMe />
        <LoadingBar />
        <SkillSection/>
      </div>
    </div>

  );
}


export default FrontPage;
