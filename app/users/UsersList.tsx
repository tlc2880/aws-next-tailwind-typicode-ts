import { UserType } from '../types.d'
import type { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Users',
}

export default async function UsersList() {
  const usersData: Promise<UserType[]> = getAllUsers()
  const users = await usersData

  const content = (
    <section>
      <>
        {users.map(( user: UserType ) => (
          <div key={user.id} className="card my-5">
            <h3><Link href={`/users/${user.id}`}>{user.name}</Link></h3>
            <p>UserName: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
          </div>
        ))}
        {users.length === 0 && (
          <p className="text-center">There are no open users, yay!</p>
        )}
      </>
    </section>
  )
  return content
}
