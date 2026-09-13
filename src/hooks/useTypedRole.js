import { useEffect, useState } from 'react';

const DEFAULT_ROLES = ['Frontend Dev.', 'Problem Solver.', 'Full Stack Dev.', 'UI Designer.', 'Laravel Developer'];

export default function useTypedRole(roles = DEFAULT_ROLES) {
  const [text, setText] = useState('');

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function tick() {
      const current = roles[roleIndex];
      if (!isDeleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          timeoutId = setTimeout(() => { isDeleting = true; tick(); }, 1800);
          return;
        }
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      const speed = isDeleting ? 50 : 90;
      timeoutId = setTimeout(tick, speed);
    }

    const startId = setTimeout(tick, 600);
    return () => { clearTimeout(startId); clearTimeout(timeoutId); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}