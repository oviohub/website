import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Button } from '@material-ui/core';

const LinkButton = forwardRef(
  ({ children, href, path, rel, target, ...buttonProps }, ref) => {
    const linkComponentProps = href
      ? { component: 'a', href, target, rel }
      : {
          component: Link,
          to: path,
        };

    return (
      <Button ref={ref} {...linkComponentProps} {...buttonProps}>
        {children}
      </Button>
    );
  },
);

const hrefOrPathRequired = ({ href, path }, propName, componentName) => {
  if (!href && !path) {
    return new Error(
      `One of 'href' or 'path' is required by component ${componentName}`,
    );
  }
  return null;
};

LinkButton.propTypes = {
  href: hrefOrPathRequired,
  path: hrefOrPathRequired,
  rel: PropTypes.string,
  target: PropTypes.string,
};

LinkButton.defaultProps = {
  href: undefined,
  path: undefined,
  rel: 'noopener noreferrer',
  target: '_blank',
};

export default LinkButton;
