import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import HomeCoord from "../Coordenador/Inicio";
import HomeProfe from "../Professor/Inicio";

const URL = "https://backendpi-7ekz.onrender.com/";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !senha || !role) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    axios
      .post(`${URL}api/login`, {
        email: email,
        senha: senha,
        role: role,
      })
      .then((response) => {
        const token = response.data.token;

        if (response.status === 200) {
          if (response.data.user.role === "Coordenador") {
            localStorage.setItem("token", token);
            navigate("../Coordenador/Inicio");
          } else {
            localStorage.setItem("token", token);
            navigate("../Professor/Inicio");
          }
        } else {
          alert("Senha ou email incorreto.");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRole = (event) => {
    setRole(event.target.value);
  };

  return (
    <div id="container">
      <div id="containerLogin">
        <h1>Login</h1>
        <select name="role" value={role} onChange={handleRole}>
          <option value="" disabled>
            Usuário
          </option>
          <option value="Coordenador">Coordenador</option>
          <option value="Professor">Professor</option>
        </select>
        <br />
        <label className="labelInput">
          <span>Usuário</span>
          <input
            type="email"
            name="email"
            id="usuarioLogin"
            placeholder="Login"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label className="labelInput">
          <span>Senha</span>
          <input
            type="password"
            name="senha"
            id="userSenha"
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
          />
        </label>
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}

export default Login;
