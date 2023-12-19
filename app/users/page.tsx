import UsersList from "./UsersList";
import Link from "next/link"

export default function Users() {
  return (
    <main>
      <nav>
        <div>
          <h1>Users</h1>
        </div>
        <Link href="/users/create/1" className="ml-auto">
          <button className="btn-primary">New Todo</button>
        </Link>
      </nav>
      <UsersList />
    </main>
  )
}
