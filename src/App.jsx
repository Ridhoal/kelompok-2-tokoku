import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/register/register'
import Login from './pages/Login'
import Home from './pages/Home/Home'


function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home /> } />
      <Route path="/" element={<Login /> } />
      <Route path="/" element={<Register /> } />
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
