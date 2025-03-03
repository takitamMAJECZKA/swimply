import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Stats from './components/pages/Stats'
import Account from './components/pages/Account'


import {HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/stats" element={<Stats />}/>
          <Route path="/account" element={<Account />}/>
          <Route path="*" element={<Home />}/>
        </Routes>
    </Router>
  )
}

export default App
