'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.push('/')
    router.refresh()
  }

  return (
    <div className="w-full min-h-screen text-foreground flex flex-col justify-center">
      <Link
        href="/"
        className="transition duration-300 absolute top-10 left-10 py-1.5 px-5 rounded-md text-white font-medium bg-neutral-800 hover:bg-neutral-600">
        Back
      </Link>

      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-center font-bold text-2xl leading-9 mb-12">Sign In To Your Account</h1>
        <div className="py-12 px-6 bg-white rounded-lg sm:px-12">

          <form
            onSubmit={handleSignIn}
            className=""
          >
            <div className='mb-4'>
              <label
                htmlFor="email"
                className="block w-full mb-2 font-medium"
              >Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block py-1.5 px-3 rounded-md w-full border border-neutral-300"
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="password"
                className="block w-full mb-2 font-medium"
              >Password</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block py-1.5 px-3 rounded-md w-full border border-neutral-300"
              />
            </div>

            <div className="mb-8">
              <button
                type="submit"
                className="transition duration-300 block w-full py-1.5 px-5 text-center text-white bg-cyan-500 hover:bg-cyan-700 rounded-md font-medium"
              >
                Sign in
              </button>
            </div>

            <div className="text-center">
              <p>
                Don't have an account?{' '}
                <Link
                  href="/sign-up"
                  className="underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
