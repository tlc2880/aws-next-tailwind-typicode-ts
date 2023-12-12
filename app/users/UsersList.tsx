import '../globals.css'
import type { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import Link from "next/link"
import { UserType } from '../types.d'

export const metadata: Metadata = {
  title: 'Users',
}

export default async function UserList() {
  const usersData: Promise<UserType[]> = getAllUsers()

  const users = await usersData
  return (
    <>
      {users.map(( user: UserType ) => (
        <div key={user.id} className="card my-5">
          <h3>{user.name}</h3>
          <p>UserName: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Company: {user.company.name}</p>
        </div>
      ))}
      {users.length === 0 && (
        <p className="text-center">There are no open users, yay!</p>
      )}
    </>
  )
}