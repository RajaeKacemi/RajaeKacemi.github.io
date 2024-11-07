import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { educationData } from "@/app/data/Education";
import { experiences } from "../data/Experiences";
import { skills } from "@/app/data/Skills";
import {
    Avatar,
    AvatarImage,
} from "@/components/ui/avatar"
import { stackList } from "./stackList";

const WhoAmiI = () => {
    return (
        <>
            <Tabs defaultValue="experiences" className="pb-10">
                <TabsList className="mb-2 grid w-full grid-cols-3">
                    <TabsTrigger value="experiences">Experiences</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>
                <TabsContent value="experiences">
                    <div className="flex flex-col flex-col-reverse p-1 py-4 sm:p-4 border rounded-lg shadow">
                        {experiences.map((experience) => (
                            <div key={experience.company} className="flex py-3 px-1 sm:p-4 space-y-1 space-x-2 sm:space-x-4">
                                <Avatar className="size-14 border">
                                    <AvatarImage src={experience.logo} alt={experience.company} className="bg-background object-contain" />
                                </Avatar>
                                <div>
                                    <p className="text-gray-500 text-sm">{experience.period} | {experience.location}</p>
                                    <p className="font-bold text-sm">{experience.company}</p>
                                    <p className="font-medium text-gray-500">{experience.title}</p>
                                    <ul className="ml-4 list-outside list-disc ">
                                        {experience.description.map((desc, i) => (
                                            <li key={i} className="text-pretty prose sm:pr-8 text-sm">{desc}</li>
                                        ))}
                                    </ul>
                                    <ul className="flex flex-wrap gap-1 items-center sm:space-x-1 pt-2">
                                        {experience.skills.map((skill, i) => (
                                            <li key={i} className="border text-xs font-medium bg-gray-100 p-1 rounded-md">{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="education">
                    <div className="flex flex-col p-1 py-4 sm:p-4 border rounded-lg shadow">
                        {educationData.map((education) => (
                            <div key={education.university} className="flex items-center py-3 px-1 sm:p-4 space-x-2 sm:space-x-4">
                                <Avatar className="size-14 border">
                                    <AvatarImage src={education.image} alt={education.university} className="bg-background object-contain" />
                                </Avatar>
                                <div>
                                    <p className="text-gray-500 text-sm">{education.period}</p>
                                    <p className="text-sm sm:text-md font-bold">{education.degree}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="skills">
                    <div className="flex flex-col p-4 border rounded-lg shadow">
                        {Object.keys(skills).map((category) => (
                            <div key={category}>
                                <h3 className="font-bold py-1">{category}:</h3>
                                <ul className="flex flex-wrap gap-2 sm:gap-1 items-center sm:space-x-1">
                                    {stackList[category].map((skill) => (
                                        <li
                                            key={skill.name}
                                            className="prose text-sm text-white p-1 rounded-md"
                                            style={{ backgroundColor: skill.color}}
                                        >
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>

                </TabsContent>
            </Tabs>

        </>
    )
}

export default WhoAmiI;