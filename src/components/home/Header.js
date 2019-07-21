import React from 'react';
import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/styles';

import { menuHeightOffset, Title1, SubTitle1, Button, Arrow } from '../styledComponents';
import headerImage from '../../assets/homePage/headerImage.jpg';

const HeaderContainer = styled(Grid)({
  height: `${680 - menuHeightOffset}px`,
});

const ImageContainer = styled('div')({
  position: 'absolute',
  width: 'calc(100vw - 16px)',
  left: '0px',
  top: '0px',
  zIndex: '-1',
});

const Content = styled(Grid)({
  width: '50%',
});

const ButtonContainer = styled(Grid)({
  margin: '51px 0px 104px',
});


const ArrowContainer = styled(Grid)({
  cursor: 'pointer',
  marginBottom: '91px',
});

const HeaderImage = styled('img')({
  width: '100%',
  height: '680px',
});

const Header = () => (
  <HeaderContainer container justify="center">
    <ImageContainer>
      <HeaderImage src={headerImage} alt="Ovio" />
    </ImageContainer>
    <Content container justify="center" direction="column" alignItems="center">
      <Title1>Ovio brings Technology in Service of Humanity</Title1>
      <SubTitle1>
        Technology can, and should, fuel solutions to the greatest challenges of our time and be in service to humanity.
      </SubTitle1>
      <ButtonContainer item>
        <Button transparent="true">Learn More</Button>
      </ButtonContainer>
      <ArrowContainer><Arrow /></ArrowContainer>
    </Content>
  </HeaderContainer>
);

export default Header;
