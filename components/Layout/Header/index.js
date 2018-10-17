import React, { Component } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import ActiveLink from 'components/ActiveLink';
import styles from './styles';
import LogoDark from 'assets/Logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <nav className={classnames('navbar', 'is-transparent')}>
          <div className="navbar-brand">
            <Link href="/">
              <a className="navbar-item">
                <img
                  src={LogoDark}
                  alt="LavaX Technologies Sdn Bhd"
                  width="112"
                  height="28"
                />
              </a>
            </Link>
            <div className="navbar-burger burger">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={'navbar-menu'}>
            <div className="navbar-end">
              <ActiveLink
                href="/test"
                activeClass="active"
                className="navbar-item"
                alt="test page"
                title="Test Page"
              />
            </div>
          </div>
        </nav>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default Header;
