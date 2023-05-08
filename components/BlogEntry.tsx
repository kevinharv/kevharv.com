import Link from "next/link";


export default function BlogEntry(params: { path: string }) {
    const title = 'TEST'
    const author = 'Kevin'
    const date = 'May 4, 2023'
    const description = 'lorem ipsum'


    return (
        <Link href={`/blog/${params.path}`}>
        <div className="grid grid-rows-1 grid-cols-2 p-4 rounded-lg bg-slate-300 bg-opacity-50 max-w-xs">
            <div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="text-m">{author}</h3>
            </div>
            <div>
                <h3 className="text-right">{date}</h3>
            </div>
                <h4 className="mt-1 text-sm col-span-2">{description}</h4>
        </div>
        </Link>
    );
}