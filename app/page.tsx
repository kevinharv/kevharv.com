import SocialButton from "@/components/SocialButton"

export default function Home() {
  return (
    <div className="grid grid-cols-1 h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="bg-slate-300 bg-opacity-80 p-10 px-16 rounded-lg shadow-xl">
            <h1 className="text-6xl font-extrabold text-center py-4">Kevin Harvey</h1>
            <h4 className="text-2xl font-bold text-center">Computer Science Student</h4>
            <div className="mt-4 flex justify-center">
              <SocialButton icon="/github.png" label="GitHub" link="https://github.com/kevinharv/"/>
              <SocialButton icon="/linkedin.png" label="LinkedIn" link="https://www.linkedin.com/in/kevharv/"/>
              <SocialButton icon="/resume.png" label="Résumé" link="/example-resume.pdf" />
              <SocialButton icon="/contract.png" label="Blog" link="/blog" />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
