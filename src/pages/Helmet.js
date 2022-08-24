import React, { Component } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

class HelmetComponent extends Component {
  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Helmet>
      </HelmetProvider>
    );
  }
}

export default HelmetComponent;
