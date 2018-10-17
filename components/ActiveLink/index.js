import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import classnames from 'classnames';
import Link from 'next/link';

class ActiveLink extends PureComponent {
  static propTypes = {
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    activeClass: PropTypes.string.isRequired,
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
    title: PropTypes.string,
  };

  render() {
    const {
      alt,
      children,
      router,
      href,
      prefetch,
      className,
      title,
      activeClass,
      onClick,
      ...restProps
    } = this.props;
    const newClassNames = classnames(
      { active: href === router.pathname },
      className || {}
    );
    let hrefProps = !!alt ? { alt } : {};
    hrefProps = !!onClick ? Object.assign({ onClick }, hrefProps) : hrefProps;
    return (
      <Link href={href} prefetch={!!prefetch} {...restProps}>
        <a className={newClassNames} {...hrefProps}>
          {!!title ? title : children}
        </a>
      </Link>
    );
  }
}

export default withRouter(ActiveLink);
