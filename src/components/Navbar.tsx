import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">NFT WARS</Link>
          </div>
          <div className="flex">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</Link>
            <Link href="/marketplace" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Marketplace</Link>
            <Link href="/arena" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Arena</Link>
            <Link href="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">DashBoard</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}