import React, { PureComponent } from 'react';
import styles from './styles';

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home full-height-min flex-vertical-center">
        <style jsx>{styles}</style>
      </div>
    );
  }
}
