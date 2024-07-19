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
    figma,
    docker,
    meta,
    enviroa1,
    fuwah,
    fourtwenty,
    shopify,
    carrent,
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
      title: "Front-End Developer",
      icon: mobile,
    },
    {
      title: "Real Estate Agent",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Personal Assistant",
      company_name: "Enviro A One Industrial Co., Ltd",
      icon: enviroa1,
      iconBg: "#383E56",
      date: "March 2018 - June 2019",
      points: [
        "Experienced in supplier and client liaison for timely shipments, export permit processes, Interpretation between English and Burmese, and acting as Deputy Managing Director during B.O.D absences, overseeing operations and preparing audit reports.",
      ],
    },
    {
      title: "Office Manager",
      company_name: "Myanmar Fuwah Sportsware Co., Ltd",
      icon: fuwah,
      iconBg: "#E6DEDD",
      date: "June 2019 - Apr 2021",
      points: [
        "Skilled in managing travel itineraries and coordinating with directors. Effective in overseeing daily operations and cross-department coordination.",
        "Proficient in managing production line supervisors and resolving labor issues.",
      ],
    },
    {
      title: "Budtender",
      company_name: "Four Twenty Thailand",
      icon: fourtwenty,
      iconBg: "#383E56",
      date: "Jan 2023 - Jul 2023",
      points: [
        "Guiding customers in strain selection based on their preferences and needs has developed my customer service skills. Transitioning from bartending to IT support showcased my adaptability and problem-solving abilities, ensuring efficient support in a fast-paced environment.",
      ],
    },
    {
      title: "IT Support",
      company_name: "Four Twenty Thailand",
      icon: fourtwenty,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - May 2024",
      points: [
        "My experience as a Budtender has taught me to manage operations across branches and headquarters efficiently. Using FoodStory and TRCloud, I excel in data management, menu handling, and inventory control. I bring a proactive problem-solving approach and a deep understanding of the cannabis industry to ensure operational excellence and top-notch service.",
        
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelance",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "I've started studying about Web Development and focus on MERN Tech Stack since after i transitioned into IT Support role at my previous work and i want to take more challenge in technical field",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Mit",
      designation: "CEO",
      company: "Holyweed Cannabis Dispensary",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Landing Page",
      description:
        "Landing Web page that allows users to check the business information and their operations, services, providing data and solutions for business needs. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };