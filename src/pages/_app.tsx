import '@/app.css';
import AppLink from '@/components/AppLink';
import { Code } from '@/components/Code';
import NavBar from '@/components/NavBar';
import '@fontsource/fira-mono/latin-400.css';
import '@fontsource/lato/latin-400.css';
import '@fontsource/lato/latin-700.css';
import { MDXProvider, MDXProviderComponents } from '@mdx-js/react';
import App from 'next/app';
import React from 'react';
import Head from 'next/head';

const components: MDXProviderComponents = {
  pre: (props) => <div {...props} />,
  code: Code,
  a: AppLink,
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MDXProvider components={components}>
        <Head>
          <title>validator-fns</title>
        </Head>
        <div className="layout">
          <NavBar />
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </MDXProvider>
    );
  }
}

export default MyApp;
