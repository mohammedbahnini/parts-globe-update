import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import createStore from "../store/store";
import DefaultLayout from "../components/layouts/DefaultLayout.js";
import "../scss/style.scss";
import Document from "next/document";
import Router from "next/router";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.store);
  }

  async componentDidMount() {
    setTimeout(function () {
      document.getElementById("__next").classList.add("loaded");
    }, 100);

    this.setState({ open: true });
  }

  static async getInitialProps(ctx) {
    const initialProps = await App.getInitialProps(ctx);
    return {};
  }

  render() {
    const { Component, pageProps, store } = this.props;
    const getLayout =
      Component.getLayout || ((page) => <DefaultLayout children={page} />);

    return getLayout(
      <Provider store={store}>
        <PersistGate
          loading={<Component {...pageProps} />}
          persistor={this.persistor}
        >
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
