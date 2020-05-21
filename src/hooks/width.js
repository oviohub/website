import { useTheme, useMediaQuery } from '@material-ui/core';
import { isWidthUp, isWidthDown } from '@material-ui/core/withWidth';
import { get } from 'lodash';

/**
 * Emulate the deprecated "withWidth" helper from material-ui 3.x. Gets the current width as a
 * string.
 */
export function useWidth() {
  const theme = useTheme();
  // Rules of hooks say that we need to call the same number of hooks every render. This means that
  // we need to call `useMediaQuery` the for each possible width, even if we get a match the first
  // time.

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  const widthStatus = sizes.reduce(
    (status, size) => ({
      ...status,
      [size]: useMediaQuery(theme.breakpoints.only(size)),
    }),
    {},
  );

  return sizes.find(size => widthStatus[size]);
}

export function useWidthUp(breakpoint) {
  const width = useWidth();
  return isWidthUp(breakpoint, width);
}

export function useWidthDown(breakpoint) {
  const width = useWidth();
  return isWidthDown(breakpoint, width);
}

/**
 * Helper to select an option based on the current screen width.
 *
 * Takes an object mapping the string name of the width with the desired value for that width. If
 * not found in the object, returns the result of the key `default`.
 */
export function useValueBasedOnWidth(options) {
  const width = useWidth();
  return get(options, width, options.default);
}
