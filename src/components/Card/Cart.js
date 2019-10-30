import React from 'react';
import styles from './Cart.scss';
import PropTypes from 'prop-types';

class Cart extends React.Component {

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>       
      </section>
    );
  }
}
  
  Cart.propTypes = {
    title: PropTypes.node,  
  };
  
  export default Cart;