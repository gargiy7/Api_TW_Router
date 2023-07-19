import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Body from './Body'
// import Party from './HeaderComponents/Party'
import Beer from './HeaderComponents/Beer'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link, Outlet
} from "react-router-dom";
import BeerBrewer from './HeaderComponents/BeerBrewer'
import Cart from './Cart'
import ProductCardDetail from './ProductCardDetail'

const Party = lazy(() => import ("./HeaderComponents/Party"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <Body />,
    }, {
      path: "/party",
      element: (
        <Suspense> <Party /></Suspense>),
    }, {
      path: "/beer",
      element: <Beer />,
    },
    {
      path: "/beer/:id",
      element: <BeerBrewer />,
    },
    {
      path: "/:id",
      element: <ProductCardDetail />,
    }, {
      path: "/cart",
      element: <Cart />,
    },],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)