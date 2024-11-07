import { Colors } from "@/lib/Colors";
import { skills } from "../data/Skills";
import { StackInfoMap } from "../type/skill";

export const stackList: StackInfoMap = {};

function getColor(skill: string): string {
  const formattedSkill = skill.toLowerCase().replace(/\s+/g, "").replace(/[^a-z]/g, "").trim();
  return Colors[formattedSkill as keyof typeof Colors] || "#CCCCCC";
}

Object.keys(skills).forEach((category) => {
  stackList[category] = skills[category as keyof typeof skills].map((skill) => ({
    name: skill,
    color: getColor(skill)
  }));
});
