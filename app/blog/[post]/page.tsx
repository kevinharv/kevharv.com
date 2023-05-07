

export default async function Post({ params }: { params: {post: string}}) {
    return (
        <h1>{params.post}</h1>
    )
}