import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './Pages/Products'
import Home from './Pages/Home'
import Error from './Pages/Error'
import Rootpage from './Pages/Root'
import ProductDetails from './Pages/ProductDetails'

const App = () => {

  const router = createBrowserRouter([
    {path:'/',
    element: <Rootpage/>,
    errorElement: <Error/>,
    children:[
      {path:'/', element: <Home/>},
      {path: '/products', element: <Products/>},
      {path: '/products/:productID', element: <ProductDetails/>},
    ]
  },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
