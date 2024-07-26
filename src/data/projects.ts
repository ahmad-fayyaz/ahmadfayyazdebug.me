export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "GoFundMe Subsciption",
    techs: ["Django", "React", "Stripe"],
    link: "https://puppetfactory.app/",
  }
];

export default projects;
