import React from 'react';
import style from './Game.module.css';
import IncreaseButton from "./Buttons/IncreaseButton";
import ResetButton from "./Buttons/Reset";

class Game extends React.Component {
    render = () => {

        let num = this.props.number
        let maxNumberClass = num === 5 ? `${style.display} ${style.maxNumber}` : `${style.display}`


        return (
            <div className={style.theGame_wrapper}>
                <div className={maxNumberClass}>
                    <span>{num}</span>
                </div>
                <div className={style.buttons_wrapper}>
                    <IncreaseButton buttonIncrease={this.props.buttonIncrease} clickPlusOne={this.props.clickPlusOne} number={this.props.number} />
                    <ResetButton clickReset={this.props.clickReset} number={this.props.number} />
                </div>
            </div>
        );
    }
}
export default Game;