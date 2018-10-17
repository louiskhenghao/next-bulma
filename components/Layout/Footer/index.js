import React, { PureComponent } from 'react';
import styles from './styles';

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content">
            <div className="columns">
              <div className="column">
                <h2 className="title is-2">Lava X</h2>
                <h4 className="subtitle is-4">NextJs with Bulma Starter</h4>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </footer>
    );
  }
}
