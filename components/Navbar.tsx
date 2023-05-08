import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <div className="h-14 grid grid-cols-3 content-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                <div className="grid justify-start pl-5"><Link href={'/'} className="font-extrabold">LOGO</Link></div>
                <div className="grid justify-center"><Link href={'/blog'} className="font-extrabold">Blog</Link></div>
                <div className="grid justify-end pr-5">USER ICON</div>
            </div>
        </nav>
    );
}