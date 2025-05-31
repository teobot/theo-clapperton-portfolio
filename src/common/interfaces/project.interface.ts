export interface IProject {
  title: string;
  desc: string;
  img: string;
  live?: string | null;
  github?: string;
  rating?: number;
  type?: string;
  hidden?: boolean;
  date?: string;
}
