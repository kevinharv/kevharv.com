

export default function Footer() {
    let copyrightYear = new Date(Date.now()).getFullYear().toString();

    return (
        <div className="mt-auto py-4 flex justify-center bg-slate-200 bg-opacity-40">
            <p className="font-bold">© {copyrightYear} Kevin Harvey</p>
        </div>
    );
}