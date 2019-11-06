/* eslint-disable linebreak-style */
import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    icon: settings.defaultCardIcon,
  }

  render() {
    const {title} = this.props;
    return (
      <p className={styles.component}>{title}</p>
    );
  }
}

export default Card;