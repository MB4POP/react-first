import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParsel from 'react-html-parser';

const Hero = props => (  
  <header className={styles.component}>        
    <h2 className={styles.title}>{ReactHtmlParsel(props.titleText)}</h2>
    <img className={styles.image} src={props.imageHero} src='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png' />
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node,
  imageHero: PropTypes.string,
};

export default Hero;
