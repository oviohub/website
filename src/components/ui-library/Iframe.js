import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Iframe = ({ title, onLoad, ...props }) => {
  const ref = useRef(null);

  useEffect(() => {
    const { current } = ref || {};
    if (current) {
      current.addEventListener('load', onLoad);
    }
    return (() => {
      if (current) {
        current.removeEventListener('load', () => {});
      }
    });
  }, []);

  return (
    <iframe
      ref={ref}
      title={title}
      {...props}
    />
  );
};

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
};

export default Iframe;
