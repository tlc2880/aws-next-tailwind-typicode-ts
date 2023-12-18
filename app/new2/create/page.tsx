import Link from "next/link"
import CreateList from "./CreateList";

export default function Users() {
  return (
    <main>
      <nav>
        <div>
          <h2>New_Create</h2>
        </div>
        <Link href="/new2/create/1" className="ml-auto">
          <button className="btn-primary">New Todo</button>
        </Link>
      </nav>
      <CreateList />
    </main>
  )
}
