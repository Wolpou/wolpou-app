import React, { Component } from 'react';
import styles from "./card.module.css";
import down from "../images/down.svg";
import up from "../images/up.svg";

class card extends Component {
    constructor(){
        super();
        this.state = {
            counter :0 ,
        }
    }
    downHandler  = () => {
    if (this.state.counter >= 1 ) {
        this.setState(prevState => ({
            counter : prevState.counter -1 ,
        }))
    }
    }
    upHandler = () => {
        this.setState(prevState => ({
          counter:prevState.counter +1 ,  
        }))
        
    }
    render() {
        const {image , name ,cost} = this.props ;
        const {counter}=this.state;
        return (
            <div className={styles.container}>
             <img src={image}></img>
             <h3>{name}</h3>
             <p>{cost}</p>

             <div className={styles.counter}>
                 <img src={down} alt="arrow"  className={this.state.counter ? "" : styles.deactive} onClick={this.downHandler}></img>
                 <span>{counter}</span>
                 <img src={up} alt="arrow" onClick={this.upHandler}></img>
             </div>
         </div>
        );
    }
}

export default card;