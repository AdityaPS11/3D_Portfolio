
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
    regology,
    bhel,
    carrent,
    articleSumz,
    dalleClone,
    keeperClone,
    jobit,
    tripguide,
    threejs,
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
      title: "SDE Intern",
      company_name: "Regology India",
      icon: regology,
      iconBg: "#383E56",
      date: "July 2022 - December 2022",
      points: [
        "Developed interactive Nivo network charts using React to visualize data, enabling users to better understand complex relationships within the data.",
        "Combined the algorithms of D3 force network chart and tree chart to create a many-to-many hierarchy-based interactive chart,providing a unique and customizable way to explore complex data structures.",
        "Developed a Python script using Selenium and BeautifulSoup to automatically detect and fix indentation and enumeration errors in large files, improving readability and ensuring accuracy in all scenarios.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Research Intern",
      company_name: "BHEL,Vizag",
      icon: bhel,
      iconBg: "#E6DEDD",
      date: "May 2020- June 2020",
      points: [
        "Assisted the Data team in analyzing diverse data sets using tools like Python, MS Excel, and MySQL to gain insights into BHEL's potential expansion beyond India.",
        "Conducted extensive secondary research to explore potential business opportunities for static products in the oil and refinery sector in foreign countries.",
        "Identified and assessed the challenges that BHEL might encounter when competing against major oil giants in these international markets.",
        "Participating in data reviews and providing constructive feedback to other in team.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
  ];
  
  const projects = [
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
    {
      name: "KeeperApp",
      description:
        "React-based web app that replicates the core features of Google's note-taking application. Users can create, edit, and organize notes with ease.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: keeperClone,
      source_code_link: "https://github.com/AdityaPS11/KeeperAppClone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };