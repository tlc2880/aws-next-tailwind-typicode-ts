import CreateList from "./CreateList";
import Link from "next/link"

export default function Users() {
  return (
    <main>
      <nav>
        <div>
          <h2>Users</h2>
        </div>
        <Link href="/create-new/create" className="ml-auto">
          <button className="btn-primary">New Todo</button>
        </Link>
      </nav>
      <CreateList />
    </main>
  )
}
