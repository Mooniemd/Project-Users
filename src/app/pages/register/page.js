'use client'

import { useState } from 'react';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
    });

/*
      const clear = document.getElementById('btn')
      clear?.addEventListener('click', function handlerClick(e){
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        name.value = '';
        email.value = '';
        password  .value = '';
      })
      */

      const showAlertRegister = (e) => { e.preventDefault();
        toast.success('Seus dados foram cadastrados com sucesso!')
      }

return (
  <div>
      <nav class="navbar">
      <a href="/">Login</a>  
      <a href="/pages/alter">Alterar</a>    
      <a href="/pages/register">Registrar</a>      
      </nav> 
    <div className="container">
      <h1>Cadastre seu usuário</h1>
      <form onSubmit={showAlertRegister}>
        <label for="name">Nome</label>
      <input placeholder='Name' type="text" name="name" required id="name"
          onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
        </input>
        <label for="email">Email</label>
        <input placeholder='E-mail' type="email" name="email" required id="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <label for="password">Senha</label>
        <input placeholder='Senha' type='password' name="password" required id="password"
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button id="btn">Entrar</button>
      </form>
      <ToastContainer/>
    </div>
    </div>
)
}