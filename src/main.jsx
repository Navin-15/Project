import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'


// In your index.js or App.js


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// ReactDOM.render(
//   <AuthProvider>
//     <App />
//   </AuthProvider>,
// document.getElementById('root')
// );
