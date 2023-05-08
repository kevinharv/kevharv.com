import BlogEntry from '@/components/BlogEntry';
import { getMDFilenames } from '@/utilities/blogPosts';

export default async function Blog() {
    const files = await getMDFilenames();

    return (
        <div className='h-screen flex justify-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 '>
            <div className='flex flex-col'>
                <div className="my-4 p-6 px-96 rounded-lg bg-slate-300 bg-opacity-60"><h1 className='text-5xl font-bold text-center'>LATEST</h1></div>
                <div className='grid grid-cols-4 justify-center'>
                    {files?.map((file) => {
                    return <BlogEntry key={file} path={file} />
                    })}
                </div>
            </div>
        </div>
    )
}