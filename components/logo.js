import React from 'react';
import styles from './logo.module.css';
import xia from '../images/xia.jpg';
import iphone from '../images/iph.jpg';
import samsung from '../images/Samsung.png';
const logo = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us?!</h3>
            <div>
                <img src={xia} alt="xiaomi"/>
                <img src={iphone} alt="iphone"/>
                <img src={samsung} alt="samsung"/>
            </div>
        </div>
    );
};

export default logo;