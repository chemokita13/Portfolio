import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Analytics } from "@vercel/analytics/react"; // vercel analytics to view what people are searching hahahah

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.Fragment>
        <App />
        <Analytics />
    </React.Fragment>
);

reportWebVitals();
