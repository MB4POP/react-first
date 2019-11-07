/* eslint-disable linebreak-style */
import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqPage} from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={faqPage.title} heroImage={faqPage.image}/>
    <p>{faqPage.content}</p>
  </Container>
);

export default Faq;