import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import 'boxicons/css/boxicons.min.css';
// Impor CSS PrimeReact
import 'primereact/resources/themes/saga-blue/theme.css';  // Pilih tema yang diinginkan
import 'primereact/resources/primereact.min.css';          // Gaya utama PrimeReact
import 'primeicons/primeicons.css';
import 'primeflex/themes/primeone-light.css'
import 'primeflex/themes/primeone-dark.css'
import { Provider } from 'react-redux'
import store from './admin/store/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
