import { Project } from "../type/Project";

export const projects: Project[] = [
    {
        title: "Prestigious: E-commerce Store",
        description: [
            "An e-commerce platform for jewelry and accessories, built with the MERN stack. It features detailed product listings, a smooth shopping cart experience, and Stripe payment integration for seamless transactions."
        ],
        technologies: ["React.Js", "Node.Js", "JavaScript", "Tailwind CSS", "Express.Js", "MongoDB", "Redux Toolkit"],
        links: [
            {
                name: "Source",
                href: "https://github.com/RajaaKacemi/E-commerce-website/tree/front_office",
                
            }
        ],
        image: "/projects/prestigious.png"
    },
    {
        title: "Prestigious: Dashboard",
        description: [
            "An E-commerce Management Dashboard helps online businesses efficiently manage products, orders, and customer interactions. It streamlines operations for a smoother retail experience."
        ],
        technologies: ["React.Js", "Node.Js", "JavaScript", "Tailwind CSS", "Express.Js", "MongoDB", "Redux Toolkit"],
        links: [
            {
                name: "Source",
                href: "https://github.com/RajaaKacemi/E-commerce-website/tree/front_office",
                
            }
        ],
        image: "/projects/dashboard.png"
    },
    {
        title: "Books Platform",
        description: [
            "Development of a book information platform allowing users to consult descriptions and ratings of books."
        ],
        technologies: ["React.Js", "JavaScript", "Tailwind CSS", "Django", "MySQL", "Cloudinary"],
        links: [
            {
                name: "Source",
                href: "https://github.com/RajaaKacemi/E-Book",
                
            }
        ],
        image: "/projects/e-book.png"
    },
    {
        title: "Console (CLI)",
        description: [
            "Creation of a console capable of creating, manipulating, and storing instances for the Airbnb clone project."
        ],
        technologies: ["Python"],
        links: [
            {
                name: "Source",
                href: "https://github.com/RajaaKacemi/AirBnB_clone",
                
            }
        ],
        image: "/projects/console.png"
    }
];
