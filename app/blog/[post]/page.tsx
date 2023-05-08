import dynamic from "next/dynamic";


export default async function Post({ params }: { params: {post: string}}) {
    const Post = dynamic(() => import(`@/mdx/${params.post}.mdx`))
    
    return (
        <div className='flex justify-center'>
            <div className='max-w-3xl'>
                <Post />
            </div>
        </div>
    )
}