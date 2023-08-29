import { useState } from "react";
import { ToastContainer, toast} from 'react-toastify';

export default function Login() {
    const [user, setUser] = useState({
      email: '',
      password: '',
    });

    const handlerLogin = async (e) => { e.preventDefault();
        try {
          const userAuth = handlerAcessUser(user);
          if(userAuth.token === undefined){
            toast.error('o form está com dados incorretos');
          } 
          push('/pages/dashboard')
    
        } catch {
          toast.error('o form está incorreto')
          refresh();
        }
      }


return (

    <div>
      <h1>Alterar</h1>
      <form onSubmit={handlerLogin}>
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