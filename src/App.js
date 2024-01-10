import React from 'react'
import Header from './components/Header'
import  HomePage from './components/HomePage.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'
import { Routes ,Route} from 'react-router'
import Details from './components/Details'
const App = () => {
  return (
    <div>

      <Header/>
      {/* <HomePage/>
       */}
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies/details/:movieId' element={<Details />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage/>} />
       </Routes>
    </div>
  )
}

export default App
