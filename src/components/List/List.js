import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

//next step - sprawdzanie typów wartości w propsach

class List extends React.Component {
    // eslint-disable-next-line react/no-typos
    static PropTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
  }
  static defaultProps = {
    children: <p>I can do all the things!</p>,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText= {this.props.title} titleImage={this.props.titleImage}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column columnTitle='Animals'/>
          <Column columnTitle='Plants'/>
          <Column columnTitle='Minerals'/>

        </div>
      </section>
    )
  }
}

export default List;