import fs from 'fs';
import path from 'path'

// Get all file names in the markdown directory
export async function getMDFilenames(): Promise<string[]> {
    // Define filepath of markdown files
    const filepath = path.join(process.cwd(), 'md');

    // Promise that reads directory
    const dirSearch = new Promise((resolve, reject) => {
        fs.readdir(filepath, (err, files) => {
            if (err) {
                reject(err);
                return;
            }

            else {
                // Map file names and get extension-less name
                const filenames = files.map((file) => {
                    const extIndex = file.lastIndexOf('.');
                    return extIndex > 0 ? file.substring(0, extIndex) : file;
                });
                resolve(filenames);
            }
        });
    });

    // Await the search and return
    // Should re-write with streaming/pagination eventually
    const res: any = await dirSearch;
    return res;
}

// Parse Markdown