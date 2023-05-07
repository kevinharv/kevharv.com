import Image from "next/image";
import Link from "next/link";

export default function SocialButton(props: {icon: string, label: string, link: string}) {
    return ( 
        <Link href={props.link}>
            <div className="m-4 p-1.5 rounded-lg bg-slate-300 bg-opacity-30 shadow-xl">
                <Image 
                    src={props.icon} 
                    width={60} 
                    height={60} 
                    alt={props.label}
                    />
            </div>
        </Link>
    );
}