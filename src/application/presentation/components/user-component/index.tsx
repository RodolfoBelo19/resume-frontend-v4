'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().email().min(8),
  password: z.string().min(8),
})

type FormData = z.infer<typeof schema>;

interface UserComponentProps {
  onSubmit: (data: FormData) => void;
}

export const UserComponent: React.FC<UserComponentProps> = ({ onSubmit: propOnSubmit }) => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    console.log('res: ', data);
    propOnSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" {...register("email")} />
      
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" {...register("password")} />
      <button type="submit">Login</button>
    </form>
  )
}