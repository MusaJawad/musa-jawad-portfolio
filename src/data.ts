import type { Experience, Profile, Project, Skill, Testimonial } from './types';

export const profile: Profile = {
  name: 'Musa Jawad',
  title: 'Full-Stack Software Developer',
  location: 'Calgary, AB, Canada',
  email: 'musajawad72@gmail.com',
  linkedin: 'https://www.linkedin.com/in/musa-jawad-208807239',
  github: 'https://github.com/MusaJawad',
  resume: '/Musa_Jawad_Resume.pdf',
  availability: 'Open to junior full-stack, backend, Django, automation, and data/AI roles',
  intro:
    'I build production web platforms, API-driven applications, automation tools, and data/AI projects using Python, Django, JavaScript/TypeScript, SQL, React, and Node.js. My experience includes launching a company website from 0 to 1, building backend features for user-facing platforms, and creating technical projects with OCR, WebSockets, Firebase, and distributed-systems concepts.',
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Distributed Agar.io Clone',
    slug: 'distributed-agario-clone',
    tagline: 'Real-time multiplayer browser game with Django, SQL, WebSockets, passive replication, and distributed-systems concepts.',
    summary:
      'Built a multiplayer browser game with WebSocket-based state synchronization, server-side game updates, SQL persistence, proxy routing, replica health checks, and Lamport timestamp ordering.',
    problem:
      'Real-time multiplayer systems need fast state updates, consistent backend events, and a clean split between game client, proxy layer, server logic, and persistence.',
    solution:
      'Designed a layered architecture with a Phaser/TypeScript client, Django backend services, WebSocket state sync, SQL persistence, passive replication, and leader-election style failover logic for replica crashes.',
    impact:
      'Implemented a working real-time game flow with WebSocket synchronization, SQL-backed player state, proxy routing, replica health checks, and documented failure-handling trade-offs.',
    stack: 'Python, Django, SQL, WebSockets, TypeScript, Phaser, REST APIs',
    stack_list: ['Python', 'Django', 'SQL', 'WebSockets', 'TypeScript', 'Phaser', 'Distributed Systems'],
    github_url: '',
    demo_url: '',
    image_url: '/assets/projects/agario-architecture.webp',
    image_alt: 'Architecture diagram from the distributed Agar.io clone report',
    video_url: '/assets/videos/agario-showcase-captioned.mp4',
    video_poster: '/assets/projects/agario-walkthrough-poster.jpg',
    gallery: ['/assets/projects/agario-homepage.webp', '/assets/projects/agario-architecture.webp'],
    links: [
      { label: 'Technical report', href: '/assets/reports/agario-clone-report.pdf' },
      { label: 'Captioned walkthrough', href: '/assets/videos/agario-showcase-captioned.mp4' },
    ],
    evidence: ['Captioned walkthrough', 'Gameplay screenshots', 'Architecture diagram', 'Technical report'],
    featured: true,
    order: 1,
    year: '2026',
  },
  {
    id: 2,
    title: 'MediScanner',
    slug: 'mediscanner',
    tagline: 'OCR-powered medication lookup app with accessibility features, Firebase, external APIs, and physical image-capture hardware.',
    summary:
      'Built a web/mobile medication scanning system that extracts DIN/NPN values from medication images using OCR preprocessing, regex validation, Firebase auth/storage, and Canadian Drug Product Database lookup.',
    problem:
      'Medication labels can be hard to read or manually search, especially for elderly users or users with accessibility needs. Bad scans and small text create safety and usability issues.',
    solution:
      'Combined a user-facing app, OCR pipeline, API lookup workflow, accessibility features, and a physical image-capture prototype to make medication information easier to access.',
    impact:
      'Delivered an end-to-end medication scanning flow covering image capture, OCR validation, medication lookup, user-facing results, reminders, and saved medication screens.',
    stack: 'React, Node.js, Firebase, PaddleOCR, Capacitor, Axios, REST APIs',
    stack_list: ['React', 'Node.js', 'Firebase', 'PaddleOCR', 'Capacitor', 'REST APIs', 'Accessibility'],
    github_url: '',
    demo_url: '',
    image_url: '/assets/projects/mediscanner-upload.webp',
    image_alt: 'Polished MediScanner upload screen with medication image capture workflow',
    gallery: [
      '/assets/projects/mediscanner-login.webp',
      '/assets/projects/mediscanner-upload.webp',
      '/assets/projects/mediscanner-image-preview.webp',
      '/assets/projects/mediscanner-saved.webp',
      '/assets/projects/mediscanner-ibuprofen.webp',
      '/assets/projects/mediscanner-reminders.webp',
    ],
    links: [{ label: 'Technical report', href: '/assets/reports/mediscanner-technical-report.pdf' }],
    evidence: ['App screenshots', 'Technical report', 'OCR/API workflow'],
    featured: true,
    order: 2,
    year: '2025',
  },
  {
    id: 7,
    title: 'CookGPT AI Recipe Generator',
    slug: 'cookgpt-ai-recipe-generator',
    tagline: 'React recipe-generation app with dashboard flows, recipe prompts, and Selenium-based UI testing.',
    summary:
      'Built a recipe-generation web app that helps users generate recipe ideas through a clean front-end flow, then validated key user journeys with Selenium tests and UI screenshots.',
    problem:
      'Recipe apps need a simple flow from user input to useful output, while still making sign-in, dashboard navigation, and generation states easy to test and demonstrate.',
    solution:
      'Implemented a React-based interface with dashboard and recipe-generation screens, then used Selenium testing to validate major flows like navigation and form interactions.',
    impact:
      'Implemented the main recipe generation and dashboard flows, then captured Selenium-based UI testing for key browser interactions.',
    stack: 'React, JavaScript, Firebase, Selenium, UI Testing, HTML/CSS',
    stack_list: ['React', 'JavaScript', 'Firebase', 'Selenium', 'UI Testing', 'HTML/CSS'],
    github_url: 'https://github.com/macaylak/SENG401Project',
    demo_url: '',
    image_url: '/assets/projects/cookgpt-homepage.webp',
    image_alt: 'CookGPT AI recipe generator homepage screenshot',
    gallery: [
      '/assets/projects/cookgpt-homepage.webp',
      '/assets/projects/cookgpt-dashboard.webp',
      '/assets/projects/cookgpt-generate-popup.webp',
      '/assets/projects/cookgpt-selenium-testing.webp',
    ],
    links: [],
    evidence: ['UI screenshots', 'Dashboard flow', 'Selenium test run'],
    featured: true,
    order: 3,
    year: '2025',
  },
  {
    id: 3,
    title: 'Airport Information Kiosk',
    slug: 'airport-information-kiosk',
    tagline: 'Interactive YYC airport kiosk prototype with maps, search, flights, transport, Wi-Fi, restaurants, directions, and bilingual flows.',
    summary:
      'Built a full-screen kiosk-style application that lets airport visitors navigate maps, search airport services, check flights, view transportation options, connect to Wi-Fi, and switch language flows.',
    problem:
      'Airport visitors need fast, accessible, low-friction information in a high-stress environment where navigation, language, and time pressure matter.',
    solution:
      'Designed a multi-screen kiosk experience with clear navigation, bilingual landing pages, map/search flows, flight and transportation pages, directional screens, and help/Wi-Fi utilities.',
    impact:
      'Produced a complete kiosk flow with real screens and demo media covering navigation, search, maps, flights, transportation, Wi-Fi, and bilingual access paths.',
    stack: 'Frontend UI, JavaScript, HTML/CSS, Product Flow, Kiosk UX, Accessibility',
    stack_list: ['Frontend UI', 'JavaScript', 'HTML/CSS', 'Kiosk UX', 'Accessibility', 'Product Flow'],
    github_url: '',
    demo_url: '',
    image_url: '/assets/projects/airport-kiosk-montage.webp',
    image_alt: 'Screens from the YYC airport information kiosk prototype',
    video_url: '/assets/videos/airport-kiosk-demo.mp4',
    video_poster: '/assets/projects/airport-kiosk-poster.webp',
    gallery: [
      '/assets/projects/airport-landing.webp',
      '/assets/projects/airport-search.webp',
      '/assets/projects/airport-map.webp',
      '/assets/projects/airport-flights.webp',
      '/assets/projects/airport-directions.webp',
      '/assets/projects/airport-wifi.webp',
    ],
    evidence: ['Demo video', 'Screen captures', 'Bilingual/navigation flows'],
    featured: true,
    order: 5,
    year: '2025',
  },
  {
    id: 4,
    title: 'Brain Tumor Segmentation U-Net CNN',
    slug: 'brain-tumor-segmentation-unet',
    tagline: 'Medical image segmentation pipeline using Python, TensorFlow/Keras, preprocessing, metrics, and error analysis.',
    summary:
      'Developed and trained a U-Net convolutional neural network on grayscale MRI images for binary tumor segmentation, then evaluated predictions using Dice Score, IoU, and accuracy.',
    problem:
      'Segmentation models need careful preprocessing, metric evaluation, and error analysis to understand where predictions fail and how well masks match ground truth.',
    solution:
      'Built the model pipeline, resized and normalized MRI inputs, generated segmentation masks, compared classical thresholding against U-Net-style approaches, and documented limitations and failure modes.',
    impact:
      'Completed the full ML workflow from preprocessing and model training to metric evaluation, visual comparison, and error analysis of segmentation outputs.',
    stack: 'Python, TensorFlow/Keras, OpenCV, NumPy, Matplotlib, CNN, U-Net',
    stack_list: ['Python', 'TensorFlow/Keras', 'OpenCV', 'NumPy', 'Matplotlib', 'U-Net', 'Medical Imaging'],
    github_url: 'https://github.com/ahmedi64/BMEN509',
    demo_url: '',
    image_url: '/assets/projects/brain-tumor-results.webp',
    image_alt: 'Brain tumor segmentation results slide showing MRI masks and predictions',
    links: [
      { label: 'Technical report', href: '/assets/reports/brain-tumor-segmentation-report.pdf' },
      { label: 'Slide deck', href: '/assets/reports/brain-tumor-segmentation-slides.pdf' },
    ],
    evidence: ['Technical report', 'Slide deck', 'MRI result visuals'],
    featured: true,
    order: 6,
    year: '2025',
  },
  {
    id: 5,
    title: 'Cloud ML Performance Benchmarking',
    slug: 'cloud-ml-performance-benchmarking',
    tagline: 'Compared CNN and GAN training performance across AWS, Google Colab, and Azure using measured training and inference metrics.',
    summary:
      'Evaluated cloud platform performance for deep learning workloads by benchmarking CNN and GAN training, inference time, accuracy, and scalability-style trade-offs across multiple platforms.',
    problem:
      'ML teams need data-driven guidance when choosing cloud platforms, but platform trade-offs are hard to compare without consistent workloads and measured results.',
    solution:
      'Ran comparable CNN/GAN experiments across Google Colab, AWS, and Azure, recorded performance metrics, graphed results, and summarized which environments worked best for different workloads.',
    impact:
      'Benchmarked comparable ML workloads across cloud environments, recorded training/inference metrics, graphed results, and summarized platform trade-offs.',
    stack: 'Python, CNNs, GANs, AWS, Azure, Google Colab, Matplotlib, Performance Analysis',
    stack_list: ['Python', 'CNNs', 'GANs', 'AWS', 'Azure', 'Google Colab', 'Matplotlib'],
    github_url: 'https://github.com/ahmedi64/SENG533',
    demo_url: '',
    image_url: '/assets/projects/cloud-ml-results.webp',
    image_alt: 'Graphs and tables from the cloud ML performance benchmarking report',
    links: [{ label: 'Research report', href: '/assets/reports/cloud-ml-performance-report.pdf' }],
    evidence: ['Research report', 'Training/inference charts', 'Cloud platform comparison'],
    featured: true,
    order: 7,
    year: '2025',
  },
  {
    id: 6,
    title: 'Full-Stack Portfolio CMS',
    slug: 'fullstack-portfolio-cms',
    tagline: 'Django Admin + DRF + React version of this portfolio for database-backed content management.',
    summary:
      'Built a full-stack version of this portfolio with Django REST Framework APIs, Django Admin, models for projects/experience/skills, and a React frontend consuming the API.',
    problem:
      'A portfolio should be fast for recruiters, but the engineering behind it should still prove backend and admin-dashboard capability.',
    solution:
      'Kept the public portfolio static for instant loads while maintaining a full-stack Django CMS version as a GitHub project.',
    impact:
      'Separated the recruiter-facing static site from a database-backed Django/DRF portfolio CMS version with models, API endpoints, and admin editing.',
    stack: 'Django, Django REST Framework, React, TypeScript, SQL, Django Admin',
    stack_list: ['Django', 'DRF', 'React', 'TypeScript', 'SQL', 'Django Admin'],
    github_url: '',
    demo_url: '',
    image_url: '',
    image_alt: 'Django Admin and REST API portfolio CMS concept visual',
    links: [],
    evidence: ['Django models', 'Admin panel', 'REST API endpoints'],
    featured: true,
    order: 8,
    year: '2026',
  },

  {
  id: 8,
  title: 'IntelliPK Business Website',
  slug: 'intellipk-business-website',
  tagline:
    'Production business website for a Pakistan-based water filtration company, built from 0 to 1 with responsive design, deployment, SEO, and founder-facing digital strategy.',
  summary:
    'Built and launched intellipk.com as the company’s first public website, helping establish a professional online presence for water filtration products and services.',
  problem:
    'The company needed a credible public website to explain its products and services, build trust with customers, and create a professional online presence from scratch.',
  solution:
    'Designed and launched a responsive website with clear site architecture, product/service content, customer messaging, domain/hosting setup, deployment, and technical SEO basics.',
  impact:
    'Created the company’s first public website from 0 to 1 and gave the founder a professional digital presence for product discovery, customer trust, and ongoing updates.',
  stack: 'Web Development, Responsive Design, HTML/CSS, JavaScript, SEO, Deployment, Domain/Hosting',
  stack_list: [
    'Web Development',
    'Responsive Design',
    'HTML/CSS',
    'JavaScript',
    'SEO',
    'Deployment',
    'Domain/Hosting',
  ],
  github_url: '',
  demo_url: 'https://intellipk.com',
  image_url: '/assets/projects/intellipk-homepage.png',
  image_alt: 'IntelliPK water filtration company website homepage',
  gallery: ['/assets/projects/intellipk-homepage.png'],
  links: [{ label: 'Live website', href: 'https://intellipk.com' }],
  evidence: ['Live website', 'Client business website', '0 to 1 launch'],
  featured: true,
  order: 4,
  year: '2025',
  },

];

