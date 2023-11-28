import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <h1>Users Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/users">Users</Link>
    </nav>
  )
}