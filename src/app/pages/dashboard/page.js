import { getUsers } from "@/app/functions/handlerAcessAPI";


export default async function Dashboard() {
    const users = getUsers()
    return(
        <div>
            <h1>Dashboard</h1>
        {users.map(jamogba =>
        <h2>
            {jamogba.name} - {jamogba.email}
        </h2>
            )}
        </div>
    );
};