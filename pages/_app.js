import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import Router from "next/router";
import withGA from "next-ga";

const theme = {
  colors: {
    primary: '#003366',
    secondary: "#FF0080",
    yellow: "#CCFF33",
    fushia: "#FF0080"
  },
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default withGA("UA-174039978-1", Router)(MyApp)