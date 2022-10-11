import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store";
import { fetchNews } from "store/reducer-and-action/news/newsSlice";
import App from "./App";
import 'antd/dist/antd.min.css';

store.dispatch(fetchNews("authority_news/all"));

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <App />
    </Provider>
);