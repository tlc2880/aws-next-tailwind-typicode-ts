import CreateList from "./CreateList";
import Link from "next/link"

export default function Users() {
  return (
    <main>
      <nav>
        <div>
          <h2>New2</h2>
        </div>
        <Link href="/new2/create/1" className="ml-auto">
          <button className="btn-primary">New Todo</button>
        </Link>
      </nav>
      <CreateList />
    </main>
  )
}
