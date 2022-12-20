import './index.css'

import { Route, Routes } from 'react-router-dom'

import { Suspense } from 'react'
import routes from './routes'

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
