import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home/Home'


function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login /> } />
      <Route path="/home" element={<Home /> } />
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
