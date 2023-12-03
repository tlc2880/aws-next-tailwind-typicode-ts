"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"

export default function CreateForm () {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState('false')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)

    const newTicket = { title, completed, user_email: 'tommy@email.dom' }

    const res = await fetch('https://jsonplaceholder.typicode.com/users/todos', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newTicket)
    })

    if (res.status === 201) {
      router.refresh()
      router.push('/todos')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Completed:</span>
        <select
          onChange={(e) => setCompleted(e.target.value)}
          value={completed}
        >
          <option value="true">Completed</option>
          <option value="false">Not Completed</option>
        </select>
      </label>
    </form>
  )
}