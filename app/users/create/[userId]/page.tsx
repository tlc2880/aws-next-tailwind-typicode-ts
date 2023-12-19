import { UserType } from '../../../types'
import getUser from "@/lib/getUser"
import { Suspense } from "react"
import CreateForm from "./components/CreateForm"
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

  // If not progressively rendering with Suspense, use Promise.all
  //const [user, userTodos] = await Promise.all([userData, userTodosData])

  return (
    <main>
      <h2 className="text-center">Add New Todo</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <CreateForm initialId={userId}/>
      </Suspense>
    </main>
  )
}
