import React from 'react';
import Head from 'next/head';
import IndexSectionCustomComponents2 from '../components/custom-components/IndexSectionCustomComponents2';

const Index = () => {
  return (
    <>
      <Head>
        <title>Los Angeles Plumbing, HVAC & Electrical Services | Book in Seconds | Justbookandgo</title>
        <meta name="description" content="Trusted, licensed professionals serving homes and businesses across Los Angeles. Same-day service, upfront pricing, and guaranteed work. Call 833-413-3478!" />
        <meta name="keywords" content="Los Angeles plumber, LA HVAC, electrical services LA, Beverly Hills plumbing, Santa Monica HVAC, Pasadena electrical, emergency repairs" />
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

