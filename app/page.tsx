import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '@/components/LogoutButton'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <nav className="w-full flex justify-center border-b border-b-neutral-300 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm ">
          <div />
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                Hey, {user.email}!
                <LogoutButton />
              </div>
            ) : (
              <Link
                href="/sign-in"
                className="py-1.5 px-4"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </nav>

      <div className="animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 ">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-semibold mb-4 text-center">RX Fill Collective</h1>
          <p className="mx-auto max-w-xl text-center">
            We can do so much more when we work together...
          </p>
        </div>

        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />

        <div className="flex flex-col gap-8 ">
          <p className="text-2xl text-center">
            <strong>Join</strong> the <strong>Collective</strong>
          </p>
          <Link
            href="/sign-up"
            className="transition duration-300 inline-block py-1.5 px-5 mx-auto font-medium text-white bg-cyan-500 hover:bg-cyan-600 rounded-md"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div className="text-center text-xs py-8 lg:py-12">
        <p className="mb-2">
          Created with ❤️ by{' '}
          <Link
            href="https://www.lacuna-strategies.com"
            target="_blank"
            rel="noreferrer"
            title="Opens in a new tab"
            className="transition-all duration-300 font-bold hover:text-cyan-600"
          >
            Lacuna Strategies LLC
          </Link>
        </p>
        <p>
          Powered by{' '}
          <Link
            href="https://www.nextjs.org"
            target="_blank"
            rel="noreferrer"
            title="Opens in a new tab"
            className="transition-all duration-300 font-bold hover:text-cyan-600"
          >
            Next.js
          </Link>,{' '}
          <Link
            href="https://www.tailwindcss.com"
            target="_blank"
            rel="noreferrer"
            title="Opens in a new tab"
            className="transition-all duration-300 font-bold hover:text-cyan-600"
          >
            TailwindCSS
          </Link>, and{' '}
          <Link
            href="https://www.supabase.com"
            target="_blank"
            rel="noreferrer"
            title="Opens in a new tab"
            className="transition-all duration-300 font-bold hover:text-cyan-600"
          >
            Supabase
          </Link>, and hosted on{' '}
          <Link
            href="https://www.vercel.com"
            target="_blank"
            rel="noreferrer"
            title="Opens in a new tab"
            className="transition-all duration-300 font-bold hover:text-cyan-600"
          >
            Vercel
          </Link>
        </p>
      </div>
    </div>
  )
}
