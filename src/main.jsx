import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import App from './App.jsx';

import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { element } from 'prop-types';



import HomePage from './pages/HomePage.jsx';
import FormationsPage from './pages/FormationsPage.jsx';
import RotationsPage from './pages/RotationsPage.jsx';
import PositionsPage from './pages/PositionsPage.jsx';

const router = createBrowserRouter([
  {
  path : '/',
  element : <HomePage />,
  errorElement : <div>404 Not Found</div>
  },
  {
    path : '/positions',
    element : <PositionsPage />,
    errorElement : <div>404 Not Found</div>
  },
  {
    path : '/terms',
    element : <div>Terms</div>,
    errorElement : <div>404 Not Found</div>
  },
  {
    path : '/formations',
    element : <FormationsPage />,
    errorElement : <div>404 Not Found</div>
  },
  {
    path : '/rotations',
    element : <RotationsPage />,
    errorElement : <div>404 Not Found</div>
  }


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
