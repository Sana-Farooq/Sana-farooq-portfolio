import fahadMotorsImg from '../assets/images/fahadMotorsAdminPanel.png';
import manshaMotorsImg from '../assets/images/manshaMotors.png';
import manshaMotorsAdminImg from '../assets/images/manshaMotorsAdminPanel.png';
import multiLlmImg from '../assets/images/Multi-LLM.png';
import vartexSoftImg from '../assets/images/vertaxSoft.png';
import ilmeQuranImg from '../assets/images/ilmequran.png';
import travelSphereImg from '../assets/images/travel-website.png';
import psychologistImg from '../assets/images/psycology-website.png';
import newsOrbitImg from '../assets/images/newsOrbit.png';
import textUtilsImg from '../assets/images/textUtils.png';
import todoListImg from '../assets/images/todo-site.png';
import crowdVenturesImg from '../assets/images/crowdVenture.png';

const projects = [
  {
    id: 'fahad-motors',
    origin: 'agency',
    title: 'Fahad Motors',
    tags: ['laravel', 'php', 'mysql', 'admin-panel'],
    image: fahadMotorsImg,
    badge: { type: 'live', label: '● Live' },
    pills: ['Laravel', 'MySQL', 'Admin Panel'],
    description:
      "Developed as part of an agency engagement, this Laravel-powered admin panel gives a motors dealership centralized control over daily operations — from inventory to data management — replacing manual processes with a streamlined backend system.",
    github: 'https://github.com/Sana-Farooq',
  },

  {
    id: 'mansha-motors-site',
    origin: 'agency',
    team: true,
    title: 'Mansha Motors – Website',
    tags: ['html', 'bootstrap', 'javascript', 'rest-api'],
    image: manshaMotorsImg,
    badge: { type: 'live', label: '● Live' },
    pills: ['HTML', 'Bootstrap', 'JavaScript'],
    description:
      'Built collaboratively as part of an agency team, this fully responsive dealership website pairs an HTML and Bootstrap frontend with a custom admin panel, giving the client full control over listings and content without touching code.',
    demo: 'https://manshamotors.com/',
    github: 'https://github.com/Sana-Farooq',
  },

  {
    id: 'mansha-motors-admin',
    origin: 'agency',
    team: true,
    title: 'Mansha Motors – Admin Panel',
    tags: ['laravel', 'php', 'mysql', 'admin-panel', 'rest-api'],
    image: manshaMotorsAdminImg,
    badge: { type: 'live', label: '● Live' },
    pills: ['Laravel', 'MySQL', 'Admin Panel'],
    description:
      "The backend counterpart to the Mansha Motors website, built collaboratively with an agency team — a Laravel-powered CMS handling purchase, sale, and installment tracking, with full content control over the live site.",
    github: 'https://github.com/Sana-Farooq',
  },

  {
    id: 'multi-llm',
    origin: 'agency',
    title: 'Multi-LLM',
    tags: ['tailwindcss', 'api', 'openrouter', 'vercel', 'rest-api'],
    image: multiLlmImg,
    badge: { type: 'live', label: '● Live' },
    pills: ['Tailwind CSS', 'OpenRouter API', 'Gemini', 'ChatGPT', 'LLaMA'],
    description:
      'An independent agency project exploring multi-model AI integration — a unified chat interface connecting Gemini, ChatGPT, and LLaMA through the OpenRouter API for seamless switching and side-by-side comparison. Live demo domain has since expired; code is available on GitHub.',
    github: 'https://github.com/Sana-Farooq',
  },

  {
    id: 'vartexsoft',
    origin: 'agency',
    title: 'VartexSoft',
    tags: ['html', 'tailwindcss', 'javascript', 'emailjs'],
    image: vartexSoftImg,
    badge: { type: 'live', label: '● Live' },
    pills: ['HTML', 'Tailwind CSS', 'JavaScript', 'EmailJS'],
    description:
      'A client-facing website built for a software house during an agency engagement, featuring a services and portfolio showcase with a live contact form powered by EmailJS.',
    demo: 'https://vartexsoft.com/',
    github: 'https://github.com/Sana-Farooq',
  },

  {
    id: 'ilmequran',
    origin: 'agency',
    title: 'IlmeQuran Academy',
    tags: ['html', 'tailwindcss', 'javascript', 'vercel', 'emailjs'],
    image: ilmeQuranImg,
    badge: { type: 'live', label: '● Live' },
    pills: ['HTML', 'Tailwind CSS', 'JavaScript', 'EmailJS'],
    description:
      'An agency-built client website for an online Quran learning academy, featuring course listings, enrollment forms, and live email integration for direct inquiries.',
    demo: 'https://www.ilmequranacademy.com/',
    github: 'https://github.com/Sana-Farooq',
  },

  {
    id: 'travel-sphere',
    origin: 'practice',
    title: 'Travel Sphere',
    tags: ['html', 'tailwindcss', 'javascript', 'vercel'],
    image: travelSphereImg,
    badge: { type: 'vercel', label: '▲ Vercel' },
    pills: ['HTML', 'Tailwind CSS', 'JavaScript'],
    description:
      'A personal practice project built to sharpen responsive design skills — a fully responsive travel website showcasing destinations and tour packages with smooth UI interactions.',
    demo: 'https://travel-sphere-nine-mu.vercel.app/',
    github: 'https://github.com/Sana-Farooq',
  },

  {
    id: 'psychologist-website',
    origin: 'practice',
    title: 'Psychologist Website',
    tags: ['html', 'tailwindcss', 'javascript', 'vercel'],
    image: psychologistImg,
    badge: { type: 'vercel', label: '▲ Vercel' },
    pills: ['HTML', 'Tailwind CSS', 'JavaScript'],
    description:
      'A personal practice project — a calming, responsive website concept for a psychologist, covering services, session booking information, and a contact section.',
    demo: 'https://psychologist-website-sigma.vercel.app/',
    github: 'https://github.com/Sana-Farooq',
  },

  // {
  //   id: 'newsorbit',
  //   origin: 'practice',
  //   title: 'NewsOrbit',
  //   tags: ['react', 'javascript', 'rest-api', 'vercel'],
  //   image: newsOrbitImg,
  //   badge: { type: 'vercel', label: '▲ Vercel' },
  //   pills: ['React', 'JavaScript', 'GNews API'],
  //   description:
  //     'A personal practice project built to work with external APIs in React — a live news app pulling categorized headlines from the GNews API.',
  //   demo: 'https://news-orbit.vercel.app/',
  //   github: 'https://github.com/Sana-Farooq',
  // },

  {
    id: 'textutils',
    origin: 'practice',
    title: 'TextUtils',
    tags: ['react', 'javascript', 'vercel'],
    image: textUtilsImg,
    badge: { type: 'vercel', label: '▲ Vercel' },
    pills: ['React', 'JavaScript'],
    description:
      'A personal practice project exploring React state management — a lightweight text utility app for case conversion, whitespace cleanup, and live word and character counts.',
    demo: 'https://textutils-smoky.vercel.app',
    github: 'https://github.com/Sana-Farooq/textutils',
  },

  {
    id: 'todo-list',
    origin: 'practice',
    title: 'To-Do List',
    tags: ['react', 'javascript', 'vercel'],
    image: todoListImg,
    badge: { type: 'vercel', label: '▲ Vercel' },
    pills: ['React', 'JavaScript'],
    description:
      'A personal practice project — a clean React to-do app for adding, viewing, and deleting daily tasks, built to reinforce core React fundamentals.',
    demo: 'https://rhombix-technologies-tasks.vercel.app/',
    github: 'https://github.com/Sana-Farooq/Todo_App',
  },

  // {
  //   id: 'crowdventures',
  //   origin: 'practice',
  //   title: 'CrowdVentures',
  //   tags: ['html', 'tailwindcss'],
  //   image: crowdVenturesImg,
  //   badge: { type: 'vercel', label: '▲ Vercel' },
  //   pills: ['HTML', 'CSS'],
  //   description:
  //     'A personal practice project — a multi-page crowdfunding platform concept built with clean HTML and CSS to practice structuring a multi-page site.',
  //   demo: 'https://crowdventures.vercel.app/',
  //   github: 'https://github.com/Sana-Farooq',
  // },
];

export const filters = [
  { label: 'All', value: 'all' },
  { label: 'HTML/CSS', value: 'html' },
  { label: 'Tailwind CSS', value: 'tailwindcss' },
  { label: 'React', value: 'react' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Laravel', value: 'laravel' },
];

export default projects;