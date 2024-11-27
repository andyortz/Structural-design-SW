import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar';
import Losa from './pages/Losa';
import Carga from './pages/Carga';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/Losa",
        element: <Losa/>,
      },
      {
        path: "/Carga",
        element: <Carga/>
      }
    ],
  }
]);
const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
export default App
