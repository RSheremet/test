import React from 'react';
import style from './Buttons.module.css';

class ResetButton extends React.Component {

    render = () => {

        let clickReset = this.props.clickReset
        let num = this.props.number
        let disabled = num > 0 ? '' : 'disabled'

        return (
            <button className={style.buttonPut + ' ' + style.nonactive} onClick={clickReset} disabled={disabled}>
                reset
            </button>
        );
    }
}
export default ResetButton;