import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomeCoord from "./pages/Coordenador/Inicio";
import ComunicadosCoord from "./pages/Coordenador/Comunicados";
import ProfessoresCoord from "./pages/Coordenador/Professores";
import AlunosCoord from "./pages/Coordenador/Alunos";
import TurmasCoord from "./pages/Coordenador/Turmas";
import ConceitosCoord from "./pages/Coordenador/Conceitos";
import CoordenadoresCoord from "./pages/Coordenador/Coordenadores";
import DisciplinasCoord from "./pages/Coordenador/Disciplinas";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Coordenador/Inicio/" element={<HomeCoord />} />
      <Route path="/Coordenador/Comunicados/" element={<ComunicadosCoord />} />
      <Route path="/Coordenador/Professores/" element={<ProfessoresCoord />} />
      <Route path="/Coordenador/Alunos/" element={<AlunosCoord />} />
      <Route path="/Coordenador/Turmas/" element={<TurmasCoord />} />
      <Route path="/Coordenador/Conceitos/" element={<ConceitosCoord />} />
      <Route path="/Coordenador/Coordenadores/" element={<CoordenadoresCoord />} />
      <Route path="/Coordenador/Disciplinas/" element={<DisciplinasCoord />} />
    </Routes>
  );
}

export default App;