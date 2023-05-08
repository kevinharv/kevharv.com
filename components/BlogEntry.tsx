import Link from "next/link";
import { generateMDX } from "@/utilities/blogPosts";

interface BlogEntryGrayMatterAttributes {
    title: string
    author: string
    date: string
    description: string
}

export default function BlogEntry(params: { path: string, attributes: BlogEntryGrayMatterAttributes }) {    
    return (
        <Link href={`/blog/${params.path}`}>
        <div className="grid grid-rows-1 grid-cols-2 p-4 rounded-lg bg-slate-300 bg-opacity-50 max-w-xs">
            <div>
                <h1 className="text-2xl font-bold">{params.attributes.title}</h1>
                <h3 className="text-m">{params.attributes.author}</h3>
            </div>
            <h3 className="text-right">{params.attributes.date}</h3>
            <h4 className="mt-1 text-sm col-span-2">{params.attributes.description}</h4>
        </div>
        </Link>
    );
}