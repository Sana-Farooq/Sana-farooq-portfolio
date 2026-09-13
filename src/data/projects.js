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
  { id: 'fahad-motors', title: 'Fahad Motors', tags: ['laravel', 'mysql', 'admin-panel'], image: fahadMotorsImg, badge: { type: 'live', label: '● Live' }, pills: ['Laravel', 'MySQL', 'Admin Panel'], description: "An admin panel built for managing a motors dealership's operations, featuring a Laravel-powered backend for streamlined data control and management.", github: 'https://github.com/Sana-Farooq' },
  { id: 'mansha-motors-site', title: 'Mansha Motors – Website', tags: ['html', 'bootstrap', 'javascript'], image: manshaMotorsImg, badge: { type: 'live', label: '● Live' }, pills: ['HTML', 'Bootstrap', 'JavaScript'], description: 'A fully responsive, dynamic dealership website built with HTML and Bootstrap, with all content and listings controlled through a custom admin panel.', demo: 'https://manshamotors.com/', github: 'https://github.com/Sana-Farooq' },
  { id: 'mansha-motors-admin', title: 'Mansha Motors – Admin Panel', tags: ['laravel', 'mysql', 'admin-panel'], image: manshaMotorsAdminImg, badge: { type: 'live', label: '● Live' }, pills: ['Laravel', 'MySQL', 'Admin Panel'], description: "A Laravel-powered backend and CMS for managing the dealership's operations — including purchase, sale, and installment tracking — with full control over the live website's content.", github: 'https://github.com/Sana-Farooq' },
  { id: 'multi-llm', title: 'Multi-LLM', tags: ['tailwindcss', 'api', 'openrouter'], image: multiLlmImg, badge: { type: 'live', label: '● Live' }, pills: ['Tailwind CSS', 'OpenRouter API', 'Gemini', 'ChatGPT', 'LLaMA'], description: 'A unified AI chat interface integrating Gemini, ChatGPT, and LLaMA through OpenRouter API, allowing seamless model switching and side-by-side response comparison.', demo: 'https://multillm.markdev.org/', github: 'https://github.com/Sana-Farooq' },
  { id: 'vartexsoft', title: 'VartexSoft', tags: ['html', 'tailwindcss', 'javascript'], image: vartexSoftImg, badge: { type: 'live', label: '● Live' }, pills: ['HTML', 'Tailwind CSS', 'JavaScript', 'EmailJS'], description: 'A fully responsive client-facing website for a software house, featuring services, portfolio, and a live contact form powered by EmailJS.', demo: 'https://vartexsoft.com/', github: 'https://github.com/Sana-Farooq' },
  { id: 'ilmequran', title: 'IlmeQuran Academy', tags: ['html', 'tailwindcss', 'javascript'], image: ilmeQuranImg, badge: { type: 'live', label: '● Live' }, pills: ['HTML', 'Tailwind CSS', 'JavaScript', 'EmailJS'], description: 'A responsive client-facing website for an online Quran learning academy with course listings, enrollment forms, and live email integration.', demo: 'https://www.ilmequranacademy.com/', github: 'https://github.com/Sana-Farooq' },
  { id: 'travel-sphere', title: 'Travel Sphere', tags: ['html', 'tailwindcss', 'javascript'], image: travelSphereImg, badge: { type: 'vercel', label: '▲ Vercel' }, pills: ['HTML', 'Tailwind CSS', 'JavaScript'], description: 'A modern, fully responsive travel website showcasing destinations, tour packages, and travel guides with smooth UI interactions.', demo: 'https://travel-sphere-nine-mu.vercel.app/', github: 'https://github.com/Sana-Farooq' },
  { id: 'psychologist-website', title: 'Psychologist Website', tags: ['html', 'tailwindcss', 'javascript'], image: psychologistImg, badge: { type: 'vercel', label: '▲ Vercel' }, pills: ['HTML', 'Tailwind CSS', 'JavaScript'], description: 'A calming, responsive personal website for a psychologist featuring services, session booking info, testimonials, and a contact section.', demo: 'https://psychologist-website-sigma.vercel.app/', github: 'https://github.com/Sana-Farooq' },
  { id: 'newsorbit', title: 'NewsOrbit', tags: ['react', 'javascript'], image: newsOrbitImg, badge: { type: 'vercel', label: '▲ Vercel' }, pills: ['React', 'JavaScript', 'GNews API'], description: 'Orbit around global headlines with NewsOrbit — a React-powered news app fetching live articles across categories via the GNews API.', demo: 'https://news-orbit.vercel.app/', github: 'https://github.com/Sana-Farooq' },
  { id: 'textutils', title: 'TextUtils', tags: ['react', 'javascript'], image: textUtilsImg, badge: { type: 'vercel', label: '▲ Vercel' }, pills: ['React', 'JavaScript'], description: 'A simple yet handy React text utility app — convert case, remove extra spaces, count words & characters, and more in real time.', demo: 'https://textutils-smoky.vercel.app', github: 'https://github.com/Sana-Farooq' },
  { id: 'todo-list', title: 'To-Do List', tags: ['react', 'javascript'], image: todoListImg, badge: { type: 'vercel', label: '▲ Vercel' }, pills: ['React', 'JavaScript'], description: 'A clean React to-do application that lets users add, view, and delete daily tasks — built for simplicity and everyday productivity.', demo: 'https://rhombix-technologies-tasks.vercel.app/', github: 'https://github.com/Sana-Farooq' },
  { id: 'crowdventures', title: 'CrowdVentures', tags: ['html', 'tailwindcss'], image: crowdVenturesImg, badge: { type: 'vercel', label: '▲ Vercel' }, pills: ['HTML', 'CSS'], description: 'A responsive, modern client-facing multi-page website for CrowdVentures — a crowdfunding platform — built with clean HTML & CSS.', demo: 'https://crowdventures.vercel.app/', github: 'https://github.com/Sana-Farooq' },
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