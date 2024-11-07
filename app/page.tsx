import SocialLinks from "./components/socials";
import WhoAmiI from "./components/who-am-i";
import ResumeButton from "./components/resume-button";

export default function Home() {
  return (
    <article className="flex flex-col gap-6">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center">
        <div className="flex flex-col mt-10">
          <h1 className="title text-5xl">Hello world 👋,</h1>
          <p className="mt-4">I&#39;m Rajaa KACEMI, a <span className="font-bold">Full Stack Developer</span> with a passion for <span className="font-bold text-primary">JavaScript</span> and <span className="font-bold text-primary">Python.</span></p>
          <p className="mb-2 mt-1">
            If your&#39;e interested in <span className="font-bold">collaborating, hiring me </span> or just want to chat about tech, feel free to contact me.
          </p>
          <p className="pt-1 font-light">📍 Casablanca, Morocco 🇲🇦</p>
          <p className="pt-1 font-light">📧 rajaa01.kacemi@gmail.com</p>
          <p className="pt-1 font-light">🦆 I also love ducks.</p>
          
          <div className="flex h-10 items-center my-4">
            <ResumeButton />
            <SocialLinks />
          </div>
        </div>
      </section>
      <WhoAmiI />
    </article>
  );
}
