import React from 'react';
import styles from './Hero.scss';

class Hero extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>Thinks to do</h2>
        <img class={styles.image} alt= "" src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"></img>
      </header>
    )
  }
}

export default Hero;