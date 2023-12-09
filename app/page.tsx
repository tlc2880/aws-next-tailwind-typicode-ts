import { Inter } from '@next/font/google'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <h1>Users</h1>
      <Link href="/users">Go to Users Page</Link>
    </main>
  )
}
