"use client"

import { useRouter } from "next/navigation"
import React, { useState, SyntheticEvent } from "react"
import { UserType } from '../../../types.d'
import useFetch from "@/lib/useFetch";
import Loading from "../../loading"

type Props = {
  initialId: string
}

export default function CreateForm ({ initialId }: Props) {
  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState(false)
  const [isLoadingForm, setIsLoadingForm] = useState(false)
  const [userId, setUserId] = useState(initialId)
  const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/users');

  const router = useRouter()

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>{error}</div>;
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    setIsLoadingForm(true)

    const newUser = { title, completed, userId }

    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: "POST",
      headers: {"Content-Type": "application/json; charset=UTF-8"},
      body: JSON.stringify(newUser)
    })

    if (res.status === 201) {
      router.refresh()
      router.push(`/users/${userId}`)
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
          onChange={(e) => setCompleted(e.target.value === "true" ? true : false )}
          value = {completed === true? 'true': 'false'}
        >
          <option value = {'true'} >Completed</option>
          <option value = {'false'} >Not Completed</option>
        </select>
      </label>
      <label>
        <span>User:</span>
        <select
          onChange={(e) => setUserId(e.target.value)}
          value = {userId}
        >
          {data.map(( user: UserType ) => (
            <option key={user.id} value = {user.id} >{user.name}</option>
          ))}
        </select>
      </label>
      <button 
        className="btn-primary" 
        disabled={isLoadingForm}
      >
        {isLoadingForm && <span>Adding...</span>}
        {!isLoadingForm && <span>Add Todo</span>}
      </button>
    </form>
  )
}
