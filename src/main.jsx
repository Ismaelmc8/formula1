import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import App from './App.jsx'
import './index.css'
import { AuthProvider } from './helpers/AuthProvider.jsx'; // Update the path to match your project structure


// import AuthProvider from "./helpers/authProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
