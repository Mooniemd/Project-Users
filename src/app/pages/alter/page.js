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

    
  const handlerLogin = async (e) => { e.preventDefault();
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'){
        toast.success('Seu usuário foi alterado com sucesso!');
      } else{
      toast.error('Não foi possível alterar seus dados...')
      refresh();
      }

  }

return (
<div>
      <nav class="navbar">
      <a href="/">Login</a>  
      <a href="/pages/alter">Alterar</a>    
      <a href="/pages/register">Registrar</a>      
      </nav> 
    <div className="container">
      <h1>Altere seu usuário</h1>
      <form onSubmit={handlerLogin}>
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