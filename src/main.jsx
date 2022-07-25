// styles
import 'bootstrap/dist/css/bootstrap.min.css' // always install packages before your code
import './styles/index.css'

// libraries
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// components
import App from './components/App'

//postData: delete the <StrictMode> label before go production
createRoot(document.getElementById('root')).render(
    <App />
)
