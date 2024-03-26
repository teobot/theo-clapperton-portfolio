export type projectType = {
  title: string;
  desc: string;
  img: string;
  live?: string | null;
  github?: string;
  order: number;
  hidden?: boolean;
};

export class ProjectModel implements projectType {
  title: string;
  desc: string;
  img: string;
  live?: string | null;
  github?: string;
  order: number;
  hidden?: boolean;

  constructor(init: projectType) {
    this.title = init.title;
    this.desc = init.desc;
    this.img = init.img || "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)";
    this.live = init.live || null;
    this.github = init.github;
    this.order = init.order;
    this.hidden = init.hidden;
  }
}
