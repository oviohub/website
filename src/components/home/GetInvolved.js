import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';

import { spacing, Title2, Button } from '../styledComponents';
import cardImage1 from '../../assets/homePage/CardImage_Volunteers.jpg';
import cardImage2 from '../../assets/homePage/CardImage_SocialImpact.jpg';
import cardImage3 from '../../assets/homePage/CardImage_Companies.jpg';

const cards = [
  {
    image: { src: cardImage1, alt: 'Volunteers' },
    title: 'Volunteers',
    paragraph: 'Access a catalog of open-source projects and find opportunities that match your interests and skills.',
  },
  {
    image: { src: cardImage2, alt: 'Social impact organizations' },
    title: 'Social impact organizations',
    // eslint-disable-next-line max-len
    paragraph: 'As a social impact organization, you have the opportunity to showcase your Tech for Good projects and engage more qualified contributors.',
  },
  {
    image: { src: cardImage3, alt: 'Companies' },
    title: 'Companies',
    // eslint-disable-next-line max-len
    paragraph: 'Attract and meaningfully engage employees with Explore. Use our platform to build a purpose-driven culture and scale your skill-based volunteering program.',
  },
];

const Container = styled(Grid)({ marginTop: spacing(6) });

const Content = styled(Grid)({ marginLeft: spacing(10) });

const CardsContainer = styled(Grid)({});

const CardContainer = styled(Grid)({
  height: '520px',
  width: '330px',
  padding: spacing(3),
  '&:hover': {
    border: '1px solid #DCDCDC',
    boxShadow: '0 30px 60px 0 rgba(0,0,0,0.05)',
  },
});

const Img = styled('img')({ marginTop: spacing(2) });

const CardTitle = styled(Typography)({
  fontFamily: 'Montserrat',
  fontSize: '18px',
  fontWeight: 'bold',
  lineHeight: '22px',
  margin: `${spacing(4)} 0px ${spacing(2)}`,
});

const CardParagraph = styled(Typography)({
  fontFamily: 'Montserrat',
  fontSize: '16px',
  lineHeight: '26px',
  marginBottom: spacing(2),
  minHeight: '130px',
});

const ButtonContainer = styled(Grid)({
  position: 'relative',
  bottom: '-4px',
});

const renderCard = card => (
  <CardContainer item key={card.title}>
    <Img src={card.image.src} alt={card.image.alt} />
    <CardTitle color="secondary">{card.title}</CardTitle>
    <CardParagraph color="secondary">{card.paragraph}</CardParagraph>
    <ButtonContainer><Button>Learn More</Button></ButtonContainer>
  </CardContainer>
);

const GetInvolved = () => (
  <Container container>
    <Content>
      <Title2>
        Interested in Collaborating?
        <br />
        Get Involved!
      </Title2>
      <CardsContainer container>{cards.map(card => renderCard(card))}</CardsContainer>

    </Content>
  </Container>
);

export default GetInvolved;
