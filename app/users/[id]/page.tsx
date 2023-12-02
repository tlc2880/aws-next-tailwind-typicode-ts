import { notFound } from "next/navigation"
import { UserType, TodoType } from '../user.type';

export const dynamicParams = true  // default val = true

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')

  const todos = await res.json()

  return todos.map((todo: TodoType ) => ({
    userId: todo.userId
  }))
}

async function getTodos(id: string) {
  // imitate delay
  await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`, {
    next: {
      revalidate: 60
    }
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: {
      revalidate: 0 // use 0 to opt out of using cache
    }
  })

  return res.json()
}

export default async function UserTodos({ params }: any) {
  // const id = params.id
  const todos: TodoType[] = await getTodos(params.id);
  const users: UserType[] = await getUsers();

  return (
    <main>
      <nav>
        <h2>{users[params.id-1].name} Todos</h2>
      </nav>
      {todos.map((todo: TodoType) => (
        <div key={todo.id} className="card my-5">
          <h3>Title: {todo.title}</h3>
          <h3>Id: {todo.id}</h3>
          {
            todo.completed? <div className={`pill ${todo.completed}`}>Completed</div>
                          : <div className={`pill ${todo.completed}`}>Incompleted</div>
          }
        </div>
      ))}
    </main>
  )
}