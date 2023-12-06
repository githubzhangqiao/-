import React, { memo, Suspense } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import useScrollTop from './hooks/useScrollTop'
import routes from './router'

const App = memo(() => {
  useScrollTop()
  const Location=useLocation()
  console.log(Location);
  return (
    <div className='app'>
       <AppHeader/> 
      <Suspense fallback="loading">
        <div className='page'>
          {useRoutes(routes)}
        </div>
      </Suspense>
      {
        (Location.pathname!=="/" && Location.pathname!=="/register")  ? <AppFooter/> :''
      }
     
    </div>
  )
})

export default App
