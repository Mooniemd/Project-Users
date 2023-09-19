import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/components/ListUsers";

export default async function Dashboard() {
    const users = await getUsers()

    function deleteToken(){
        Cookies.set('token', '')
        toast.success('Você foi deslogado com sucesso!')
      }
    return(
        <div>
        <nav class="navbar">
        <a href="/">Login</a>  
        <a href="/pages/alter">Alterar</a>    
        <a href="/pages/register">Registrar</a>      
        </nav> 
        <div className="userList">
            <Suspense fallback={<p>Loading...</p>}>
                <ListUsers users={users}/>
            </Suspense>
        </div>
        </div>
    );
};