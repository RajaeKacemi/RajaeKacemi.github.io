import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/Projects";



export default function Projects() {

    return (
        <div className="pb-10">
            <h1 className="font-bold text-4xl sm:text-5xl my-10">my projects</h1>
            <section className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                {projects.map((project, id) => (
                    <ProjectCard key={id} project={project} />
                ))}
            </section>
        </div>
    );
}
