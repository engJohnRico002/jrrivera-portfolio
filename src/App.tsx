import { useEffect, useState, type ReactNode } from 'react'

// Images are resolved through Vite so they work on any device / after build,
// instead of relying on a raw relative path string.
const imageMap = import.meta.glob('./images/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const img = (name: string) => imageMap[`./images/${name}`] ?? `/src/images/${name}`

// Resume PDF: resolved through Vite if it lives in src/assets/, otherwise falls back
// to the copy in the public/ folder (served from the site root).
const pdfMap = import.meta.glob('./assets/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const resumeUrl = pdfMap['./assets/John_Rico_Rivera_resume.pdf'] ?? '/John_Rico_Rivera_resume.pdf'

const techGroups = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React (Vite)', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'Firebase'] },
  { title: 'Tools & Frameworks', items: ['GitHub', 'VS Code', 'Figma'] },
  { title: 'Foundational Skills', items: ['UI Design Basics', 'AI Integration (Learning)', 'PHP (Beginner)', 'Python (Learning)', 'Web Development','Data analysis', 'Networking', 'Basic Troubleshooting', 'System installation and configuration', 'UTP cable termination', 'Data backup and recovery'] },
]

// UPDATED: Using local image paths.
// IMPORTANT: Make sure these filenames match the actual photos you put in your src/images folder.
const projects = [
  { 
    title: 'CS Mock Exam', 
    subtitle: 'Civil Service Mock Examination', 
    images: [
      img('cse_m1.jpg'),
      img('cse_m2.jpg'),
      img('cse_m3.jpg'),
      img('cse_m4.jpg')
    ] 
  },
  { 
    title: 'Eventify', 
    subtitle: 'A Student Event Management System', 
    images: [
      img('eventify_img1.jpg'),
      img('eventify_img2.jpg'),
      img('eventify_img3.png'),
      img('eventify_img4.png')
    ] 
  },
  { 
    title: 'Prototypes and Wireframes', 
    subtitle: "UI/UX design for school projects", 
    images: [
      img('uniqlo1.jpg'),
      img('uniqlo2.jpg'),
      img('uniqlo3.jpg'),
      img('uniqlo4.jpg')
    ] 
  },
  { 
    title: 'Pedometer', 
    subtitle: 'Count Every Step You Take', 
    images: [
      img('pedometer1.jpeg'),
      img('pedometer2.jpeg'),
      img('pedometer3.jpeg'),
      img('pedometer4.jpeg')
    ] 
  },
]

const education = [
  { level: 'Tertiary', role: 'BS Computer Science', org: 'Don Mariano Marcos Memorial State University', year: '2022 — 2026' },
  { level: 'Secondary', role: 'Senior High School', org: 'Agoo, La Union', year: '2016 — 2022' },
  { level: 'Primary', role: 'Elementary Education', org: 'Upper Bicutan, Taguig', year: '2010 — 2016' },
]

const experience = [
  { role: 'Thesis Group Leader', org: 'Eventify: A Student Event Management System', year: '2025 — 2026' },
  { role: 'Freelance Graphic Designer', org: 'Created UI/UX, including prototypes and wireframes, for school projects.', year: '2026' },
  { role: 'Internship', org: 'Encoded BFP client information and created graphic materials.', year: '2025' },
]

const certifications = [
  { name: 'Civil Service Professional', org: 'CSC', year: '2027' },
  { name: 'Computer Systems Servicing NC II', org: 'TESDA', year: '2026' },
  { name: 'CCNA 200-301 Network Fundamentals Course', org: 'Simplilearn', year: '2026' },
  { name: 'Introduction to MS Excel', org: 'Simplilearn', year: '2026' },
  { name: 'Power BI for Beginners', org: 'Simplilearn', year: '2026' },
  { name: 'Python Essentials', org: 'CISCO', year: '2026' },
  { name: 'Data Analysis using Excel and Tableau', org: 'CISCO', year: '2025' },
  { name: 'IT Passport Examination', org: 'PhilNITS', year: '2025' },
]

const goals = [
  'To grow professionally and build a strong IT career through continuous learning and hands-on experience.',
  'To continuously develop my skills in web development and IT support while contributing to projects that create a meaningful impact.',
]

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/john-rico-rivera-1704e04' },
  { name: 'GitHub', href: 'https://github.com/engJohnRico002' },
  { name: 'Instagram', href: 'https://www.instagram.com/_ricoori?srtk=MWJyeDNzYmE3djNwdA==' },
]

