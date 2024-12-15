import React from 'react';
import Hero from './Hero/Hero'
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';
import Faq from './Faq/Faq';

export default function Main() {
  return (
    <>
      <section style={{background: "linear-gradient(to bottom, #ffffff, #d39df0 20%, #ffffff)"}}>
        <Hero/>
        <SectionOne/>
      </section>

      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <Faq/>
    </>
  )
}
