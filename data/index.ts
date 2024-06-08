export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize collaboration, open communication, and developing scaleable solutions ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description:
      "TypeScript, JavaScript, C#, .NET, React, GraphQL, AngularJS, T-SQL, Postgres, Node.js, Nest.js, Next.js, Jest, HTML/CSS, X++, Azure",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech geek with a passion for development.",
    description:
      "Whether it be Arduino, tinkering with my latest retro handheld, or on the job",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently seeking new opportunities",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "React Admin Portal",
    des: "A sample React Admin Portal Application",
    img: "/react-admin.png",
    iconLists: [
      "/re.svg",
      "/material-ui.svg",
      "/js.svg",
      "/nivo.svg",
      "/formik.svg",
    ],
    link: "https://mduarte14.github.io/react-admin/",
  },
  {
    id: 2,
    title: "LAZERZZZ - C++ Galaga Style Game",
    des: "This game was built with Nokia's Qt Creator. Game engine built entirely in C++. Gui Built via XML. This is a Galaga/Space invaders clone with dynamic enemy spawn locations.",
    img: "/lazerz.png",
    iconLists: ["/qt.svg", "/sql.svg", "/c++.svg"],
    link: "https://github.com/mduarte14/Lazerzzzz",
  },
  {
    id: 3,
    title: "Dungeon - C++ RPG with custom game engine",
    des: "Standalone game engine, A game inspired by Japanese RPG's and dungeon crawlers.",
    img: "/dungeon.png",
    iconLists: ["/qt.svg", "/sql.svg", "/c++.svg"],
    link: "https://github.com/seigex/CIS17B_48597_ClassProject",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Miguel was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Miguel's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Miguel is the ideal partner.",
    name: "Russel Carter",
    title: "Software Engineer",
    img: "/man-person-icon.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "fisker",
    img: "/fisker.svg",
    nameImg: "/fisker-text.png",
  },
  {
    id: 2,
    name: "prs",
    img: "/prs.png",
    nameImg: "/prs-text.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Senior Full-Stack Software Engineer - Fisker Inc",
    desc: "Hands-on backend-primary Full Stack experience working with the following technologies: JavaScript, TypeScript, Next.js, Docker, Postgres, Jest, GraphQL, React, Swagger, Contentful, SQL, DataDog, and Nest.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full-Stack Software Engineer - PRH",
    desc: "Hands-on Full Stack experience working with technologies: C#, AngularJS, T-SQL, JavaScript, X++, PowerBi, Azure DevOps, etc.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Jr. Full-Stack Software Engineer - PRS",
    desc: "Development of new software and web applications; Modify or enhance existing software and web applications.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/mduarte14",
  },

  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/duartemiguelcoder/",
  },
];
