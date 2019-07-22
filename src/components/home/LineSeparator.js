import React from 'react';
import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/styles';

import { ThickLine, spacing } from '../styledComponents';

const Container = styled(Grid)({ margin: `${spacing(12)} 0px` });

const LineContainer = styled(Grid)({
  position: 'absolute',
  right: '0px',
});

const LineSeparator = () => (
  <Container container justify="flex-end">
    <LineContainer><ThickLine width="250px" /></LineContainer>
  </Container>
);

export default LineSeparator;
