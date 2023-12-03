import UserList from "./UserList";
import { Suspense } from "react";
import Loading from "../loading";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Users</h2>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <UserList />
      </Suspense>
    </main>
  )
}