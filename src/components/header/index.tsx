'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from "@/assets/image/logo.png"
export default function Header() {
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path ? 'text-indigo-600' : 'text-gray-600'
    }

    return (
        <header className="fixed top-0 w-full bg-[#0a0a0a] shadow-md z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-12 h-16">
                    <div>
                        <img src={logo.src} alt="Logo" className='w-6 h-6 bg-cover'/>
                    </div>
                    <div className="flex items-center space-x-8">
                        <Link
                            href="/"
                            className={`${isActive('/')} hover:text-violet-600 transition-colors font-medium`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/filmes"
                            className={`${isActive('/filmes')} hover:text-violet-600 transition-colors font-medium`}
                        >
                            Filmes
                        </Link>
                        <Link
                            href="/tv"
                            className={`${isActive('/tv')} hover:text-violet-600 transition-colors font-medium`}
                        >
                            TV
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}