import UserList from "./UserList";
import { Suspense } from "react";
import Loading from "../loading"
import Link from "next/link"

export default function Users() {
  return (
    <main>
      <nav>
        <div>
          <h2>Users</h2>
        </div>
        <Link href="/users/create" className="ml-auto">
          <button className="btn-primary">New Todo</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <UserList />
      </Suspense>
    </main>
  )
}