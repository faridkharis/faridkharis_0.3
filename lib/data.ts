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
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
] as const;

export const experiencesData = [
  {
    institution: 'UPN “Veteran” Yogyakarta',
    date: 'Sep 2016 - Jul 2023',
    title: 'Bachelor of Informatics',
    description: [
      'Communicate with parties from the International Relations Department regarding website requirements.',
      'Building website interfaces using CodeIgniter and styling them using CSS.',
      'Communicate with the University regarding website deployment.',
    ],
    icon: React.createElement(RiGraduationCapFill),
  },
  {
    institution: 'UPN “Veteran” Yogyakarta',
    date: 'Dec 2018 - Mar 2019',
    title: 'Web Developer Internship',
    description: [
      'Communicate with parties from the International Relations Department regarding website requirements.',
      'Building website interfaces using CodeIgniter and styling them using CSS.',
      'Communicate with the University regarding website deployment.',
    ],
    icon: React.createElement(RiSuitcaseFill),
  },
  {
    institution: 'Core Initiative x Rakamin',
    date: 'Aug - Sep 2023',
    title: 'Project-Based Virtual Intern : Frontend Developer',
    description: [
      'Designing websites according to predetermined design components using Vue.js and Vanilla CSS.',
      'Connecting the website with the API from fakestoreapi.com.',
      'Utilizing APIs starting from product names, categories, descriptions, ratings, etc.',
      'Create product restrictions only for men(\')s and women(\')s clothing categories.',
    ],
    icon: React.createElement(RiSuitcaseFill),
  },
] as const;
