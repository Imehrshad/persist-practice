import "@/styles/globals.css";

import Footer from "../components/footer"
import { Provider } from "react-redux";
import { persistedStore, store } from "@/redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import MyHeader from "../components/MyHeader";

export default function App({ Component, pageProps }) {
  return <>
    <Provider store={store}>
      <PersistGate loading={<h1>Loading ... </h1>} persistor={persistedStore}>
        <MyHeader />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
    </Provider>
  </>;
}
