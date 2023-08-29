export default async function ListUsers({users}){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <div>

            {users?.map((user,index) =>
            <div>
                <h2 key={index} className="text-center mt-8">
                    {user.name} - {user.email}
                </h2>
                </div>
            )}

        </div>
    );
}