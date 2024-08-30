export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Blogs", link: "#blogs" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
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
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an innovative education platform",
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

export type ProjectType = "Clients" | "Personal";
export const projectTypes: ProjectType[] = ["Clients", "Personal"];

export type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  github?: string;
};

export const personalProjects: Project[] = [
  // NFT - Personal
  {
    id: 2,
    title: "NFT Market Place",
    des: "Created a mobile app (Android & IOS) with React Native and a showcase landing page with Typescript & React for the NFT marketplace.",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/nft.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/node.svg", "/aws.svg"],
    link: "https://nft-markeplace.netlify.app/",
    github: "https://github.com/Majd-sufian/NFT-market-landing-page",
  },
  // HooBank - Personal
  {
    id: 3,
    title: "HooBank",
    des: "Landing page for HooBank.",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/hoo2.png",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg"],
    link: "https://hoobank2-page.netlify.app/",
    github: "https://github.com/Majd-sufian/HooBank",
  },
  // Youtube - Personal
  {
    id: 4,
    title: "Modern Youtube clone",
    des: "‎ ",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/youtube.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://youtube-clone-modern.netlify.app/",
    github: "https://github.com/Majd-sufian/Modern-Youtube-Clone",
  },
  // Netflix - Personal
  {
    id: 5,
    title: "Modern Netflix clone",
    des: "‎ ",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/netflix.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://netflix-clone-v2-umber.vercel.app/",
    github: "https://github.com/Majd-sufian/netflix-clone-v2",
  },
  // Three JS - Personal
  {
    id: 1,
    title: "3D Products Design",
    des: "An application that lets users design their own t-shirts in 3D, add images, and generate custom designs with AI.",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/3dProducts.gif",
    iconLists: ["/openai.svg", "/tail.svg", "/ts.svg", "/re.svg", "/fm.svg"],
    link: "https://threejs-products.com",
  },
];

export const clientsProjects: Project[] = [
  // Rocket Tutor - Landing Page - Client
  {
    id: 1,
    title: "Rocket Tutor - Landing Page",
    des: "Landing page for Rocket Tutor, a platform that connects students with tutors.",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/rocket.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://rockettutor.de/",
  },
  // Rocket Tutor - Students Platform - Client
  {
    id: 2,
    title: "Rocket Tutor - Students Platform",
    des: "Students platform that connects students with tutors and enables them to book lessons, view their progress, and more.",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/rocket-student.png",
    iconLists: ["/aws.svg", "/mongo.svg", "/node.svg", "/re.svg", "/ts.svg"],
    link: "https://app.rockettutor.de/",
  },
  // Rocket Tutor - Teacher Platform - Client
  {
    id: 3,
    title: "Rocket Tutor - Teacher Platform",
    des: "Teacher platform that connects teachers with students and enables them to manage their lessons, assign homework, and more...",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/rocket-teacher.png",
    iconLists: ["/aws.svg", "/mongo.svg", "/node.svg", "/re.svg", "/ts.svg"],
    link: "https://teacher.rockettutor.de/register/",
  },
  // AWAKE Mobility - Client
  {
    id: 4,
    title: "AWAKE Mobility",
    des: "Home Page for AWAKE Mobility.",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/awakeMobility.png",
    iconLists: ["/aws.svg", "/mongo.svg", "/node.svg", "/re.svg", "/ts.svg"],
    link: "https://www.awakemobility.de/use-case-better-availability-planning",
  },
  // Invikoo - Client
  {
    id: 8,
    title: "Invikoo.de",
    des: "A web application that generates a Book for Nutrition Plans with a push button based on the user's status (health, active level, age, weight, medical history, and more).",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/invikoo.png",
    iconLists: ["/aws.svg", "/mongo.svg", "/node.svg", "/re.svg", "/ts.svg"],
    link: "https://invikoo.de/",
  },
  // Circle Branding Agency - Client
  {
    id: 7,
    title: "Circle Branding Agency",
    des: "Home page for Circle Branding Agency. A design agency that focuses on branding and web design.",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/circle.png",
    iconLists: ["/next.svg", "/re.svg"],
    link: "https://circlexpr.com/",
  },
  // WYR - Client
  {
    id: 5,
    title: "WYR Game",
    des: "WYR is an app that lets users play the “Would You Rather?” game.",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/wyr.png",
    iconLists: ["/re.svg", "/ts.svg", "fm.svg", "/tail.svg"],
    link: "https://would-you-rather-majd-sufyan.netlify.app",
  },
  // News Reader Ai - Client
  {
    id: 6,
    title: "News Reader Ai",
    des: "A News app, controlled and navigated via voice. It reads the news for you.",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/news-reader-ai.png",
    iconLists: ["/re.svg", "/ts.svg"],
    link: "https://news-reader-ai-majd-sufyan.netlify.app/",
    github: "https://github.com/Majd-sufian/News-Reader-Ai",
  },
];

