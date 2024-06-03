import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  cplusplus,
  python,
  figma,
  docker,
  udaan,
  blockforge,
  regology,
  bhel,
  carrent,
  articleSumz,
  dalleClone,
  keeperClone,
  threejs,
  matrixmarble,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Blockforge Industries",
    icon: blockforge, 
    iconBg: "#383E56", 
    date: "September 2023 - Present",
    points: [
      "Integrated Zoop API for KYC and pioneered Video KYC with Firebase Cloud Functions.",
      "Implemented robust Two-Factor Authentication (2FA) via SMS and Google Authenticator using Firebase.",
      "Enhanced login, sign-up, and dashboard experiences using React, JavaScript, and Material UI.",
      "Developed dark and light modes, Bitcoin mining charts, and stacking value curves for the web app.",
      "Designed and implemented backend and frontend structures for withdrawal and buying features.",
      "Improved application security features and created an automatic invoice generator for contract purchases.",
    ],
  },
  {
    title: "Finance Analytics Intern",
    company_name: "Udaan",
    icon: udaan,
    iconBg: "#E6DEDD", 
    date: "January 2023 - June 2023",
    points: [
      "Managed FMCG procurement and purchase orders across India.",
      "Utilized SQL, Excel, and Python for data extraction, analysis, and generating insights to support strategic decision-making.",
      "Collaborated with cross-functional teams to optimize product orders and make data-driven decisions to improve overall product sales.",
      "Enhanced inventory turnover rates by adjusting procurement strategies.",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Regology India",
    icon: regology,
    iconBg: "#383E56",
    date: "July 2022 - December 2022",
    points: [
      "Developed interactive Nivo network charts using React to visualize data, enabling users to better understand complex relationships within the data.",
      "Combined the algorithms of D3 force network chart and tree chart to create a many-to-many hierarchy-based interactive chart, providing a unique and customizable way to explore complex data structures.",
      "Developed a Python script using Selenium and BeautifulSoup to automatically detect and fix indentation and enumeration errors in large files, improving readability and ensuring accuracy in all scenarios.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "BHEL, Vizag",
    icon: bhel,
    iconBg: "#E6DEDD",
    date: "May 2020 - June 2020",
    points: [
      "Assisted the Data team in analyzing diverse data sets using tools like Python, MS Excel, and MySQL to gain insights into BHEL's potential expansion beyond India.",
      "Conducted extensive secondary research to explore potential business opportunities for static products in the oil and refinery sector in foreign countries.",
      "Identified and assessed the challenges that BHEL might encounter when competing against major oil giants in these international markets.",
      "Participated in data reviews and provided constructive feedback to other team members.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Matrix Marble",
    description: "I developed and designed a responsive website for Matrix Marble, implementing a user-friendly interface to showcase their marble and granite products. Utilizing React, I enabled dynamic content rendering and styled components with Tailwind CSS to achieve a modern, clean look. Additionally, I ensured cross-browser compatibility and optimized the website's performance for a seamless user experience." , 
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: matrixmarble,
    source_code_link: "https://www.matrixmarble.in/",
  },
  {
    name: "ArticleSummarizer",
    description:
      "React-based user-friendly web tool that uses OpenAI's GPT model. It provides concise summaries of lengthy articles and texts, helping users quickly grasp key information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: articleSumz,
    source_code_link: "https://github.com/AdityaPS11/OpenAI-Article-Sumz",
  },
  {
    name: "DalleClone",
    description:
      "MERN stack web application that utilizes AI to generate unique and imaginative images based on user input. Users can provide textual prompts, and the app produces visually stunning and original images that reflect the given input.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "openAI-API",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dalleClone,
    source_code_link: "https://github.com/AdityaPS11/dalle_clone",
  },
  // {
  //   name: "KeeperApp",
  //   description:
  //     "React-based web app that replicates the core features of Google's note-taking application. Users can create, edit, and organize notes with ease.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: keeperClone,
  //   source_code_link: "https://github.com/AdityaPS11/KeeperAppClone",
  // },
];

export { services, technologies, experiences, testimonials, projects };
