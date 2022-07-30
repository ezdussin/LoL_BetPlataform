import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Prov from './pages/Prov'
import Tournament from './pages/Tournament'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import MakeTournament from './utils/makeTournament'

const App = () => {

  const user = localStorage.getItem("user")

  return (
    <div>
      <Header />
      <Routes>

        {user && user ? (
          <>
            <Route path="/" element={<Home />}/>
            <Route path="/prov" element={<Prov />}/>
            <Route path="/tournament/:id" element={<Tournament />}/>
            <Route path="/tournamentlive/:id" element={<MakeTournament />}/>
          </>
        ) : (
          <Route path="/" element={<Login />}/>
        )}
      </Routes>
      <Footer />
    </div>
  )
}

export default App