import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../type/Project";


interface Props {
  project: Project;
}
export function ProjectCard({ project }: Props) {
  const { title, description, technologies, image, links } = project;

  return (
    <Card className="flex flex-col shadow-lg hover:border-2 border-2 border-transparent hover:border-1 hover:border-gray-300 hover:duration-500 hover:scale-105">
      <CardHeader>
        {image && (
          <Link href={image}>
            <Image
              src={image}
              alt={title}
              width={300}
              height={120}
              quality={100}
              loading="lazy"
              className="object-cover object-top shadow-xl"
            />
          </Link>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardTitle>{title}</CardTitle>
        <p className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
          {description}
        </p>
      </CardContent>
      <CardFooter className="flex h-full flex-col items-start justify-between gap-4">
        {technologies && technologies.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {technologies.toSorted().map((technologie) => (
              <Badge
                key={technologie}
                className="px-1 py-0 text-[12px]"
                variant="secondary"
              >
                {technologie}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.toSorted().map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.name}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
