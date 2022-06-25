import React from 'react';
import styles from "./Banner.module.css"
import banner from "../images/banner.jpg"
const Banner = () => {
    return (
        
            <div className={styles.container}>
                <img src={banner} alt="banner"></img>
                <div className={styles.textContainer}>
                    <h1>Wolpou</h1>
                    <p>
                        I'm learning <div className={styles.span}>react.js</div>
                    </p>
                </div>
            </div>
        
    );
};

export default Banner;