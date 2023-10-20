import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import PedidoPage from './pages/Pedidos'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >

      </Route>
      <Route path='pedidos' element={<PedidoPage />} />

    </Routes>
  )
}
