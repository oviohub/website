import { makeStyles } from '@material-ui/styles';
import { pick } from 'lodash';

import { stylesBase } from '../components/styledComponents';

const useStyles = makeStyles(stylesBase);

export function useBaseClasses(keys) {
  const classes = useStyles();

  return pick(classes, keys);
}
