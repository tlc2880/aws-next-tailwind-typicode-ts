"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"

export default function CreateForm () {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)

    const userId = 1
    const newUser = { title, completed, userId }

    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: "POST",
      headers: {"Content-Type": "application/json; charset=UTF-8"},
      body: JSON.stringify(newUser)
    })

    if (res.status === 201) {
      router.refresh()
      router.push('/users/1')
      router.refresh()
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
          onChange={(e: any) => setCompleted(e.target.value === "true" ? true : false )}
          value = {completed === true? 'true': 'false'}
        >
          <option value = {'true'} >Completed</option>
          <option value = {'false'} >Not Completed</option>
        </select>
      </label>
      <button 
        className="btn-primary" 
        disabled={isLoading}
      >
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Todo</span>}
      </button>
    </form>
  )
}