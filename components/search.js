import React, { Component } from 'react';
import styles from "./search.module.css"
class search extends Component {
    render() {
        return (
            <div className={styles.container}>
                <p>Search what you want</p>
                <input placeholder='Search...'/>
            </div>
        );
    }
}

export default search;