export interface ProjectProps {
  project: {
    title: string;
    tool: string[];
    about: string;
    imageUrl?: string;
    url: string;
  };
}