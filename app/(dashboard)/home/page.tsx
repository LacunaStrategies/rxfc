import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import LogoutButton from '@/components/LogoutButton'

export const dynamic = 'force-dynamic'

export default async function DashboardHome() {
    const supabase = createServerComponentClient({ cookies })

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        redirect('/')
    }

    return (
        <div className="h-full w-full flex flex-col">
            <nav className="w-full flex justify-center border-b border-b-neutral-300 h-16">
                <div className="w-full max-w-4xl p-4 text-sm text-right">
                    <LogoutButton />
                </div>
            </nav>

            <div className="grow py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-stretch justify-between">
                        <div className="w-full mb-8 md:w-[calc(75%-1rem)]">
                            <div className="h-full bg-white rounded-lg shadow-black shadow-md py-8 px-4">
                                <div className="h-full flex flex-col items-center justify-center">
                                    <h1 className="text-center">
                                        Welcome, <br />
                                        <strong>{user.email}</strong>!
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-8 sm:w-[calc(50%-1rem)] md:w-[calc(25%-1rem)]">
                            <div className="h-full bg-white rounded-lg shadow-black shadow-md py-8 px-4">
                                <div className="text-center">
                                    <p className="mb-4">
                                        Log a recent check-in!
                                    </p>
                                    <button
                                        className="transiion duration-300 inline-block py-1.5 px-5 font-medium bg-cyan-500 hover:bg-cyan-700 rounded-md text-white"
                                    >
                                        Check In
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-8 sm:w-[calc(50%-1rem)]">
                            <div className="h-full bg-white rounded-lg shadow-black shadow-md py-8 px-4">
                                <div className="text-center">
                                    <p className="mb-4">
                                        Search your nearby pharmacies!
                                    </p>
                                    <button
                                        className="transiion duration-300 inline-block py-1.5 px-5 font-medium bg-cyan-500 hover:bg-cyan-700 rounded-md text-white"
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-8 sm:w-[calc(50%-1rem)]">
                            <div className="h-full bg-white rounded-lg shadow-black shadow-md py-8 px-4">
                                <div className="text-center">
                                    <p className="mb-4">
                                        Manage your account!
                                    </p>
                                    <button
                                        className="transiion duration-300 inline-block py-1.5 px-5 font-medium bg-cyan-500 hover:bg-cyan-700 rounded-md text-white"
                                    >
                                        Settings
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <Link
                            href="/terms"
                            className="underline"
                        >
                            Terms
                        </Link> /{' '}
                        <Link
                            href="/policies"
                            className="underline"
                        >
                            Policies
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
