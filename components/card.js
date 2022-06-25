import React, { Component } from 'react';
import styles from "./card.module.css"
class card extends Component {
    render() {
        const {image , name ,cost} = this.props ;
        return (
            <div className={styles.container}>
             <img src={image}></img>
             <h3>{name}</h3>
             <p>{cost}</p>
         </div>
        );
    }
}

export default card;