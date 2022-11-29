import Login from './layout/login'
import Cadastro from './layout/cadastro'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";

export default function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login title="Login"/>}/>
          <Route path="/Cadastro" element={<Cadastro title="Cadastro"/>}/>
        </Routes>
      </Router>
  )
}