export const approachPhases = [
  {
    title: "Planning & Strategy",
    order: "Phase 1",
    des: `We'll collaborate to map out your website's goals, target audience, 
    and key functionalities. We'll discuss things like site structure, 
    navigation, and content requirements.`,
    animationSpeed: 5.1,
    containerClassName: "bg-emerald-900 rounded-3xl overflow-hidden",
  },
  {
    title: "Development & Progress Update",
    order: "Phase 2",
    des: `Once we agree on the plan, I cue my lofi playlist and dive into
    coding. From initial sketches to polished code, I keep you updated
    every step of the way.`,
    animationSpeed: 3,
    containerClassName: "bg-pink-900 rounded-3xl overflow-hidden",
    colors: [
      [255, 166, 158],
      [221, 255, 247],
    ],
    dotSize: 2,
  },
  {
    title: "Development & Launch",
    order: "Phase 3",
    des: `This is where the magic happens! Based on the approved design, 
    I'll translate everything into functional code, building your website
    from the ground up.`,
    animationSpeed: 3,
    containerClassName: "bg-sky-600 rounded-3xl overflow-hidden",
    colors: [[125, 211, 252]],
  },
];

type Blog = {
  title: string;
  description?: string;
  link: string;
  img: string;
};

export const blogs: Array<Blog> = [
  // Easiest Way to Get OpenAI Keys for Free 🔒
  {
    title: "Easiest Way to Get OpenAI Keys for Free 🔒",
    link: "https://dev.to/majdsufian/the-easiest-way-to-get-openai-keys-for-free-4pdc",
    img: "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjf7iz4q23qdwtd00ijdd.jpg",
  },
  // Good vs. great Programmer 💪
  {
    title: "Good vs. great Programmer 💪",
    link: "https://dev.to/majdsufian/good-vs-great-programmer-4dk2",
    img: "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqlr0rtsokrwy1xehrydn.jpg",
  },
  // state
  {
    title: "Managing React State Like A Superhero 🦸",
    link: "https://dev.to/majdsufian/managing-react-state-like-a-superhero-5gnp",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/superhero.png",
  },
  // filter
  {
    title: "Filter(Boolean) trick 💡",
    link: "https://dev.to/majdsufian/you-should-know-aobut-the-filterboolean-trick-4g0",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/filter.png",
  },
  // react cheatsheet
  {
    title: "React Cheatsheet for 2023 ✍️",
    link: "https://dev.to/majdsufian/react-cheatsheet-for-2023-14bd",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/react-cheatsheet.png",
  },
  // google
  {
    title: "Google like a pro 🕵️‍♀️",
    link: "https://dev.to/majdsufian/google-is-your-best-friend-so-use-it-like-a-pro-1o88",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/google.gif",
  },
  // json
  {
    title: "One Tool to view your Json better 👨‍💻",
    link: "https://medium.com/@majdnewsufian/one-tool-to-view-your-json-better-1cce7b3633c3",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/json.png",
  },
  // grepper
  {
    title: "One tool can save time when googling ⏲",
    link: "https://medium.com/@majdnewsufian/one-tool-can-save-time-when-googling-2366062430a6",
    img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/grepper.png",
  },
];

export interface Tweet {
  id: number;
  name: string;
  userName: string;
  reply: string;
}

export const tweets: Array<Tweet> = [
  {
    id: 0,
    name: "Sultan 👑",
    userName: "@hackSultan",
    reply: "This is great stuff right here..",
  },
  {
    id: 1,
    name: "Gift Egwuenu ✨",
    userName: "@lauragift_",
    reply: "Your projects are amazing! 👍 💪",
  },
  {
    id: 2,
    name: "Champagne Papi",
    userName: "@loIyparty",
    reply: "Man your portfolio is 🔥",
  },
  {
    id: 3,
    name: "Ruks 🦍",
    userName: "@ruks_ahwin",
    reply: "Really impressive man 👏",
  },
  {
    id: 4,
    name: "Amarachi Iheanacho",
    userName: "@amaraIheanach0",
    reply: "Your site is elite, lovely work.",
  },
  {
    id: 5,
    name: "Moyi.",
    userName: "@moyiabioye",
    reply: "Looking good man 🔥🔥",
  },
  {
    id: 6,
    name: "Shula ☘️",
    userName: "@AsoAmarachi",
    reply: "Beautiful site you have! ❤️",
  },
  {
    id: 7,
    name: "8thLegion",
    userName: "@8thLegion",
    reply: "Great Portfolio man 🚀🚀🚀...Wish you luck",
  },
  {
    id: 8,
    name: "🥷",
    userName: "@aladearchives",
    reply: "Whooooaaaaaaa your site is mad",
  },
  {
    id: 9,
    name: "Big Sheddy 🦅",
    userName: "@coder_blvck",
    reply: "This is really cool!",
  },
  {
    id: 10,
    name: "Onazi 🦄",
    userName: "@VictorOnazi_",
    reply: "🔥 well-done.",
  },
  {
    id: 11,
    name: "Cynthia Sanchez",
    userName: "@cyntss",
    reply: "Love your design! sharing now!",
  },
  {
    id: 12,
    name: "Abiodun Adefila",
    userName: "@adefaze",
    reply: "impressive Clapping hands sign wish you success",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Majd-sufian",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/majd-sufyan/",
  },
];
