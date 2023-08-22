import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/components/ListUsers";

export default async function Dashboard() {
    const users = await getUsers()
    return(
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <ListUsers users={users}/>
            </Suspense>
        </div>
    );
};