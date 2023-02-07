import Link from 'next/link'

export default function Reports() {
  return (
    <>
      <div className="text-3xl text-center">
        <p>Easy Personal Finance App</p>
      </div>

      <nav className="bg-gray-800 p-6">
        <Link href="/" className="text-white font-medium">
          Home
        </Link>
        <Link href="/transactions" className="text-white font-medium ml-6">
          Transaction Sorter
        </Link>
      </nav>
    </>
  )
}
