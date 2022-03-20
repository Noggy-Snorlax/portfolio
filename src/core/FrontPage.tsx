
import { useState } from 'react';
import banner from "../img/CoverPage.png";
import "../css/front-page.css";
import Button from '@mui/material/Button';

function FrontPage() {

  return (
    <div  className="banner-img" style={{zIndex:1,position:"absolute",height:"100%",width:"100%",background:"black",top:"0px"}}>
    <Header/>
    <Button variant="contained">Contained</Button>
    </div>
  );
}

function Header() {
 
  return (
   
      <div style={{position:"relative"}}>
        <div style={{position:"absolute",left:"10%",top:"20%"}}>
          <div>
            Welcome
          </div>
          <div>
            to my portfolio
          </div>
        </div>
        
        <img src={banner} alt="" style={{width:"100%"}}/>
    </div>
  );
}

export default FrontPage;
