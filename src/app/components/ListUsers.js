import Link from 'next/link';

export default async function ListUsers({users}){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <div>

            {users?.map((user,index) =>
            <div className="listText">
            <Link href={`/pages/dashboard/alter/${user.id}`}>
                <h2 key={index}>
                    {user.name} <span>{user.email}</span>
                </h2>
                </Link>
                </div>
            )}

        </div>
    );
}