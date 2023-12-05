import Link from 'next/link';
import { UserType }  from './user.type';

async function getUsers() {
  // imitate delay
  // await new Promise(resolve => setTimeout(resolve, 3000))
  
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: {
      revalidate: 0 // use 0 to opt out of using cache
    }
  })

  return res.json()
}

export default async function UserList() {
  const users: UserType[] = await getUsers()
  return (
    <>
      {users.map(( user: UserType ) => (
        <div key={user.id} className="card my-5">
          <Link href={`/users/${user.id}`}>
            <h3>{user.name}</h3>
            <p>UserName: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
          </Link>
        </div>
      ))}
      {users.length === 0 && (
        <p className="text-center">There are no open users, yay!</p>
      )}
    </>
  )
}