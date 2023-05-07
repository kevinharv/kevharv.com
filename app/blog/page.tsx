import fs from 'fs';
import Link from 'next/link';
import path from 'path';

function getFilenamesWithoutExtension(directoryPath: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                reject(err);
                return;
            }

            const filenamesWithoutExtension = files.map((file) => {
                const extensionIndex = file.lastIndexOf('.');
                return extensionIndex > 0 ? file.substring(0, extensionIndex) : file;
            });

            resolve(filenamesWithoutExtension);
        });
    });
}

export default async function Blog() {
    const files = await getFilenamesWithoutExtension(path.join(process.cwd(), 'md'));
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col'>
                <h1 className="text-5xl">BLOG</h1>
                <div className='flex justify-center'>
                    {files?.map((file) => {
                        return <Link key={file} href={`/blog/${file}`} className='text-4xl'>{file}</Link>
                    })}
                </div>
            </div>
        </div>
    )
}