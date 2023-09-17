'use client'

import { useState } from 'react';
import { ToastContainer, toast} from 'react-toastify';

export default function Login() {
    const [user, setUser] = useState({
      email: '',
      password: '',
    });


return (

    <div>
      <h1>Alterar</h1>
      <form onSubmit>
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