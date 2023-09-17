'use client'

import { useState } from 'react';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const [user, setUser] = useState({
      email: '',
      password: '',
    });

        const showAlertRegister = (e) => { e.preventDefault();
        toast.success('Seus dados foram cadastrados com sucesso!')  
      }

return (

    <div>
      <h1>Cadastrar</h1>
      <form onSubmit={showAlertRegister}>
      <input
          placeholder='Name'
          type="text"
          onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
        </input>
        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button>Entrar</button>
      </form>
      <ToastContainer/>
    </div>
)
}