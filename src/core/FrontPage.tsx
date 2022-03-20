
import { useState } from 'react';
import banner from "../img/CoverPage.png";
import "../css/front-page.css";
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../reducer/Counter'

function Counter() {
  const count = useSelector((state:any) => state.counter.value)
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
        <div style={{color:"white"}}>{count}</div>
      </div>
    </div>
  )
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

function FrontPage() {

  return (
    <div  className="banner-img" style={{zIndex:1,position:"absolute",height:"100%",width:"100%",background:"black",top:"0px"}}>
    <Header/>
    <Counter/>
    <Button variant="contained">Contained</Button>
    </div>
  );
}

export default FrontPage;
