import CreateForm from './CreateForm'

export default async function CreateTodo() {
  return (
    <main>
      <h2 className="text-center">Add a New Todo</h2>
      <CreateForm />
    </main>
  )
}