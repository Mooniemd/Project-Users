'use client'

import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation'
import Cookies from "js-cookie";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from '@/app/functions/handlerAcessAPI';

export default function Alter() {
    const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
    });

    const { push } = useRouter();

    useEffect(() => {
    const findUser = async () => {
      const userFind = await getUser(params.id);
      setUser({ ...user, name: userFind.name, email: userFind.email})
    }
    findUser();
  }, [])

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await updateUser(user, params.id);
    await new Promise((resolve) => {
      toast.sucess("Usuário alterado com sucesso!");
      setTimeout(resolve, 5000);
    });
    return push("/pages/dashboard")
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
      <h1>Altere seu usuário</h1>
      <form  id="formAlter">
        <label htmlFor="name">Nome</label>
      <input placeholder='Name' type="text" name="name" required
          onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
        </input>
        <label htmlFor="email">Email</label>
        <input placeholder='E-mail' type="email" name="email" required
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <label htmlFor="password">Senha</label>
        <input placeholder='Senha' type='password' name="password" required
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button>Alterar</button> 
        <button type="button" onClick={()=> deleteToken()}>Deslogar</button>
      </form>
      <ToastContainer/> 
    </div>
    </div>
)
}