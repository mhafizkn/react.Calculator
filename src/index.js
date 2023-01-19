import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './fonts/Kanit-Regular.ttf';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

/* Deprecated
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
) */