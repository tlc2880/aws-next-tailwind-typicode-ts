import { TodoType } from '../../../types'

type Props = {
  promise: Promise<TodoType[]>
}

export default async function UserTodos({ promise }: Props) {
  const todos = await promise

  const content = (
    <section>
      <>
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
      </>
    </section>
  )

  return content
}