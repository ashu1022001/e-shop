
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createRoot } from 'react-dom/client';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./configs/firebase";

// init firebase
initializeApp(firebaseConfig);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);