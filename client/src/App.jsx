import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './page/Home'
import Product from './page/Product'

function App() {
  // const navigate = useNavigate()
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product:id" element={<Product />} />
    </Routes>
  )
}

export default App
