import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const URL = "https://backendpi-iju6.onrender.com/";

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post(`${URL}api/login`, {
        email: email,
        senha: senha,
      })
      .then((response) => {
        const token = response.data.token;

        if (token) {
          localStorage.setItem("token", token);
          navigate("../Coordenador/Inicio/");
        } else {
          alert("Senha ou email incorreto.");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div id="container">
      <div id="containerLogin">
        <h1>Login</h1>
        <select name="role" value="professor">
          <option value="" disabled>
            Usuário
          </option>
          <option value="professor">Professor</option>
          <option value="coordenador">Coordenador</option>
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Senha"
          />
        </label>
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}

export default Login;
