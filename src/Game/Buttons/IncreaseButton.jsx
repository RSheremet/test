import React from 'react';
import style from './Buttons.module.css';

class IncreaseButton extends React.Component {

    render = () => {

        let clickPlusOne = this.props.clickPlusOne
        let num = this.props.number
        let disabled = num >= 5 ? 'disabled' : ''


        return (
            <button ref={this.props.buttonIncrease} onClick={clickPlusOne} className={style.buttonPut} disabled={disabled}>
                inc
            </button>
        );
    }
}
export default IncreaseButton;