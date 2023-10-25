import { useState } from 'react'
import 'firebase/auth'
import 'firebase/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential: any) => {
        // User signed up successfully
        // const user = userCredential.user
      })
      .catch((error: any) => {
        // Handle signup errors
      })
  }

  return (
    <div>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
      {/* <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button> */}
    </div>
  )
}
