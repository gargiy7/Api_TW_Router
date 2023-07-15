import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Body from './Body'
import Party from './HeaderComponents/Party'
import Sports from './HeaderComponents/Sports'
import Space from './HeaderComponents/Space'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link, Outlet
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <Body />,
    }, {
      path: "/party",
      element: <Party />,
    }, {
      path: "/space",
      element: <Space />,
    }, {
      path: "/sports",
      element: <Sports />,
    },],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)