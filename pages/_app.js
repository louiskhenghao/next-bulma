import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';
import Layout from 'components/Layout';
import 'styles/styles.scss';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class MyApp extends App {
  static async getInitialProps(props) {
    const { Component, ctx } = props;
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Lava X | NextJS with Bulma Starter</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default withRouter(MyApp);
