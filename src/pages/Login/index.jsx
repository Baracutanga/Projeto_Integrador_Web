import { useState } from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setloginData] = useState({
    email: "",
    senha: "",
  });

  const navigate = useNavigate()

  function verifyLogin() {
    if (loginData.email == "admin@gmail.com" && loginData.senha == "0000") {
      navigate("../Coordenador/Inicio/");
    } else if (
      loginData.email == "profe@gmail.com" &&
      loginData.senha == "0000"
    ) {
      navigate("../Professor/Inicio/");
    } else {
      alert("Senha ou email incorreto!");
    }
  }

  const userCoord = {
    email: "admin@gmail.com",
    senha: "0000",
    role: "coordenador",
  };
  const userProfe = {
    email: "profe@gmail.com",
    senha: "0000",
    role: "professor",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <div id="container">
      <div id="containerLogin">
        <h1>Login</h1>
        <select name="role" value="professor" onChange={handleChange}>
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
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="labelInput">
          <span>Senha</span>
          <input
            type="password"
            name="senha"
            id="userSenha"
            onChange={handleChange}
            placeholder="Senha"
          />
        </label>
        <button onClick={verifyLogin}>Entrar</button>
      </div>
    </div>
  );
}

export default Login;
