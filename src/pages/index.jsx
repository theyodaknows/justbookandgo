import React from 'react';
import Head from 'next/head';
import IndexSectionCustomComponents2 from '../components/custom-components/IndexSectionCustomComponents2';
import IndexSectionHeaders1 from '../components/headers/IndexSectionHeaders1';

const Index = () => {
  return (
    <>
      <Head>
        <title></title>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/shuffle-for-bootstrap.png'
        />
      </Head>
      <IndexSectionCustomComponents2 />
      <IndexSectionHeaders1 />
    </>
  );
};

export default Index;

