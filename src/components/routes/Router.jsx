import { ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import { Route,createBrowserRouter,RouterProvider } from 'react-router-dom'
import Index from '../pages/Index';
import Trade from '../pages/Trade'
import Login from '../pages/Login'
import Landing from '../pages/Landing';
import Register from '../pages/Register'
import PrivateRoute from './PrivateRoute';
import Theme from '../elements/global/Theme';
import CssBaseline from '@mui/material/CssBaseline';
import Orders from '../pages/Orders';
import TradeChart from '../elements/trade/TradeChart';
import TradeChartPage from '../pages/TradeChartPage';
export default function Router() {
  const pagerouter= createBrowserRouter([
    {
        path:"/orders",
        element:<PrivateRoute> <Orders/> </PrivateRoute>
    },
   
    {
      path:"/trade/",
      element:<PrivateRoute> <Trade/> </PrivateRoute>
    },
    {
      path:"/trade/chart",
      element:<PrivateRoute> <TradeChartPage/> </PrivateRoute>
    },
   
    {
      path:"/",
      element:<PrivateRoute> <Landing/> </PrivateRoute>
    },
    {
      path:"/login",
      element: <PrivateRoute><Login/> </PrivateRoute> 
    },
    {
      path:"/signup",
      element: <PrivateRoute> <Register/> </PrivateRoute>
    },
   
  ])  
  return (
    <ThemeProvider theme={Theme} >
        <CssBaseline />
        <RouterProvider router={pagerouter}/>
    </ThemeProvider>
  )
}
