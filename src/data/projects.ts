export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "LibLab Main Website",
    techs: ["ReactJs", "Tailwind", "ViteJs"],
    link: "https://github.com/ahmad-fayyaz/LibLabMain",
  },
  {
    title: "GoFundMe API",
    techs: ["Django", "Django Rest API", "NextJs"],
    link: "https://github.com/ahmad-fayyaz/gofundmeAPI",
  },
  {
    title: "Swarthmore Immersive Realities Documentation",
    techs: ["ReactJs", "VueJs"],
    link: "https://github.com/ahmad-fayyaz/docsLibLab",
  },
  
];

export default projects;
