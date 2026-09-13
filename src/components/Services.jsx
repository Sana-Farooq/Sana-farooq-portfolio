import { useState } from 'react';

const services = [
  {
    icon: 'fa-solid fa-desktop',
    title: 'Frontend Development',
    text: 'I create clean, modern, and responsive user interfaces using React, Tailwind CSS, JavaScript, HTML, CSS, and Bootstrap.',
    included: [
      'React UI Development',
      'Tailwind CSS Design',
      'Responsive Layouts',
      'Interactive Components',
      'Modern Landing Pages',
      'Cross-Browser Compatibility',
    ],
  },
  {
    icon: 'fa-brands fa-react',
    title: 'React Development',
    text: 'I build modern React applications with reusable components, dynamic interfaces, and smooth user experiences.',
    included: [
      'Reusable React Components',
      'API Integration',
      'State Management',
      'Dynamic Interfaces',
      'Form Handling',
      'Performance Optimization',
    ],
  },
  {
    icon: 'fa-solid fa-palette',
    title: 'Landing Pages & Websites',
    text: 'I build professional websites and landing pages that are responsive, fast, modern, and designed to create a strong online presence.',
    included: [
      'Business Websites',
      'Landing Page Development',
      'Responsive Design',
      'Modern UI Implementation',
      'Contact Forms',
      'Performance Optimization',
    ],
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench',
    title: 'UI Fixes & Improvements',
    text: 'I improve existing websites by fixing frontend issues, responsive layouts, UI bugs, and performance problems.',
    included: [
      'UI Bug Fixes',
      'Responsive Fixes',
      'Frontend Refactoring',
      'Performance Improvements',
      'Cross-Browser Fixes',
      'Code Cleanup',
    ],
  },
  {
    icon: 'fa-solid fa-rocket',
    title: 'Full-Stack Development',
    text: 'I build complete web applications using React, Laravel, PHP, and MySQL with clean architecture and maintainable code.',
    included: [
      'React Frontend',
      'Laravel Backend',
      'REST API Development',
      'MySQL Database',
      'Authentication',
      'Admin Panels',
    ],
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Freelance Collaboration',
    text: 'I collaborate with businesses and agencies on frontend development, feature development, bug fixing, and complete web projects.',
    included: [
      'Frontend Development',
      'Feature Development',
      'Bug Fixing',
      'API Integration',
      'Existing Project Support',
      'Long-Term Collaboration',
    ],
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Discovery',
    text: 'Goals, scope & requirements',
    active: false,
  },
  {
    num: '02',
    title: 'Design',
    text: 'Wireframes & architecture',
    active: false,
  },
  {
    num: '03',
    title: 'Build',
    text: 'Agile sprints & reviews',
    active: true,
  },
  {
    num: '04',
    title: 'Test',
    text: 'QA, performance & security',
    active: false,
  },
  {
    num: '05',
    title: 'Launch',
    text: 'Deploy & ongoing support',
    active: false,
  },
];

function ServiceCard({ service }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-surface border border-[rgba(109,123,255,0.1)] rounded-xl p-7 card-hover top-line relative overflow-hidden flex flex-col">

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[rgba(109,123,255,0.1)] border border-[rgba(109,123,255,0.2)] flex items-center justify-center text-2xl mb-5">
        <i className={service.icon}></i>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-lg text-[#e8eef5] mb-3">
        {service.title}
      </h3>

      {/* Short Description */}
      <p className="text-[13.5px] text-[#7a8a9a] leading-relaxed">
        {service.text}
      </p>

      {/* Expanded Content */}
      {expanded && (
        <div className="mt-5 pt-4 border-t border-[rgba(109,123,255,0.08)]">

          <p className="font-display font-semibold text-sm text-[#e8eef5] mb-3">
            → What's Included:
          </p>

          <ul className="space-y-2">
            {service.included.map((item) => (
              <li
                key={item}
                className="text-[13px] text-[#7a8a9a] flex items-start gap-2"
              >
                <span className="text-cyan mt-[2px]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
      )}

      {/* Show More / Show Less */}
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="font-mono text-[11px] text-cyan flex items-center gap-1.5 hover:opacity-70 transition-opacity mt-4"
      >
        {expanded ? 'Show Less' : 'Show More'}

        <i
          className={`fa-solid ${
            expanded ? 'fa-chevron-up' : 'fa-chevron-down'
          } text-[9px]`}
        ></i>
      </button>

      {/* Get Started */}
      {expanded && (
        <a
          href="#contact"
          className="btn-primary text-xs justify-center mt-5 w-full"
        >
          Get Started
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="px-[6vw] py-28">

      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">

          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight">
            My <span className="text-cyan">Services</span>
          </h2>

          <p className="text-[#7a8a9a] text-sm max-w-xs">
            End-to-end web development services focused on clean design,
            performance, and reliable functionality.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-24">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}

        </div>

        {/* Development Process */}
        <div className="bg-surface border border-[rgba(109,123,255,0.08)] rounded-2xl p-6 sm:p-10">

          <h3 className="font-display font-bold text-2xl text-center text-[#e8eef5] mb-12">
            My Development Process
          </h3>

          <div className="relative grid grid-cols-1 sm:grid-cols-5 gap-10 sm:gap-0">

            {/* Process Line */}
            <div className="process-line hidden sm:block"></div>

            {processSteps.map((step) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center px-3 relative z-10"
              >

                {/* Number */}
                <div
                  className={`w-13 h-13 rounded-full flex items-center justify-center font-mono text-sm text-cyan mb-4 border ${
                    step.active
                      ? 'bg-[rgba(109,123,255,0.12)] border-cyan'
                      : 'bg-card border-[rgba(109,123,255,0.3)]'
                  }`}
                >
                  {step.num}
                </div>

                {/* Title */}
                <p
                  className={`font-display font-semibold text-[13px] mb-1.5 ${
                    step.active
                      ? 'text-cyan'
                      : 'text-[#e8eef5]'
                  }`}
                >
                  {step.title}
                </p>

                {/* Description */}
                <p className="text-[11px] text-[#7a8a9a] leading-relaxed">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
