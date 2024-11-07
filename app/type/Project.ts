export interface ProjectLink {
    name: string;
    href: string;
}

export interface Project {
    title: string;
    description: string[];
    technologies: string[];
    links: ProjectLink[];
    image: string;
}
