import React from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
  user: { authToken: string | null } | null
  children: React.ReactNode
}

export const ProtectedRoute = ({ user, children }: Props) => {
  if (!user || user.authToken === null) {
    // Redirect to the login page if the user is not authenticated.
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
