import useReveal from '../hooks/useReveal';

export default function Reveal({ children, index = 0, className = '', as: Tag = 'div', ...rest }) {
  const [ref, inView] = useReveal({ threshold: 0.15, delay: (index % 6) * 70 });

  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in-view' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}