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
  enviroa1,
  fuwah,
  fourtwenty,
  carrent,
  jobit,
  tripguide,
  threejs,
  rector,
  takk,
  mitr,
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
    title: "IT Support",
    icon: web,
  },
  {
    title: "Front-End Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
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
];

const experiences = [
  {
    title: "Personal Assistant",
    company_name: "Enviro A One Industrial Co., Ltd",
    icon: enviroa1,
    iconBg: "#383E56",
    date: "June 2018 - June 2019",
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
    date: "Jul 2023 - Mar 2024",
    points: [
      "My experience as a Budtender has taught me to manage operations across branches and headquarters efficiently. Using FoodStory and TRCloud, I excel in data management, menu handling, and inventory control. I bring a proactive problem-solving approach and a deep understanding of the cannabis industry to ensure operational excellence and top-notch service.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "TrustStack Solutions",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Mar 2025",
    points: [
      "I've started studying about Web Development and focus on MERN Tech Stack since after i transitioned into IT Support role at my previous work and i want to take more challenge in technical field",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "TrustStack Solutions",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Mar 2025 - Now",
    points: [
      "Developed multiple real-world full-stack projects and custom CMS using TypeScript, integrating Clerk, OAuth, NextAuth, and JWT for authentication, and building robust backends with Node.js, Prisma ORM, and databases such as MongoDB, Supabase, Firebase, and PostgreSQL.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The official university website was rebuilt from the ground up with an impressive modern interface. Fast, reliable, and easy to maintain, it gives students and staff a much better online experience. Truly professional work from design to deployment.",
    name: "Soe Myint Aye",
    designation: "Principal",
    company: "Sagaing University",
    image: rector,
  },
  {
    testimonial:
      "Our cannabis business needed something clean, professional, and future-ready. He built a full-stack platform with an intuitive admin panel that’s easy for our team to manage. The design feels premium, and everything runs smoothly—from authentication to product management.",
    name: "Mit",
    designation: "CEO",
    company: "Holyweed Cannabis Dispensary",
    image: mitr,
  },
  {
    testimonial:
      "We wanted a modern, calming website that reflected our spa’s atmosphere—and he delivered exactly that. The animations, color palette, and overall flow perfectly match our brand. The booking integration works flawlessly, and our clients love how easy it is to schedule appointments online.",
    name: "Takk",
    designation: "CEO",
    company: "Thaidiamond-dayspa",
    image: takk,
  },
];

const projects = [
  {
    name: "sggu.edu.mm",
    description:
      "Developed the official Sagaing University website.Built with Next.js, Tailwind CSS, Prisma ORM, and MongoDB. Managed the full development cycle — design, implementation, and deployment.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "purple-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://sggu.edu.mm",
  },
  {
    name: "holyweedbkk.com",
    description:
      "Built a custom admin panel full-stack project using Next.js, Tailwind CSS, Clerk (authentication), and Supabase (backend). Handled the entire stack — UI/UX design, development, integration, and deployment.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "purple-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://holyweedbkk.com",
  },
  {
    name: "thaidiamond-dayspa.com",
    description:
      "Developed a visually engaging website with Framer Motion animations and an integrated booking platform. Managed the end-to-end process — design, development, integration, and deployment.",

    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://thaidiamond-dayspa.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
