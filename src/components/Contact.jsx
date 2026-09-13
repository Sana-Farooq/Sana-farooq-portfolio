import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_PUBLIC_KEY = 'EE2PYPl6f7xDrnhCe';
const EMAILJS_SERVICE_ID = 'service_hsv341w';
const EMAILJS_TEMPLATE_ID = 'template_yivm0bq';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY })
      .then(() => {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 3000);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      });
  };

  const buttonLabel = {
    idle: (<>Send Message <i className="fa-solid fa-arrow-right"></i></>),
    sending: 'Sending...',
    success: 'Message Sent ✓',
    error: 'Failed! Try Again',
  }[status];

  const buttonStyle = status === 'success' ? { background: '#0a6375' } : status === 'error' ? { background: 'red' } : undefined;

  return (
    <section id="contact" className="px-[6vw] py-28">
      <div className="max-w-6xl mx-auto">
        <span className="tag">Get In Touch</span>
        <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-3">
          Let's build something <span className="text-cyan">together</span>
        </h2>
        <p className="text-[#7a8a9a] text-base mb-14 max-w-lg">
          Have a project in mind, need a developer, or just want to chat? Drop me a message — I usually reply within 24 hours.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2 space-y-7">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[rgba(109,123,255,0.08)] border border-[rgba(109,123,255,0.2)] flex items-center justify-center text-lg shrink-0 mt-1">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p className="font-mono text-xs text-[#7a8a9a] uppercase tracking-widest mb-1">Email</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sanafarooqq909@gmail.com" target="_blank" rel="noreferrer">
                  sanafarooqq909@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[rgba(109,123,255,0.08)] border border-[rgba(109,123,255,0.2)] flex items-center justify-center text-lg shrink-0 mt-1">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <p className="font-mono text-xs text-[#7a8a9a] uppercase tracking-widest mb-1">Location</p>
                <p className="text-[15px] text-[#e8eef5] font-medium">Bahawalpur, Pakistan (Remote OK)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[rgba(109,123,255,0.08)] border border-[rgba(109,123,255,0.2)] flex items-center justify-center text-lg shrink-0 mt-1">
                <i className="fa-solid fa-alarm-clock"></i>
              </div>
              <div>
                <p className="font-mono text-xs text-[#7a8a9a] uppercase tracking-widest mb-1">Availability</p>
                <p className="text-[15px] text-[#e8eef5] font-medium">Open to freelance &amp; contracts</p>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs text-[#7a8a9a] uppercase tracking-widest mb-4">Find me online</p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://www.linkedin.com/in/sana-farooq-353995369" className="w-11 h-11 border border-[rgba(109,123,255,0.12)] rounded-xl flex items-center justify-center text-lg hover:border-[rgba(109,123,255,0.35)] hover:bg-[rgba(109,123,255,0.08)] hover:-translate-y-1 transition-all">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/Sana-Farooq" className="w-11 h-11 border border-[rgba(109,123,255,0.12)] rounded-xl flex items-center justify-center text-lg hover:border-[rgba(109,123,255,0.35)] hover:bg-[rgba(109,123,255,0.08)] hover:-translate-y-1 transition-all">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sanafarooqq909@gmail.com" target="_blank" rel="noreferrer" className="w-11 h-11 border border-[rgba(109,123,255,0.12)] rounded-xl flex items-center justify-center text-lg hover:border-[rgba(109,123,255,0.35)] hover:bg-[rgba(109,123,255,0.08)] hover:-translate-y-1 transition-all">
                  <i className="fa-solid fa-at"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-surface border border-[rgba(109,123,255,0.1)] rounded-2xl p-8">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="font-mono text-xs text-[#7a8a9a] uppercase tracking-widest mb-2 block">Your Name</label>
                  <input name="user_name" type="text" placeholder="Sana" required />
                </div>
                <div>
                  <label className="font-mono text-xs text-[#7a8a9a] uppercase tracking-widest mb-2 block">Email Address</label>
                  <input name="user_email" type="email" placeholder="sana@example.com" required />
                </div>
              </div>
              <div className="mb-5">
                <label className="font-mono text-xs text-[#7a8a9a] uppercase tracking-widest mb-2 block">Subject</label>
                <input name="subject" type="text" placeholder="Project Inquiry" />
              </div>
              <div className="mb-7">
                <label className="font-mono text-xs text-[#7a8a9a] uppercase tracking-widest mb-2 block">Message</label>
                <textarea name="message" className="p-3" rows="3" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button className="btn-primary w-full justify-center text-sm" type="submit" disabled={status === 'sending'} style={buttonStyle}>
                {buttonLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}