export const experience: Experience[] = [
  {
    id: 1,
    role: 'Full-Stack Web Developer',
    organization: 'IntelliPK',
    location: 'Remote',
    start: '2025',
    end: 'Present',
    summary:
      'Built and launched the company website from 0 to 1 for a Pakistan-based water filtration business.',
    highlight_list: [
      'Built and launched intellipk.com from 0 to 1, creating the company’s first public website and professional online presence.',
      'Worked directly with the founder from day 1 to translate business goals into site architecture, product/service pages, customer messaging, and digital strategy.',
      'Owned responsive development, deployment, domain/hosting, technical SEO, performance, and ongoing updates to improve credibility, product discovery, and customer trust.',
    ],
    order: 1,
  },
  {
    id: 2,
    role: 'Fullstack Developer Intern',
    organization: 'Self Justice',
    location: 'Remote',
    start: 'Dec 2024',
    end: 'May 2025',
    summary: 'Built backend and frontend features for a user-facing legal information platform.',
    highlight_list: [
      'Built and maintained REST API features and frontend integrations for a legal information platform used by 1,500+ users.',
      'Developed API endpoints and validation logic for legal deadline tracking, helping reduce manual tracking work.',
      'Debugged form-submission and data-processing bottlenecks, reducing processing time by roughly 50%.',
    ],
    order: 2,
  },
  {
    id: 3,
    role: 'Backend Developer Intern',
    organization: 'Inwit',
    location: 'Remote',
    start: 'Jun 2024',
    end: 'Dec 2024',
    summary: 'Developed backend-driven pages and server-side features for a web platform.',
    highlight_list: [
      'Built PHP/MVC backend features and SQL-backed workflows for a platform serving about 5,000 monthly users.',
      'Optimized SQL queries and data access patterns, reducing page load times by about 35%.',
      'Automated recurring server-side tasks and improved error handling, reducing manual intervention for the team.',
    ],
    order: 3,
  },
  {
    id: 4,
    role: 'Vice President of Finance',
    organization: 'Code the Change YYC',
    location: 'Calgary, AB',
    start: 'Jan 2023',
    end: 'Sep 2025',
    summary: 'Managed finances and resource planning for a student technology nonprofit and hackathon events.',
    highlight_list: [
      'Maintained transparent budget records and reimbursement workflows.',
      'Led budgeting for Canada-wide hackathon events with 300+ participants.',
      'Collaborated with technical and operations teams on event execution.',
    ],
    order: 4,
  },
];


