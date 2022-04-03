
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FPCSS from '../css/front-page.module.css';
import { changeValueOfBox } from '../reducer/TicTacToeRed';

function Tictactoe() {
    const r1c1 = useSelector((state: any) => state.tactactoe.r1c1);
    const r1c2 = useSelector((state: any) => state.tactactoe.r1c2);
    const r1c3 = useSelector((state: any) => state.tactactoe.r1c3);
    const r2c1 = useSelector((state: any) => state.tactactoe.r2c1);
    const r2c2 = useSelector((state: any) => state.tactactoe.r2c2);
    const r2c3 = useSelector((state: any) => state.tactactoe.r2c3);
    const r3c1 = useSelector((state: any) => state.tactactoe.r3c1);
    const r3c2 = useSelector((state: any) => state.tactactoe.r3c2);
    const r3c3 = useSelector((state: any) => state.tactactoe.r3c3);
    const turn = useSelector((state: any) => state.tactactoe.turn);
    const dispatch = useDispatch();

    // 1= X, 2=O

    function TicTacToeResult(){
        if(r1c1===1 && r1c2===1 && r1c3===1){
            return 1;
        }else if(r2c1===1 && r2c2===1 && r2c3===1){
            return 1;
        }else if(r3c1===1 && r3c2===1 && r3c3===1){
            return 1;
        }else if(r1c1===1 && r2c1===1 && r3c1===1){
            return 1;
        }else if(r1c2===1 && r2c2===1 && r3c2===1){
            return 1;
        }else if(r1c3===1 && r2c3===1 && r3c3===1){
            return 1;
        }

        else if(r1c1===2 && r1c2===2 && r1c3===2){
            return 2;
        }else if(r2c1===2 && r2c2===2 && r2c3===2){
            return 2;
        }else if(r3c1===2 && r3c2===2 && r3c3===2){
            return 2;
        }else if(r1c1===2 && r2c1===2 && r3c1===2){
            return 2;
        }else if(r1c2===2 && r2c2===2 && r3c2===2){
            return 2;
        }else if(r1c3===2 && r2c3===2 && r3c3===2){
            return 2;
        }
        
     
    }

    function CrossCircle(value: number, boxNumber: number) {
        return (

            <div className={FPCSS.tictactocSmallSquare} onClick={() => dispatch(changeValueOfBox(boxNumber))}>
                <div className={FPCSS.tictactocCrossCircle}>
                    {value === 1 ? "X" : value === 2 ? "O" : ""}

                </div>
            </div>
        )

    }

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center",flexDirection:"column" }}>
            <div>
               {turn===1?"X":"O"} turn
            </div>
            <div className={FPCSS.tictactocContainer}>
                <div className={FPCSS.tictactocBigSquare}>
                    <div className={FPCSS.tictactocRow}>
                        {CrossCircle(r1c1, 0)}
                        {CrossCircle(r1c2, 1)}
                        {CrossCircle(r1c3, 2)}
                    </div>
                    <div className={FPCSS.tictactocRow}>
                        {CrossCircle(r2c1, 3)}
                        {CrossCircle(r2c2, 4)}
                        {CrossCircle(r2c3, 5)}
                    </div>
                    <div className={FPCSS.tictactocRow}>
                        {CrossCircle(r3c1, 6)}
                        {CrossCircle(r3c2, 7)}
                        {CrossCircle(r3c3, 8)}
                    </div>


                </div>

            </div>
            <div>
               {TicTacToeResult()===1?"X win":TicTacToeResult()===2?"O win":""} 
            </div>
        </div>

    );
}

export default Tictactoe;
