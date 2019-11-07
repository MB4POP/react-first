/* eslint-disable linebreak-style */
import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoPage} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoPage.title} heroImage={infoPage.image}/>
    <p>{infoPage.content}</p> 
  </Container>
);

export default Info;