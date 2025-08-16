import React from 'react';
import Head from 'next/head';
import IndexSectionCustomComponents2 from '../components/custom-components/IndexSectionCustomComponents2';
import IndexSectionHeaders1 from '../components/headers/IndexSectionHeaders1';

const Index = () => {
  return (
    <>
      <Head>
        <title>24/7 Licensed Plumbers in Downtown Los Angeles – Fast, Affordable Service | Justbookandgo</title>
        <meta name="description" content="Need a plumber in Downtown L.A. today? Licensed professionals ready for leaks, clogs, and repairs in 90013, 90014, 90021. Call 833-413-3478 for instant quotes!" />
        <meta name="keywords" content="plumber downtown los angeles, HVAC installation downtown LA, electrical repairs arts district, emergency plumbing 90013, licensed plumbers downtown LA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/shuffle-for-bootstrap.png'
        />
      </Head>
      <IndexSectionCustomComponents2 />
    </>
  );
};

export default Index;

