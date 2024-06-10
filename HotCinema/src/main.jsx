import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ScrollToTop } from './Component/ScrollToTop.jsx'
import { MyProvider } from './Page_context/PageContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>

    <BrowserRouter>
    <ScrollToTop></ScrollToTop>
    <App />
    </BrowserRouter>
    </MyProvider>

  </React.StrictMode>,
)