// Paste your Messenger link here (e.g. https://m.me/your.username)
const messengerLink = 'https://m.me/your.username'

// Gallery photos: drop any images into src/images/gallery/ and they show up automatically
// (sorted by filename).
const galleryFiles = import.meta.glob('./images/gallery/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const gallerySlides = Object.keys(galleryFiles)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((path) => galleryFiles[path])

function Icon({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)

  useEffect(() => {}, [theme])

  const dark = theme === 'dark'

  return (
    <div className={`shell${dark ? ' dark' : ''}`}>
      <style>{`
        .shell {
          --blue: #4c7eff;
          --green: #10b981;
          --green-dark: #059669;
          --green-deep: #047857;
          --green-soft: #d1fae5;
          --gradient: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 60%, var(--green-deep) 100%);

          --bg: #eef0f4;
          --card: #ffffff;
          --text: #666c7a;
          --text-h: #12141b;
          --text-soft: #9299a6;
          --border: #e7e8ee;
          --chip-bg: #f3f4f8;
          --shadow: 0 1px 2px rgba(20,22,30,.05), 0 16px 32px -22px rgba(20,22,30,.18);

          font-family: 'Inter', system-ui, sans-serif;
          background: var(--bg);
          color: var(--text);
          font-size: 15.5px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          min-height: 100%;
          transition: background .25s ease, color .25s ease;
          box-sizing: border-box;
        }
        .shell.dark {
          --green: #34d399;
          --green-dark: #10b981;
          --green-deep: #059669;
          --green-soft: #0f2a23;
          --gradient: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 60%, var(--green-deep) 100%);

          --bg: #0a0b10;
          --card: #14161f;
          --text: #8b93a3;
          --text-h: #f2f3f8;
          --text-soft: #5b6270;
          --border: #22242f;
          --chip-bg: #1b1d28;
          --shadow: 0 1px 2px rgba(0,0,0,.35), 0 16px 32px -22px rgba(0,0,0,.65);
        }
        .shell *, .shell *::before, .shell *::after { box-sizing: border-box; }
        .shell h1, .shell h2, .shell h3, .shell h4, .shell h5 {
          font-family: 'Manrope', system-ui, sans-serif;
          color: var(--text-h);
          margin: 0;
          letter-spacing: -0.01em;
        }
        .shell a { color: inherit; }
        .shell img { max-width: 100%; display: block; }
        .shell :focus-visible { outline: 2px solid var(--green); outline-offset: 2px; }

        .wrap { max-width: 1180px; margin: 0 auto; padding: 24px 22px 48px; }

        .card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 14px 16px 16px;
          box-shadow: var(--shadow);
        }
        .card-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; gap: 10px; }
        .card-title { display: flex; align-items: center; gap: 9px; font-family: 'Manrope', system-ui, sans-serif; font-weight: 700; font-size: 15px; color: var(--text-h); }
        .card-title svg { width: 17px; height: 17px; stroke: var(--green); }

        /* ---------- HERO ---------- */
        .hero {
          display: flex;
          align-items: center;
          gap: 22px;
          margin-bottom: 14px;
          padding: 0 2px;
        }
        .hero-avatar {
          width: 140px;
          height: 176px;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
          background: var(--card);
          border: 1px solid var(--border);
        }
        .shell.dark .hero-avatar {
          background: #2a2a2a;
          border-color: #3a3a3a;
        }
        .hero-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .hero-info { flex: 1; min-width: 0; }
        .hero-name-row { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; flex-wrap: wrap; }
        .hero-name-row h1 { font-size: 25px; }
        .verified { width: 18px; height: 18px; }
        .hero-loc { display: flex; align-items: center; gap: 5px; font-size: 13px; color: var(--text); margin-bottom: 9px; }
        .hero-loc svg { width: 13px; height: 13px; stroke: var(--text-soft); }
        .hero-role { font-family: 'JetBrains Mono', ui-monospace, Consolas, monospace; font-size: 14px; color: var(--green); margin-bottom: 16px; }

        .btn-row {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 10px;
          align-items: center;
          justify-content: flex-start;
        }
        .btn { display: inline-flex; align-items: center; gap: 7px; padding: 9px 15px; border-radius: 9px; font-size: 13px; font-weight: 600; text-decoration: none; cursor: pointer; border: 1px solid var(--border); transition: transform .15s, box-shadow .2s, background .2s; white-space: nowrap; }
        .btn svg { width: 14px; height: 14px; }
        .btn-outline { background: var(--card); color: var(--text-h); }
        .btn-outline:hover { border-color: var(--green); transform: translateY(-1px); }

        /* ---------- THEME TOGGLE ---------- */
        .theme-toggle {
          width: 42px;
          height: 24px;
          border-radius: 20px;
          border: 1px solid #a9b0bf;
          background: var(--chip-bg);
          position: relative;
          cursor: pointer;
          padding: 0;
          flex-shrink: 0;
          transition: background .25s ease, border-color .25s ease;
        }
        .theme-toggle .knob {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--green);
          transition: transform .25s ease;
        }
        .shell.dark .theme-toggle {
          background: var(--green-soft);
          border-color: var(--green-dark);
        }
        .shell.dark .theme-toggle .knob {
          transform: translateX(18px);
        }

        /* ============================================================
           ROW-BASED GRID
           ============================================================ */
        .row {
          display: grid;
          gap: 14px;
          margin-bottom: 14px;
          align-items: start;
        }
        .row-2 { grid-template-columns: 1fr 1fr; align-items: stretch; }

        /* Last card in each column grows so both columns end at the same height */
        .row-2 > .col > .card:last-child { flex: 1; }
        .cert-card { display: flex; flex-direction: column; }
        .cert-card .timeline { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }

        .col { display: flex; flex-direction: column; gap: 14px; min-width: 0; }

        /* ---------- ABOUT ---------- */
        .about-card p {
          font-size: 14px;
          margin: 0 0 10px;
          text-align: justify;
          text-justify: inter-word;
          hyphens: none;
          -webkit-hyphens: none;
          -ms-hyphens: none;
          overflow-wrap: break-word;
          word-wrap: break-word;
          text-wrap: pretty;
        }
        .about-card p:last-child { margin-bottom: 0; }

        .stack-group { margin-bottom: 12px; }
        .stack-group:last-child { margin-bottom: 0; }
        .stack-group h5 { font-family: 'Manrope', system-ui, sans-serif; font-size: 12.5px; font-weight: 700; color: var(--text-h); margin: 0 0 8px; }
        .chip-list { display: flex; flex-wrap: wrap; gap: 7px; }
        .chip { font-size: 12px; font-family: 'JetBrains Mono', ui-monospace, Consolas, monospace; padding: 5px 9px; border-radius: 6px; background: var(--chip-bg); border: 1px solid var(--border); color: var(--text-h); transition: border-color .2s, transform .2s, background .2s; }
        .chip:hover { border-color: var(--green); background: var(--green-soft); transform: translateY(-1px); }

        /* ---------- TIMELINE ---------- */
        .timeline { position: relative; padding-left: 24px; }
        .timeline::before {
          content: '';
          position: absolute;
          left: 5px;
          top: 6px;
          bottom: 6px;
          width: 1.5px;
          background: var(--border);
        }
        .tl-item { position: relative; display: flex; justify-content: space-between; gap: 12px; padding: 0 0 12px 0; }
        .tl-item:last-child { padding-bottom: 0; }
        .tl-item::before {
          content: '';
          position: absolute;
          left: -24px;
          top: 5px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          border: 2px solid var(--border);
          background: var(--card);
          z-index: 1;
        }
        .tl-item:first-child::before {
          border-color: var(--green);
          background: var(--green);
          box-shadow: 0 0 0 3px var(--card), 0 0 0 4px var(--green);
        }
        .tl-item h4 { font-size: 14px; font-weight: 600; color: var(--text-h); margin-bottom: 2px; }
        .tl-item .tl-org { font-size: 12.5px; color: var(--text); }
        .tl-year { font-family: 'JetBrains Mono', ui-monospace, Consolas, monospace; font-size: 11.5px; color: var(--text-soft); white-space: nowrap; flex-shrink: 0; padding-top: 1px; }
        .tl-badge {
          display: inline-block;
          font-size: 10px;
          font-family: 'JetBrains Mono', ui-monospace, Consolas, monospace;
          color: var(--green-dark);
          background: var(--green-soft);
          border: 1px solid transparent;
          padding: 1px 6px;
          border-radius: 4px;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .shell.dark .tl-badge { color: var(--green); }

        /* ---------- PROJECTS ---------- */
        .proj-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .proj-tile {
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 8px;
          position: relative;
          transition: border-color .2s, transform .2s, background .2s;
          background: var(--card);
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        .proj-tile:hover { border-color: var(--green); background: var(--green-soft); transform: translateY(-2px); }
        
        .proj-image {
          width: 100%;
          height: 110px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 10px;
          border: 1px solid var(--border);
          transition: transform 0.3s ease;
        }
        .proj-tile:hover .proj-image {
          transform: scale(1.02);
        }

        .proj-tile h4 { font-size: 13.5px; font-weight: 600; color: var(--text-h); margin: 0 0 3px 0; padding: 0 4px; }
        .proj-tile p { font-size: 11.5px; color: var(--text); margin: 0 0 4px 0; line-height: 1.45; padding: 0 4px; }
        
        .proj-tile .proj-arrow {
          position: absolute;
          top: 12px;
          right: 12px;
          color: #fff;
          background: rgba(0,0,0,0.4);
          border-radius: 50%;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .proj-tile .proj-arrow svg { width: 12px; height: 12px; }
        .proj-tile:hover .proj-arrow { background: var(--green); color: #fff; }

        /* ---------- GOALS ---------- */
        .goal-item {
          display: flex;
          gap: 10px;
          padding: 9px 12px;
          background: var(--chip-bg);
          border-radius: 10px;
          margin-bottom: 8px;
          border: 1px solid var(--border);
        }
        .goal-item:last-child { margin-bottom: 0; }
        .goal-icon {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          background: var(--green-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid transparent;
        }
        .goal-icon svg { width: 11px; height: 11px; stroke: var(--green-dark); }
        .shell.dark .goal-icon svg { stroke: var(--green); }
        .goal-item p { font-size: 12.5px; margin: 0; color: var(--text); line-height: 1.5; }

        /* ---------- SOCIAL LINKS ---------- */
        .social-list { display: flex; flex-direction: column; gap: 8px; }
        .social-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-radius: 10px;
          text-decoration: none;
          color: var(--text-h);
          transition: background .2s, border-color .2s;
          border: 1px solid var(--border);
          background: var(--card);
        }
        .social-row:hover { background: var(--green-soft); border-color: var(--green); }
        .social-row .left { display: flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 500; }
        .social-row svg { width: 15px; height: 15px; stroke: var(--green); }
        .social-row .chev { width: 13px; height: 13px; stroke: var(--text-soft); }

        /* ---------- CONTACT ---------- */
        .contact-block p { font-size: 13px; margin: 0 0 10px; }
        .contact-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: var(--text-h); text-decoration: none; border-bottom: 1.5px solid var(--green); padding-bottom: 2px; }
        .contact-link svg { width: 12px; height: 12px; stroke: var(--green); }

        /* ---------- QUICK CONTACT ---------- */
        .quick-col { display: flex; flex-direction: column; gap: 8px; }

        /* ---------- LET'S CONNECT (single card) ---------- */
        .connect-grid { display: grid; grid-template-columns: 1fr 1fr; }
        .connect-col { min-width: 0; }
        .connect-col:first-child { padding-right: 20px; border-right: 1px solid var(--border); display: flex; flex-direction: column; }
        .connect-col:last-child { padding-left: 20px; }
        .sub-title { font-size: 12.5px; font-weight: 700; margin: 0 0 8px; color: var(--text-h); }
        .sub-gap { margin-top: auto; padding-top: 14px; }
        .connect-text { font-size: 13px; margin: 0 0 10px; }
        .social-inline { display: flex; gap: 8px; flex-wrap: wrap; }
        .social-pill {
          flex: 1 1 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 9px 12px;
          border: 1px solid var(--border);
          border-radius: 10px;
          background: var(--card);
          color: var(--text-h);
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          transition: background .2s, border-color .2s, transform .15s;
        }
        .social-pill svg { width: 15px; height: 15px; stroke: var(--green); }
        .social-pill:hover { background: var(--green-soft); border-color: var(--green); transform: translateY(-1px); }
        .mini-info {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 9px 12px;
          background: var(--chip-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          text-decoration: none;
          transition: border-color .2s, transform .2s;
        }
        .mini-info:hover { border-color: var(--green); transform: translateY(-1px); }
        .mini-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .mini-icon svg { width: 16px; height: 16px; stroke: #fff; }
        .mini-label { font-size: 11px; color: var(--text-soft); margin-bottom: 1px; }
        .mini-value { font-size: 13px; font-weight: 600; color: var(--text-h); word-break: break-all; }
        .mini-chev { margin-left: auto; width: 13px; height: 13px; stroke: var(--text-soft); flex-shrink: 0; }

        /* ---------- GALLERY ---------- */
        .gallery-card { padding-bottom: 14px; margin-bottom: 14px; }
        .gallery-viewport {
          overflow: hidden;
          margin-top: 4px;
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 32px, #000 calc(100% - 32px), transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0, #000 32px, #000 calc(100% - 32px), transparent 100%);
        }
        .carousel-track { display: flex; gap: 10px; width: max-content; animation: marquee 32s linear infinite; }
        .gallery-viewport:hover .carousel-track, .gallery-viewport:focus-within .carousel-track { animation-play-state: paused; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .g-slide { flex: 0 0 auto; width: 160px; height: 200px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); }
        .g-slide img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(85%); transition: filter .3s; }
        .g-slide:hover img { filter: grayscale(0%); }

        /* ---------- MODAL / LIGHTBOX ---------- */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .modal-content {
          background: var(--card);
          border-radius: 16px;
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          max-height: 90dvh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border);
          background: var(--card);
          z-index: 10;
        }
        .modal-title {
          font-family: 'Manrope', system-ui, sans-serif;
          font-weight: 700;
          font-size: 18px;
          color: var(--text-h);
        }
        .modal-close {
          background: var(--chip-bg);
          border: 1px solid var(--border);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-h);
          transition: background 0.2s, transform 0.2s;
        }
        .modal-close:hover {
          background: var(--green-soft);
          color: var(--green-dark);
          transform: rotate(90deg);
        }
        .modal-close svg { width: 16px; height: 16px; }

        .modal-header { flex-shrink: 0; }
        .modal-body {
          padding: 20px;
          flex: 1 1 auto;
          min-height: 0;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
          align-content: start;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .modal-body img {
          width: 100%;
          height: auto;
          min-width: 0;
          border-radius: 8px;
          border: 1px solid var(--border);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* ---------- FOOTER ---------- */
        .foot {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-top: 14px;
          padding: 0 4px;
        }
        .foot-brand { font-family: 'JetBrains Mono', ui-monospace, Consolas, monospace; font-size: 12px; color: var(--text-soft); }
        .foot a.back { font-size: 12px; color: var(--text-soft); text-decoration: none; font-family: 'JetBrains Mono', ui-monospace, Consolas, monospace; }
        .foot a.back:hover { color: var(--green); }

        /* ============================================================
           RESPONSIVE
           ============================================================ */
        @media (max-width: 960px) {
          .row-2 { grid-template-columns: 1fr; }
          .proj-grid { grid-template-columns: 1fr 1fr; }
          .connect-grid { grid-template-columns: 1fr; gap: 16px; }
          .connect-col:first-child { padding-right: 0; border-right: none; padding-bottom: 16px; border-bottom: 1px solid var(--border); }
          .connect-col:last-child { padding-left: 0; }
          .hero { flex-direction: row; align-items: center; gap: 18px; }
        }

        @media (max-width: 640px) {
          .wrap { padding: 16px 14px 40px; }
          .proj-grid { grid-template-columns: 1fr; }
          .social-pill { flex: 1 1 100%; justify-content: flex-start; }

          .hero {
            flex-direction: row;
            align-items: center;
            gap: 14px;
            padding: 0;
          }

          .hero-avatar {
            width: 96px;
            height: 121px;
            border-radius: 10px;
          }

          .hero-info { text-align: left; }
          .hero-name-row { margin-bottom: 3px; }
          .hero-name-row h1 { font-size: 18px; }
          .verified { width: 15px; height: 15px; }
          .hero-loc { font-size: 12px; margin-bottom: 6px; }
          .hero-role { font-size: 12px; margin-bottom: 12px; line-height: 1.4; }

          .btn-row {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            gap: 8px;
            align-items: center;
            justify-content: flex-start;
          }
          .btn {
            padding: 8px 12px;
            font-size: 12px;
            white-space: nowrap;
          }
          .btn svg { width: 12px; height: 12px; }

          .about-card { padding: 16px 16px 18px; }
          .about-card p {
            font-size: 13.5px;
            text-align: justify;
            text-justify: inter-word;
            hyphens: none;
            -webkit-hyphens: none;
            line-height: 1.65;
            text-wrap: pretty;
          }

          .foot {
            flex-direction: column;
            align-items: stretch;
            gap: 6px;
            text-align: center;
          }
          .foot-brand {
            text-align: center;
            font-size: 11px;
          }
          .foot a.back {
            text-align: right;
            align-self: flex-end;
            font-size: 11px;
          }

          /* Responsive Modal */
          .modal-body {
            grid-template-columns: 1fr;
            padding: 14px;
          }
          .modal-header {
            padding: 12px 16px;
          }
          .modal-title { font-size: 16px; }
        }

        @media (max-width: 380px) {
          .btn-row { gap: 6px; }
          .btn { padding: 7px 10px; font-size: 11px; }
          .btn svg { width: 11px; height: 11px; }
        }
      `}</style>

      <main className="wrap">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
          <button
            type="button"
            className="theme-toggle"
            aria-label="Toggle dark mode"
            aria-pressed={dark}
            onClick={() => setTheme(dark ? 'light' : 'dark')}
          >
            <span className="knob" />
          </button>
        </div>

        {/* HERO */}
        <div className="hero">
          <div className="hero-avatar">
            <img src={img('resume_pic.png')} alt="Portrait of John Rico Rivera" />
          </div>
          <div className="hero-info">
            <div className="hero-name-row">
              <h1>John Rico Rivera</h1>
              <svg className="verified" viewBox="0 0 24 24" fill="var(--blue)" aria-label="Verified">
                <path d="M12 2l2.4 1.3 2.7-.4 1.3 2.4 2.4 1.3-.4 2.7 1.6 2.7-1.6 2.7.4 2.7-2.4 1.3-1.3 2.4-2.7-.4L12 22l-2.4-1.3-2.7.4-1.3-2.4-2.4-1.3.4-2.7L2 12l1.6-2.7-.4-2.7 2.4-1.3 1.3-2.4 2.7.4z" stroke="none"></path>
                <path d="M8.5 12.3l2.3 2.3 4.7-4.9" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <div className="hero-loc">
              <Icon>
                <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </Icon>
              La Union, Philippines
            </div>
            <div className="hero-role">Web Developer / IT Support</div>
            <div className="btn-row">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Icon>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <path d="M14 2v6h6"></path>
                </Icon>
                View Resume
              </a>
              <a href="mailto:riverajohnrico7@gmail.com" className="btn btn-outline">
                <Icon>
                  <path d="M4 4h16v16H4z"></path>
                  <path d="M4 6l8 7 8-7"></path>
                </Icon>
                Send Email
              </a>
            </div>
          </div>
        </div>

        {/* MAIN COLUMNS: two independent stacks so cards never stretch */}
        <div className="row row-2">
          <div className="col">
            <div className="card about-card">
              <div className="card-head">
                <div className="card-title">
                  <Icon>
                    <circle cx="12" cy="8" r="4"></circle>
                    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"></path>
                  </Icon>
                  About
                </div>
              </div>
              <p>I am a Computer Science graduate of Don Mariano Marcos Memorial State University – South La Union Campus, passionate about continuous learning and creating modern, user-centered digital solutions. My current focus is on strengthening my skills in Web Development, IT Support, and Data Analysis through certifications and hands-on experience. I enjoy building applications that solve real-world problems, whether by streamlining everyday processes or turning innovative ideas into functional solutions.</p>
              <p>Beyond development, I bring practical expertise in troubleshooting PCs, laptops, and computer systems, as well as performing system configuration and installation, backed by my Computer Systems Servicing NC II certification from TESDA. I consider myself a natural problem solver, able to break down complex challenges into practical solutions, while staying detail-oriented, adaptable, and driven by curiosity. I value collaboration and enjoy working closely with a team, exchanging ideas and building solutions together. Above all, I remain committed to continuous growth, always working toward becoming a well-rounded IT professional.</p>
            </div>

            <div className="card">
              <div className="card-head">
                <div className="card-title">
                  <Icon>
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </Icon>
                  Education
                </div>
              </div>
              <div className="timeline">
                {education.map((item) => (
                  <div className="tl-item" key={`${item.role}-${item.year}`}>
                    <div>
                      <span className="tl-badge">{item.level}</span>
                      <h4>{item.role}</h4>
                      <div className="tl-org">{item.org}</div>
                    </div>
                    <span className="tl-year">{item.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="card-head">
                <div className="card-title">
                  <Icon>
                    <rect x="2" y="7" width="20" height="14" rx="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </Icon>
                  Experience
                </div>
              </div>
              <div className="timeline">
                {experience.map((item) => (
                  <div className="tl-item" key={`${item.role}-${item.year}`}>
                    <div>
                      <h4>{item.role}</h4>
                      <div className="tl-org">{item.org}</div>
                    </div>
                    <span className="tl-year">{item.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-head">
                <div className="card-title">
                  <Icon>
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </Icon>
                  Tech Stack
                </div>
              </div>
              {techGroups.map((group) => (
                <div className="stack-group" key={group.title}>
                  <h5>{group.title}</h5>
                  <div className="chip-list">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="card cert-card">
              <div className="card-head">
                <div className="card-title">
                  <Icon>
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M9 14l-2 7 5-3 5 3-2-7"></path>
                  </Icon>
                  Recent Certifications
                </div>
              </div>
              <div className="timeline">
                {certifications.map((item) => (
                  <div className="tl-item" key={`${item.name}-${item.year}`}>
                    <div>
                      <h4>{item.name}</h4>
                      <div className="tl-org">{item.org}</div>
                    </div>
                    <span className="tl-year">{item.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="row">
          <div className="card">
            <div className="card-head">
              <div className="card-title">
                <Icon>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </Icon>
                Recent Projects
              </div>
            </div>
            <div className="proj-grid">
              {projects.map((project) => (
                <div 
                  className="proj-tile" 
                  key={project.title}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Uses the first image from the local folder as the thumbnail */}
                  <img src={project.images[0]} alt={project.title} className="proj-image" />
                  <div className="proj-arrow">
                    <Icon>
                      <path d="M7 17L17 7M7 7h10v10"></path>
                    </Icon>
                  </div>
                  <h4>{project.title}</h4>
                  <p>{project.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GOALS + CONTACT (single card) */}
        <div className="row">
          <div className="card">
            <div className="card-head">
              <div className="card-title">
                <Icon>
                  <circle cx="12" cy="12" r="9"></circle>
                  <circle cx="12" cy="12" r="5"></circle>
                  <circle cx="12" cy="12" r="1"></circle>
                </Icon>
                Let's Connect
              </div>
            </div>

            <div className="connect-grid">
              <div className="connect-col">
                <h5 className="sub-title">Goals</h5>
                {goals.map((goal, index) => (
                  <div className="goal-item" key={goal}>
                    <div className="goal-icon">
                      <Icon>
                        {index === 0 ? <path d="M12 2v20M2 12h20"></path> : <path d="M20 6L9 17l-5-5"></path>}
                      </Icon>
                    </div>
                    <p>{goal}</p>
                  </div>
                ))}

                <h5 className="sub-title sub-gap">Social Links</h5>
                <div className="social-inline">
                  {socialLinks.map((link) => (
                    <a className="social-pill" href={link.href} key={link.name} target="_blank" rel="noopener noreferrer">
                      {link.name === 'LinkedIn' && (
                        <Icon>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                          <path d="M10 9h4v2a4 4 0 0 1 4-2c3 0 4 2 4 5v7h-4v-6c0-1.5-.5-2.5-2-2.5s-2 1-2 2.5v6h-4z"></path>
                        </Icon>
                      )}
                      {link.name === 'GitHub' && (
                        <Icon>
                          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path>
                        </Icon>
                      )}
                      {link.name === 'Instagram' && (
                        <Icon>
                          <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                          <circle cx="12" cy="12" r="4"></circle>
                          <circle cx="17.5" cy="6.5" r="1"></circle>
                        </Icon>
                      )}
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="connect-col">
                <h5 className="sub-title">Contact</h5>
                <p className="connect-text">Let's work together, whether for a collaboration or a freelance project.</p>
                <div className="quick-col">
                  <a href="mailto:riverajohnrico7@gmail.com" className="mini-info">
                    <div className="mini-icon">
                      <Icon>
                        <path d="M4 4h16v16H4z"></path>
                        <path d="M4 6l8 7 8-7"></path>
                      </Icon>
                    </div>
                    <div>
                      <div className="mini-label">Email</div>
                      <div className="mini-value">riverajohnrico7@gmail.com</div>
                    </div>
                    <Icon className="mini-chev">
                      <path d="M9 18l6-6-6-6"></path>
                    </Icon>
                  </a>

                  <a href="tel:09123456789" className="mini-info">
                    <div className="mini-icon">
                      <Icon>
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2z"></path>
                      </Icon>
                    </div>
                    <div>
                      <div className="mini-label">Let's Talk</div>
                      <div className="mini-value">0912-3456-789</div>
                    </div>
                    <Icon className="mini-chev">
                      <path d="M9 18l6-6-6-6"></path>
                    </Icon>
                  </a>

                  <a href={messengerLink} target="_blank" rel="noopener noreferrer" className="mini-info">
                    <div className="mini-icon">
                      <Icon>
                        <path d="M21 11.5a8.4 8.4 0 0 1-1 4 8.5 8.5 0 0 1-7.5 4.5 8.4 8.4 0 0 1-4-1L3 20l1-5.5a8.4 8.4 0 0 1-1-4 8.5 8.5 0 0 1 4.5-7.5 8.4 8.4 0 0 1 4-1h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </Icon>
                    </div>
                    <div>
                      <div className="mini-label">Messenger</div>
                      <div className="mini-value">Chat with me</div>
                    </div>
                    <Icon className="mini-chev">
                      <path d="M9 18l6-6-6-6"></path>
                    </Icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GALLERY */}
        <div className="card gallery-card">
          <div className="card-head">
            <div className="card-title">
              <Icon>
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <path d="M21 15l-5-5L5 21"></path>
              </Icon>
              Gallery
            </div>
          </div>
          <div className="gallery-viewport">
            <div className="carousel-track">
              {[...gallerySlides, ...gallerySlides].map((src, index) => (
                <div className="g-slide" key={`${src}-${index}`} aria-hidden={index >= gallerySlides.length}>
                  <img
                    src={src}
                    alt={index < gallerySlides.length ? `Gallery item ${index + 1}` : ''}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="foot">
          <span className="foot-brand">© 2026 John Rico Rivera — All rights reserved.</span>
          <a href="#top" className="back">↑ back to top</a>
        </div>

        {/* LIGHTBOX MODAL */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-title">{selectedProject.title} — Photos</div>
                <button 
                  className="modal-close" 
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close"
                >
                  <Icon>
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </Icon>
                </button>
              </div>
              <div className="modal-body">
                {selectedProject.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${selectedProject.title} screenshot ${idx + 1}`} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}