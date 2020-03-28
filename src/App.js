import React from 'react';
import style from './App.module.css';

import Game from "./Game/Game";

class App extends React.Component {

    buttonIncrease = React.createRef();


    state = {
        number: 0,
    };

    clickPlusOne = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    clickReset = () => {
        this.setState({
            number: 0
        })
    }


    render = () => {

        return (
           <div className={style.App}>
               <Game
                   number={this.state.number}
                   buttonIncrease={this.buttonIncrease}
                   clickPlusOne={this.clickPlusOne}
                   clickReset={this.clickReset}
               />
           </div>
        );
    }
}

export default App;

