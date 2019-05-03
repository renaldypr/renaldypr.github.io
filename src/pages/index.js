import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/title';
import Hello from '../components/hello';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Title />
    <Hello />
  </Layout>
)

export default IndexPage;
