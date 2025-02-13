import { Search } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export const Navbar = () => {
    return (
        <nav className=" p-4 flex justify-evenly items-center bg-green-200">
            <div className="hover:text-blue-500 font-semibold">
                <Link href="/">TASV</Link>
            </div>
            <Separator orientation="vertical" />
            <div className="hover:text-blue-500 font-semibold">
                <Link href="/faq">FAQ</Link>
            </div> <Separator orientation="vertical" />
            <div className="hover:text-blue-500 font-semibold">
                <Link href="/register">Signup</Link>
            </div> <Separator orientation="vertical" />
            <div className="hover:text-blue-500 font-semibold">
                <Link href="/about-us">About Us</Link>
            </div> <Separator orientation="vertical" />
            <div className="hover:text-blue-500 font-semibold">
                <Link href="/"><Search></Search></Link>
                <Separator orientation="horizontal" />
            </div>
        </nav>
    )
}