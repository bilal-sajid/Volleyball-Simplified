import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import HomePage from './pages/HomePage.jsx';
import RotationsPage from './pages/RotationsPage.jsx';
import PositionsPage from './pages/PositionsPage.jsx';
import VolleyballBasicsPage from './pages/VolleyballBasicsPage.jsx';
import GlossaryPage from './pages/GlossaryPage.jsx';
import BuildingGameSensePage from './pages/GameSensePage.jsx';

import RootLayout from './RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // Layout wraps all routes
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'positions',
        element: <PositionsPage />,
      },
      {
        path: 'basics',
        element: <VolleyballBasicsPage />,
      },
      {
        path: 'rotations',
        element: <RotationsPage />,
      },
      {
        path: 'gamesense',
        element: <BuildingGameSensePage />,
      },
      {
        path: 'glossary',
        element: <GlossaryPage />,
      },
    ],
    errorElement: <div>404 Not Found</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
