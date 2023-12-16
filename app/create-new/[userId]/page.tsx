import { UserType, TodoType } from '../../types.d'
import getUser from "@/lib/getUser"
import getUserTodos from "@/lib/getUserTodos"
import { Suspense } from "react"
import CreateForm from "./components/CreateForm"
import Link from "next/link"
import type { Metadata } from 'next'

type Params = {
  params: {
    userId: string
  }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<UserType> = getUser(userId)
  const user: UserType = await userData

  return {
    title: user.name,
    description: `This is the page of ${user.name}`
  }
}

export default async function CreatePage({ params: { userId } }: Params) {
  const userData: Promise<UserType> = getUser(userId)
  const userTodosData: Promise<TodoType[]> = getUserTodos(userId)

  // If not progressively rendering with Suspense, use Promise.all
  //const [user, userTodos] = await Promise.all([userData, userTodosData])

  const user = await userData

  return (
    <main>
      <nav>
        <h2>{user.name}</h2>
      </nav>
      <CreateForm initialId={userId}/>
    </main>
  )
}