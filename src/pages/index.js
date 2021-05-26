import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

const MyPage = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <div className="hero text--center">
        <div className="container ">
          <div className="padding-vert--md">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <h1 className="hero__title">{siteConfig.subtitle}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
          <div>
            <Link
              to="/docs/NPSP_FAQ_GUID-CA1AEE8E-35B4-4C5C-B396-E2E2A9D5C8E1"
              className="button button--lg button--outline button--primary">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
      