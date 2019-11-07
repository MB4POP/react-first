/* eslint-disable linebreak-style */
import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParsel from 'react-html-parser';

const Hero = props => (  
  <header className={styles.component}>        
    <h2 className={styles.title}>{ReactHtmlParsel(props.titleText)}</h2>
    <img className={styles.image} src={ReactHtmlParsel(props.heroImage)} />
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node,
  heroImage: PropTypes.node,
};

export default Hero;
