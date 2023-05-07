import fs from 'fs';
import path from 'path';
import { remark } from "remark"
import html from "remark-html"
import styles from './local.module.css'

const postDirectory = path.join(process.cwd(), "md");

export default async function Post({ params }: { params: {post: string}}) {
    const fullPath: any = path.join(postDirectory, `${params.post}.md`);
    const fileContents: any = fs.readFileSync(fullPath, 'utf8');

    const processedContent = await remark().use(html).process(fileContents);
    const parsedHTML = processedContent.toString();
    
    return (
        <div className='flex justify-center'>
            <div className='max-w-3xl'>
                <div className={styles.md} dangerouslySetInnerHTML={{ __html: parsedHTML }} />
            </div>
        </div>
    )
}