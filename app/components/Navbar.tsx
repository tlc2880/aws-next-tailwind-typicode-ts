import Image from 'next/image'
import Link from 'next/link'
import UsersLogo from './user-group.png'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={UsersLogo}
        alt='Users Typicode logo'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h1>Users Typicode</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/users">Users</Link>
    </nav>
  )
}