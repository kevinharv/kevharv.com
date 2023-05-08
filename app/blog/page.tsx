import BlogEntry from '@/components/BlogEntry';
import { getMDFilenames, generateMDX } from '@/utilities/blogPosts';

interface BlogEntryGrayMatterAttributes {
    title: string
    author: string
    date: string
    description: string
}

export default async function Blog() {
    const files = await getMDFilenames();
    
    return (
        <div className='h-screen flex justify-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 '>
            <div className='flex flex-col'>
                <div className="my-4 p-6 px-96 rounded-lg bg-slate-300 bg-opacity-60"><h1 className='text-5xl font-bold text-center'>Tales of a CS Student</h1></div>
                <div className='grid grid-cols-4 gap-4 justify-center'>
                    {files?.map(async (file) => {
                        const entryAttributes: BlogEntryGrayMatterAttributes = await generateMDX(file) as any;
                        return <BlogEntry key={file} path={file} attributes={entryAttributes} />
                    })}
                </div>
            </div>
        </div>
    )
}