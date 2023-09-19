'use client'

import { useState } from 'react';
import Cookies from "js-cookie";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
    });

    const form = document.getElementById('formRegister')
      const showAlertRegister = (e) => { e.preventDefault();
        toast.success('Seus dados foram cadastrados com sucesso!')
        form.reset()
      }

      function deleteToken(){
        Cookies.set('token', '')
        toast.success('Você foi deslogado com sucesso!')
      }

return (
  <div>
      <nav className="navbar">
      <a href="/">Login</a>  
      <a href="/pages/alter">Alterar</a>    
      <a href="/pages/register">Registrar</a>   
      </nav> 
    <div className="container">
      <h1>Cadastre seu usuário</h1>
      <form onSubmit={showAlertRegister} id="formRegister">
        <label htmlFor="name">Nome</label>
      <input placeholder='Name' type="text" name="name" required id="name"
          onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
        </input>
        <label htmlFor="email">Email</label>
        <input placeholder='E-mail' type="email" name="email" required id="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <label htmlFor="password">Senha</label>
        <input placeholder='Senha' type='password' name="password" required id="password"
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <div className="displayBtn">
        <button id="btn" className="btn">Cadastrar</button>
        <button type="button" onClick={()=> deleteToken()}>Deslogar</button>
        </div>
      </form>
      <ToastContainer/>
    </div>
    </div>
)
}