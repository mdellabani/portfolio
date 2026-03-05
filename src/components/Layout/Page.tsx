import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const BASE_URL = 'https://mdellabani.github.io/portfolio';

const Page: NextPage<HomepageMeta> = memo(
  ({children, title, description, ogImageUrl, twitterCardType, twitterTitle, twitterDescription, twitterImageUrl}) => {
    const {asPath: pathname} = useRouter();
    const canonicalUrl = `${BASE_URL}${pathname}`;

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta content={description} name="description" />
          <meta content="Mahieddine Dellabani, Tech Lead, Software Architect, Java, distributed systems, FRTB, market risk, credit risk, real-time analytics, OLAP, Atoti, ActiveViam, Spring Boot, microservices, scalable systems, financial analytics, in-memory database, JVM" name="keywords" />

          {/* Canonical */}
          <link href={canonicalUrl} key="canonical" rel="canonical" />

          {/* Favicon & Manifest */}
          <link href="/favicon.ico" rel="icon" sizes="any" />
          <link href="/site.webmanifest" rel="manifest" />

          {/* Open Graph */}
          <meta content={title} property="og:title" />
          <meta content={description} property="og:description" />
          <meta content={canonicalUrl} property="og:url" />
          <meta content="profile" property="og:type" />
          <meta content="en_US" property="og:locale" />
          {ogImageUrl && <meta content={ogImageUrl} property="og:image" />}
          {ogImageUrl && <meta content="1200" property="og:image:width" />}
          {ogImageUrl && <meta content="630" property="og:image:height" />}

          {/* Twitter Card */}
          <meta content={twitterCardType || 'summary_large_image'} name="twitter:card" />
          <meta content={twitterTitle || title} name="twitter:title" />
          <meta content={twitterDescription || description} name="twitter:description" />
          {twitterImageUrl && <meta content={twitterImageUrl} name="twitter:image" />}

          {/* JSON-LD Structured Data */}
          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@graph': [
                  {
                    '@type': 'ProfilePage',
                    mainEntity: {'@id': '#person'},
                  },
                  {
                    '@type': 'Person',
                    '@id': '#person',
                    name: 'Mahieddine Dellabani',
                    jobTitle: 'Tech Lead | Software Architect',
                    description:
                      'Tech Lead & Software Architect specializing in high-performance Java applications, scalable distributed systems, and real-time financial analytics.',
                    url: BASE_URL,
                    worksFor: {
                      '@type': 'Organization',
                      name: 'Freelance',
                    },
                    knowsAbout: [
                      'Java', 'JVM internals', 'distributed systems', 'high-performance databases',
                      'scalable systems', 'FRTB', 'market risk', 'credit risk', 'real-time analytics',
                      'OLAP', 'Atoti', 'ActiveViam', 'Spring Boot', 'microservices', 'Kubernetes',
                      'financial technology', 'in-memory database', 'concurrency', 'observability',
                    ],
                    sameAs: [
                      'https://www.linkedin.com/in/mdellabani/',
                      'https://github.com/mdellabani',
                    ],
                    alumniOf: [
                      {'@type': 'CollegeOrUniversity', name: 'Grenoble INP PHELMA/ENSIMAG'},
                      {'@type': 'CollegeOrUniversity', name: 'Iowa State University'},
                    ],
                  },
                ],
              }),
            }}
            type="application/ld+json"
          />
        </Head>
        {children}
      </>
    );
  },
);

Page.displayName = 'Page';
export default Page;
