// Placeholder for projects/resources/devsetup with example descriptions. Change once you have details. P.M
import { DiRuby, DiPostgresql, DiHtml5 } from 'react-icons/di';
import { SiJavascript, SiBulma } from 'react-icons/si';
import { BsFiletypeScss } from 'react-icons/bs';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaCss3Alt,
  FaDocker,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiRubyonrails,
  SiJetbrains,
  SiDocker,
  SiGit,
} from 'react-icons/si';

export const projects = [
  {
    title: 'E-commerce Web Application',
    subtitle: 'Ruby and Ruby on Rails',
    description: 'This is a project built with Ruby on Rails and PostgreSQL.',
    images: [
      '/images/ecomm1.png',
      '/images/ecomm2.png',
      '/images/ecomm3.png',
      '/images/ecomm4.png',
      '/images/ecomm5.png',
    ],
    link: 'https://project1.com',
    techList: ['Ruby on Rails', 'PostgreSQL', 'Other tech...'],
    techIcons: [
      DiRuby,
      DiPostgresql,
      SiJavascript,
      BsFiletypeScss,
      FaDocker,
      DiHtml5,
      SiRubyonrails,
      SiBulma,
    ],
  },
  {
    title: 'Custom CMS - Secadia Mycological Society',
    subtitle: 'PHP & CSS',
    description: 'This is a project built using PHP and so on',
    images: [
      '/images/cms1.png',
      '/images/cms2.png',
      '/images/cms3.png',
      '/images/cms4.png',
      '/images/cms5.png',
    ],
    link: 'https://project2.com',
    techList: ['PHP', 'CSS', 'HTML'],
    techIcons: [FaReact, FaNodeJs, FaCss3Alt],
  },
  {
    title: 'Interactive Data Visualization App',
    subtitle: 'React',
    description:
      'This application demonstrates the capacity of React to create interactive data visualizations. Using a public API, this project applies complex data handling, component-based architecture, and dynamic CSS.',
    images: ['/images/reactapp1.png'],
    link: 'https://codesandbox.io/p/sandbox/prod-sun-3l9389?file=%2Fsrc%2Fmvp.css',
    techList: ['React', 'MVP.css', 'Public API'],
    techIcons: [FaReact],
  },
  // more projects here
];

export const resources = [
  {
    title: 'JavaScript Info',
    image: '/images/jsinfo.png',
    summary: 'A comprehensive guide to modern JavaScript.',
    link: 'https://javascript.info/',
  },
  {
    title: 'React Documentation',
    image: '/images/reactdocs.png',
    summary: 'Official React documentation and guides.',
    link: 'https://react.dev/blog/2023/03/16/introducing-react-dev',
  },
  {
    title: 'TypeScript Handbook',
    image: '/images/typescript.png',
    summary: 'The official TypeScript documentation.',
    link: 'https://www.typescriptlang.org/docs/handbook/intro.html',
  },
  {
    title: 'Requirements Gathering',
    image: '/images/requirements.png',
    summary: 'Introduction, Processes, Benefits and Tools',
    link: 'https://www.geeksforgeeks.org/requirements-gathering-introduction-processes-benefits-and-tools/',
  },
  // more resources here
];

export const developerSetup = {
  webstormSetup:
    'I use the Dracula theme for its straightforward interface. ' +
    'My ideal settings include keybindings similar to VS Code, and I utilize different ' +
    'productivity plugins such as CodeGlance Pro.',
  terminalSetup:
    'For my terminal, I prefer using Windows Terminal with PowerShell Core. ' +
    'I have customized my terminal with Terminal Tab Tailor for dynamically renaming ' +
    'terminal tabs.',
  preferredFont:
    'My preferred editor font is Fira Code, which includes font ligatures that make the code more ' +
    'readable.',
};

export const skills = {
  description: '',
  languages: [
    { name: 'Java', icon: FaJava },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'JavaScript', icon: FaReact },
    { name: 'Python', icon: FaPython },
  ],
  frameworks: [
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Express', icon: SiExpress },
    { name: 'Ruby on Rails', icon: SiRubyonrails },
  ],
  tools: [
    { name: 'JetBrains', icon: SiJetbrains },
    { name: 'Git', icon: SiGit },
    { name: 'Docker', icon: SiDocker },
  ],
};
