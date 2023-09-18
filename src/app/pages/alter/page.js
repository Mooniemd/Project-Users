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

    const form = document.getElementById('formAlter')
      const showAlertAlter = (e) => { e.preventDefault();
        toast.success('Seus dados foram cadastrados com sucesso!')
        form.reset()
      }
0
return (
<div>
      <nav class="navbar">
      <a href="/">Login</a>  
      <a href="/pages/alter">Alterar</a>    
      <a href="/pages/register">Registrar</a>      
      </nav> 
    <div className="container">
      <h1>Altere seu usuário</h1>
      <form onSubmit={showAlertAlter} id="formAlter">
        <label for="name">Nome</label>
      <input placeholder='Name' type="text" name="name" required
          onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
        </input>
        <label for="email">Email</label>
        <input placeholder='E-mail' type="email" name="email" required
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <label for="password">Senha</label>
        <input placeholder='Senha' type='password' name="password" required
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button>Entrar</button> 
      </form>
      <ToastContainer/> 
    </div>
    </div>
)
}