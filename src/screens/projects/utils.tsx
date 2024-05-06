import {BiLogoPostgresql, BiLogoSpringBoot} from 'react-icons/bi';
import {FaJava, FaNodeJs, FaReact} from 'react-icons/fa';
import {SiNextdotjs, SiRedis, SiTailwindcss} from 'react-icons/si';

import {SiAmazonaws, SiMongodb, SiTypescript} from 'react-icons/si';

import porfolioLogo from '../../../public/logo.svg';
import IMS from './1.jpg';
import Ecom from './2.png';
import LMS from './3.jpg';
import Quiz from './4.png';
import News from './5.jpg';
import Esewa from './esewa.png';

export interface Project {
  name: string;
  description: string;
  img: string;
  stack: JSX.Element[];
  url?: string;
  git?: string;
}

export const comerciaProjects: Project[] = [
  {
    name: 'E-subham Digitl Mobile Banking',
    description: `E-Subham Led the development of Digiti Mobile Banking, a cutting-edge mobile application revolutionizing the banking experience for customers. This feature-rich app empowers users with seamless access to a wide range of banking services anytime, anywhere, enhancing convenience and efficiency. `,
    img: Esewa,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,

      <FaJava key="java" color="#FFA500" className="text-[28px]" />,
      <BiLogoSpringBoot key="springboot" color="#86cf35" className="text-[28px]" />,
      <BiLogoPostgresql key="psql" color="#3A6596" className="text-[28px]" />,
    ],
  },
  {
    name: 'Intern Management System',
    description: `Developed an Intern Management System, a comprehensive web application designed to streamline and optimize the processes involved in managing interns within an organization. The system facilitates efficient communication, task assignment, progress tracking, and performance evaluation of interns, enhancing productivity and transparency across departments. `,
    img: IMS,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,

      <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,

      <SiMongodb key="mongodb" color="#86cf35" className="text-[48px" />,
      <SiAmazonaws key="serverless" color="#F1941D" className="text-[28px]" />,
    ],
  },
  {
    name: 'Learning Management System',
    description: `Developed a comprehensive Learning Management System (LMS) designed to facilitate efficient administration, documentation, tracking, reporting, and delivery of educational courses or training programs. 
    `,
    img: LMS,
    stack: [
      <SiNextdotjs key="next" className="text-[28px] text-black light:text-black" />,
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
      <SiMongodb key="mongodb" color="#2c913f" className="text-[28px]" />,
    ],
  },
  {
    name: 'Complete E-commerce Api',
    description: `Team size: 2. The main goal of the project is to allow a
        user to make donations on the following social projects. My responsibilities were creating new functionality, creating new site versions (their
      maintaining), bugs fixing, working with the Facebook application, add new requests to DB and fixing on the server side.`,
    img: Ecom,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
      <SiMongodb key="mongodb" color="#2c913f" className="text-[28px]" />,
    ],
  },
];

export const customProjects: Project[] = [
  {
    name: 'JavaScript Quiz App',

    description: `Developed a dynamic JavaScript Quiz App aimed at testing and enhancing users' knowledge of JavaScript programming language. The app offers a user-friendly interface and a variety of features to create an engaging learning experience`,
    img: Quiz,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,

      <FaJava key="java" color="#FFA500" className="text-[28px]" />,
      <BiLogoSpringBoot key="springboot" color="#86cf35" className="text-[28px]" />,
      <BiLogoPostgresql key="psql" color="#3A6596" className="text-[28px]" />,
    ],
    git: 'https://github.com/SubhamJoshi18/JavascriptQuiz_Java.git',
  },
  {
    name: 'News Display System With Redis And BullMQ OOP',

    description: `Developed a News Display System, a versatile web application designed to aggregate, organize, and present news articles from various sources in a user-friendly manner. The system offers a range of features to deliver timely and relevant news content to users.`,
    img: News,
    stack: [
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <SiRedis key="redis" color="#DC382D" className="text-[28px]" />,
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
      <SiMongodb key="mongodb" color="#2c913f" className="text-[28px]" />,
    ],
    git: 'https://github.com/enikosoft/next-ecommerce-smart-food',
  },
  {
    name: 'My Portfolio',
    url: '',
    description: `Welcome to my portfolio! Explore my diverse range of projects,
      showcasing my expertise in building responsive and dynamic web applications.
      Dive into my code, discover my skills,
      and get in touch to discuss exciting opportunities. Let's bring ideas to life through technology!`,
    img: porfolioLogo,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
    ],
    git: 'https://github.com/enikosoft/portfolio',
  },
];
