import { Search } from "lucide-react"
import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className=" p-4 flex justify-evenly items-center">
            <div className="hover:text-blue-500">
                <Link href="/">TASV</Link>
            </div>
            <div className="hover:text-blue-500">
                <Link href="/faq">FAQ</Link>
            </div>
            <div className="hover:text-blue-500">
                <Link href="/">Login</Link>
            </div>
            <div className="hover:text-blue-500">
                <Link href="/">About US</Link>
            </div>
            <div className="hover:text-blue-500">
                <Link href="/"><Search></Search></Link>
            </div>
        </nav>
    )
}