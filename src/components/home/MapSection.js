import React from 'react';
import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/styles';

import { Title2, spacing } from '../styledComponents';
import map from '../../assets/homePage/map.jpg';

const Container = styled(Grid)({
  marginTop: spacing(6),
  height: '679px',
  backgroundImage: `url(${map})`,
});

const Content = styled(Grid)({
  marginLeft: spacing(10),
});

const MapSection = () => (
  <Container container>
    <Content>
      <Title2>Need a title here</Title2>
    </Content>
  </Container>
);

export default MapSection;
