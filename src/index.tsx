import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import { Strings } from "./strings/strings";
import "./font/TitilliumWeb-Regular.ttf";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <IntlProvider locale="en" messages={Strings}>
        <App />
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
