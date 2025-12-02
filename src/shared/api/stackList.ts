import type { IconType } from '../model/iconCore';

export enum TechStack {
  ReactQuery = 'React Query',
  React = 'React',
  HTML = 'HTML',
  CSS = 'CSS',
  Sass = 'Sass',
  Storybook = 'Storybook',
  Redux = 'Redux',
  ReduxToolkit = 'Redux Toolkit, and RTK Query',
  Nginx = 'Nginx',
  Docker = 'Docker',
  Vite = 'Vite',
  TypeScript = 'TypeScript',
  JavaScript = 'JavaScript',
  MUI = 'Material UI',
  NextJS = 'NextJS',
  Tailwind = 'Tailwind',
  GitlabCI = 'Gitlab CI',
  Git = 'Git',
  Firebase = 'Firebase',
  Prettier = 'Prettier',
  ESlint = 'ESlint',
  ReactNative = 'React Native',
  NodeJS = 'NodeJS',
  FSD = 'FSD',
}

export type TechStackType = keyof typeof TechStack;

type TechStackDataType = {
  link: string;
  description: string;
  type: string;
  icon: IconType;
  emoji?: string;
};

export const mapTechStack: Record<TechStackType, TechStackDataType> = {
  ReactQuery: {
    link: 'https://tanstack.com/query/latest',
    description: 'React Query',
    type: '',
    icon: 'reactquery',
  },
  React: {
    link: '',
    description: 'React',
    type: '',
    icon: 'react',
  },
  HTML: {
    link: '',
    description: 'HTML',
    type: '',
    icon: 'html',
  },
  CSS: {
    link: '',
    description: 'CSS',
    type: '',
    icon: 'css',
  },
  Sass: {
    link: '',
    description: 'Sass',
    type: '',
    icon: 'sass',
  },
  Storybook: {
    link: '',
    description: 'Storybook',
    type: '',
    icon: 'storybook',
  },
  ESlint: {
    link: '',
    description: 'ESlint',
    type: '',
    icon: 'eslint',
  },
  Redux: {
    link: '',
    description: 'Redux',
    type: '',
    icon: 'redux',
  },
  ReduxToolkit: {
    link: '',
    description: 'Redux Toolkit & RTK Query',
    type: '',
    icon: 'redux',
  },
  Nginx: {
    link: '',
    description: 'Nginx',
    type: '',
    icon: 'nginx',
  },
  Docker: {
    link: '',
    description: 'Docker',
    type: '',
    icon: 'docker',
  },
  Vite: {
    link: '',
    description: 'Vite',
    type: '',
    icon: 'vite',
  },
  TypeScript: {
    link: '',
    description: 'TypeScript',
    type: '',
    icon: 'ts',
  },
  JavaScript: {
    link: '',
    description: 'JavaScript',
    type: '',
    icon: 'js',
  },
  MUI: {
    link: 'https://mui.com/?srsltid=AfmBOooDRAiPrh0ID1PSba4O1c5-oI6y0klSHuGGX-i23zmFdb-1eHfi',
    description: 'MaterialUI',
    type: '',
    icon: 'mui',
  },
  NextJS: {
    link: '',
    description: 'NextJS',
    type: '',
    icon: 'nextjs',
  },
  Tailwind: {
    link: '',
    description: 'Tailwind',
    type: '',
    icon: 'tailwind',
  },
  GitlabCI: {
    link: '',
    description: 'Gitlab CI/CD',
    type: '',
    icon: 'gitlab',
  },
  Git: {
    link: '',
    description: 'Git',
    type: '',
    icon: 'git',
  },
  Firebase: {
    link: '',
    description: 'Firebase',
    type: '',
    icon: 'firebase',
  },
  Prettier: {
    link: '',
    description: '',
    type: '',
    icon: 'react',
  },
  NodeJS: {
    link: '',
    description: 'Node.js',
    type: '',
    icon: 'nodejs',
  },
  ReactNative: {
    link: '',
    description: 'React Native',
    type: '',
    icon: 'react',
  },
  FSD: {
    link: '',
    description: 'Feature Sliced Design',
    type: '',
    icon: 'fsd',
  },
};
