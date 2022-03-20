
import { useEffect, useState } from 'react';
import banner from "../img/CoverPage.png";
import "../css/phone-rotation.css";
import Button from '@mui/material/Button';
import phoneIcon from "../img/phone-rotation-icon.png"
import FrontPage from './FrontPage';

function Rotation() {
    const [isDisplay, setIsDisplay] = useState(window.innerWidth < window.innerHeight?false:true);
    window.addEventListener('resize', () => {
        if (window.innerWidth < window.innerHeight) {
            setIsDisplay(false);
        } else {
            setIsDisplay(true);
        }
    });

  
    return (
        <>
            {isDisplay ? (
                <>
                    <div className="screen-rotate-div" style={{}}>
                        <img className="phone-icon" src={phoneIcon} alt="" style={{ height: "194px", width: "auto" }} />
                        <div style={{ fontSize: "16px" }}>
                            Please rotate your device for better display.
                        </div>
                        <Button onClick={()=>setIsDisplay(false)} variant="contained">Proceed with this screen</Button>
                    </div>
                </>)
                :
                (<>
                <FrontPage/>
                </>)

            }

        </>

    );
}

export default Rotation;
