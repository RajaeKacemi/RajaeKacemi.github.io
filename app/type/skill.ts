export interface Skill {
    Frontend: string[],
    Backend: string[],
    ProgrammingLanguages: string[],
    Databases: string[],
    DevelopmentTools: string[],
}

export interface StackInfo {
    name: string;
    color: string;
  }
  
  export type StackInfoMap = {
    [key: string]: StackInfo[];
  };
  