export const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: '5.0',
    quote: 'They were all able to provide on the promise and deliver the project on time. Super happy on working with this team.',
    author: 'Mohammad Tahvili',
    role: 'CEO / Founder',
    organization: 'KIULOPER (Inwit)',
    project: 'Website Development',
    date: 'January 27, 2024',
  },
  {
    id: 2,
    rating: '5.0',
    quote: 'Optimized speed on four sites to be blazing fast, excellent work. Highly recommended, great research and implementation skills.',
    author: 'Richard Gastmeier',
    role: 'President',
    organization: 'Part Shops Canada Ltd.',
    project: 'RV Part Shop Redesign / ecommerce site optimization',
    date: 'March 3, 2024',
  },
  {
    id: 3,
    rating: '5.0',
    quote: 'Great work again!',
    author: 'Kyle Lacroix',
    role: 'Employer',
    organization: 'Level UP Cohort',
    project: 'Website Page Creation',
    date: 'March 29, 2024',
  },
];

export const skills: Skill[] = [
  { id: 1, name: 'Python', category: 'backend', order: 1 },
  { id: 2, name: 'Django', category: 'backend', order: 2 },
  { id: 3, name: 'Django REST Framework', category: 'backend', order: 3 },
  { id: 4, name: 'REST APIs', category: 'backend', order: 4 },
  { id: 5, name: 'SQL', category: 'backend', order: 5 },
  { id: 6, name: 'PostgreSQL', category: 'backend', order: 6 },
  { id: 7, name: 'Node.js', category: 'backend', order: 7 },
  { id: 8, name: 'WebSockets', category: 'backend', order: 8 },
  { id: 9, name: 'JavaScript/TypeScript', category: 'frontend', order: 1 },
  { id: 10, name: 'React', category: 'frontend', order: 2 },
  { id: 11, name: 'HTML/CSS', category: 'frontend', order: 3 },
  { id: 12, name: 'Frontend UI', category: 'frontend', order: 4 },
  { id: 13, name: 'TensorFlow/Keras', category: 'data_ai', order: 1 },
  { id: 14, name: 'OpenCV', category: 'data_ai', order: 2 },
  { id: 15, name: 'NumPy', category: 'data_ai', order: 3 },
  { id: 16, name: 'Matplotlib', category: 'data_ai', order: 4 },
  { id: 17, name: 'OCR Pipelines', category: 'data_ai', order: 5 },
  { id: 18, name: 'Firebase', category: 'tools', order: 1 },
  { id: 19, name: 'Docker', category: 'tools', order: 2 },
  { id: 20, name: 'Git/GitHub', category: 'tools', order: 3 },
  { id: 21, name: 'Cloud Benchmarking', category: 'tools', order: 4 },
  { id: 22, name: 'Selenium', category: 'tools', order: 5 },
  { id: 23, name: 'UI Testing', category: 'tools', order: 6 },
  { id: 24, name: 'Responsive Design', category: 'frontend', order: 5 },
  { id: 25, name: 'Technical SEO', category: 'frontend', order: 6 },
  { id: 26, name: 'Deployment', category: 'tools', order: 7 },
  { id: 27, name: 'Domain/Hosting', category: 'tools', order: 8 },
  { id: 28, name: 'Client Communication', category: 'tools', order: 9 },
];
