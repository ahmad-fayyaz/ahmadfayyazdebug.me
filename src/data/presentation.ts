type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "af.ahmadfayyaz@gmail.com",
  title: "Hi, I’m Ahmad Fayyaz",
  // profile: "/profile.webp",
  description:
    "Hey, I'm Ahmad Fayyaz, a *coder* who loves to build things for the web. I'm passionate about learning new technologies and sharing knowledge with others. I'm currently working as a *Digital Scholarship Researcher at Swarthmore College.*",
  socials: [
    {
      label: "X",
      link: "https://x.com/AhmadFayyazz",
    },
    {
      label: "Github",
      link: "https://github.com/ahmad-fayyaz",
    },
  ],
};

export default presentation;
