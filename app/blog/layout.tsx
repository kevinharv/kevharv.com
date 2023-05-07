import Link from "next/link"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav className="">
                <div className="h-14 mb-8 grid grid-cols-3 content-center bg-gray-500">
                    <div className="grid justify-start pl-5"><Link href={'/'} className="font-extrabold">LOGO</Link></div>
                    <div className="grid justify-center"><Link href={'/blog'} className="font-extrabold">Blog</Link></div>
                    <div className="grid justify-end pr-5">USER ICON</div>
                </div>
            </nav>
            {children}
        </>
    )
}