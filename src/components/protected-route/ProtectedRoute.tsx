import React from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
  user: any
  children: React.ReactNode
  // path: string
}

export const ProtectedRoute = ({ user, children }: Props) => {
  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
