import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "footer",
    element: <Footer />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
