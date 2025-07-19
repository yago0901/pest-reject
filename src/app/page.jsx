'use client'

import { useRef } from 'react';

import Form from '../components/Form';
import Faq from '../components/Faq';
import How from '../components/How';
import Carrocel from '../components/Carrocel';
import BenefitsSection from '../components/BenefitsSection';
import ReviewsSection from '../components/Reviews';
import HeroSection from '../components/HeroSection';

import './page.module.css';
import CookieBanner from '../components/cookie';

const App = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start'  });
  };

  return (
    <div style={{position: 'relative'}}>
      <HeroSection scrollToForm={scrollToForm} />
      <Carrocel />
      <ReviewsSection scrollToForm={scrollToForm} />
      <BenefitsSection scrollToForm={scrollToForm} />
      <How />
      <div ref={formRef}>
      <Form />
      </div>
      <Faq scrollToForm={scrollToForm}/>
      <CookieBanner/>
    </div>
  );
};

export default App;
