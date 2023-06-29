import React from 'react'
import { Outlet } from 'react-router-dom' 
import MainNavigation from '../MainNavigation/MainNavigation'
import classes from './Root.module.css'

const Rootpage = () => {
  return (<>
  <center>
    <MainNavigation />
    <main className={classes.content}>
        <Outlet/>
    </main>
    
  </center>
  
  </>)
    
}

export default Rootpage