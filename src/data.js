// Placeholder for projects/resources/devsetup with example descriptions. Change once you have details. P.M
import { FaReact, FaNodeJs, FaCss3Alt, FaDocker } from 'react-icons/fa';
import { DiRuby, DiPostgresql, DiHtml5 } from 'react-icons/di';
import { SiJavascript, SiRubyonrails, SiBulma } from 'react-icons/si';
import { BsFiletypeScss } from 'react-icons/bs';

export const projects = [
  {
    title: 'E-commerce Web Application',
    subtitle: 'Ruby and Ruby on Rails',
    description: 'This is a project built with Ruby on Rails and PostgreSQL.',
    image: '/images/ecomm1.png',
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
    title: 'Project 2',
    subtitle: 'PHP & CSS',
    description: 'This is a project built using PHP and so on',
    image: 'https://placehold.jp/450x350.png',
    link: 'https://project2.com',
    techList: ['PHP', 'CSS', 'HTML'],
    techIcons: [FaReact, FaNodeJs, FaCss3Alt],
  },
  // more projects here
];

export const resources = [
  {
    title: 'JavaScript Info',
    image: '/images/js-info.jpg',
    summary: 'A comprehensive guide to modern JavaScript.',
    link: 'https://javascript.info/',
  },
  {
    title: 'React Documentation',
    image: '/images/react-docs.jpg',
    summary: 'Official React documentation and guides.',
    link: 'https://react.dev/blog/2023/03/16/introducing-react-dev',
  },
  {
    title: 'TypeScript Handbook',
    image: '/images/TypeScript.jpg',
    summary: 'The official TypeScript documentation.',
    link: 'https://www.typescriptlang.org/docs/handbook/intro.html',
  },
  {
    title: 'Requirements Gathering',
    image: '/images/Requirements.jpg',
    summary: 'Introduction, Processes, Benefits and Tools',
    link: 'https://www.geeksforgeeks.org/requirements-gathering-introduction-processes-benefits-and-tools/',
  },
  // more resources here
];

export const developerSetup = {
  webstormSetup:
    'I use the Dracula theme for its straightforward and customizable interface. ' +
    'My ideal settings include keybindings similar to VS Code, and I utilize different ' +
    'productivity plugins such as CodeGlance.',
  terminalSetup:
    'For my terminal, I prefer using Windows Terminal with PowerShell Core. I have customized my terminal with ' +
    'Oh My Posh for a more personalized prompt.',
  preferredFont:
    'My preferred editor font is Fira Code, which includes font ligatures that make the code more ' +
    'readable.',
};
