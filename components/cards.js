import React from 'react';
import styles from "./cards.module.css"
import Card from "./card.js"
import iphone13 from "../images/iphone13.jpg"
import iphoneSE from "../images/iphoneSE.jpg"
import S22 from "../images/S22.jpg"
import xiaomi from "../images/xiaomi.png"

const cards = () => {
    return (
        <div className={styles.container}>
            <Card image={iphone13} name="iphone13" cost="500$"/>
            <Card image={iphoneSE} name="iphoneSE" cost="400$"/>
            <Card image={S22} name="S22" cost="450$"/>
            <Card image={xiaomi} name="xiaomi" cost="300$"/>
        </div>
    );
};

export default cards;