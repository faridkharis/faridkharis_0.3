import React from 'react';
import { RiGraduationCapFill, RiSuitcaseFill } from 'react-icons/ri';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Project',
    hash: '#project',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiences = [
  {
    id: 'exp1',
    institution: 'UPN “Veteran” Yogyakarta',
    date: 'Jul 2023',
    title: 'Bachelor of Informatics',
    tasks: [
      'Bachelor\'s degree in Informatics and graduated with a GPA of 3.62',
      'Active in the Informatics Muslim student community as a leader, where I assumed leadership responsibilities at the departmental level.',
    ],
    icon: React.createElement(RiGraduationCapFill),
  },
  {
    id: 'exp2',
    institution: 'UPN “Veteran” Yogyakarta',
    date: 'Dec 2018 - Mar 2019',
    title: 'Web Developer Internship',
    tasks: [
      'Communicate with parties from the International Relations Department regarding website requirements.',
      'Building website interfaces using CodeIgniter and styling them using CSS.',
      'Communicate with the University regarding website deployment.',
    ],
    icon: React.createElement(RiSuitcaseFill),
  },
  {
    id: 'exp3',
    institution: 'Core Initiative x Rakamin',
    date: 'Aug - Sep 2023',
    title: 'Project-Based Virtual Intern : Frontend Developer',
    tasks: [
      'Designing websites according to predetermined design components using Vue.js and Vanilla CSS.',
      'Connecting the website with the API from fakestoreapi.com.',
      'Utilizing APIs starting from product names, categories, descriptions, ratings, etc.',
      'Create product restrictions only for men(\')s and women(\')s clothing categories.',
    ],
    icon: React.createElement(RiSuitcaseFill),
  },
  {
    id: 'exp4',
    institution: 'Formulatrix Indonesia',
    date: 'Dec 2023 - Feb 2024',
    title: 'Software Engineer Bootcamp Trainee',
    tasks: [
      'Learning and Applying Object-Oriented Programming (OOP) : Created a class diagram for a battleship board game, applying OOP principles.',
      'Development of Console Applications : Developed a UNO card game console app based on a class diagram provided by another participant, enhancing my coding skills and understanding of game development.',
      'Final Project on Web Application Development : Worked on a web-based application titled "Meeting Room Booking", built with ASP.NET Web API and React. With my team, I work collaboratively using Open Project and GitLab.',
      'Fixing Search Feature: Resolved issues in the search functionality within the Reservations Menu.',
      'Improving UI Responsiveness: Corrected a responsive navigation background color bug, enhancing the app(\')s visual appeal and usability.',
      'Integrating Google Sign-In: Added a button for Google Sign-In, streamlining the authentication process for users.'
    ],
    icon: React.createElement(RiSuitcaseFill),
  },
] as const;

export const projects = [
  {
    id: 'project1',
    title: 'E-commerce Catalog',
    description: 'An e-commerce catalog website that displays men\'s and women\'s clothing catalogs. This website is the assignment of the Project Based Internship Program by Rakamin.',
    links: {
      github: 'https://github.com/faridkharis/ecommerce-catalog',
      website: 'https://ecommerce-faridkharis.netlify.app/',
    },
    image: '/project-e-commerce.png',
    techs: [
      'Vue.js',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 'project2',
    title: 'Promptopia',
    description: 'Promptopia is a web application for writing short texts called prompts. Not only our prompts, but we can also see prompts from other users.',
    links: {
      github: 'https://github.com/faridkharis/promptopia',
      website: 'https://promptopia-theta-eight.vercel.app/',
    },
    image: '/project-promptopia.png',
    techs: [
      'Next.js',
      'React.js',
      'Tailwind CSS',
    ],
  },
  {
    id: 'project3',
    title: 'Personal Notes',
    description: 'Personal Notes is a web application for writing personal notes. This application was built using React.js.',
    links: {
      github: 'https://github.com/faridkharis/personal-notes',
      website: 'https://github.com/faridkharis/personal-notes',
    },
    image: '/project-personal-notes.png',
    techs: [
      'Javascript',
      'React.js',
      'CSS',
    ],
  },
] as const;
