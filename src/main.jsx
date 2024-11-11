import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import ProductListing from './pages/ProductListing.jsx'
import Compnavbar from './compnavbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Compnavbar />
<ProductListing/>
  </StrictMode>
)
