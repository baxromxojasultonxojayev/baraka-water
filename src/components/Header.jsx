import React, { useEffect, useMemo, useState } from 'react';
import logo from '../assets/logo.svg';

const LINKS = [
  { id: 'home', label: 'Asosiy menyu' },
  { id: 'partners', label: 'Bizning hamkorlar' },
  { id: 'about', label: 'Biz haqimizda' },
  { id: 'contact', label: 'Biz bilan bog\'laning' },
];

export default function Header(){
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = LINKS.map(l => document.getElementById(l.id)).filter(Boolean);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          setActive(e.target.id);
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0.01 });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const onNav = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if(!el) return;
    window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="brand" onClick={(e)=>{e.preventDefault(); onNav('home');}}>
          <img src={logo} alt="Baraka Water" />
          <b>Baraka Water</b>
        </a>

        <nav className="nav" aria-label="Primary">
          {LINKS.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={(e)=>{e.preventDefault(); onNav(l.id);}}
               className={active===l.id ? 'active' : ''}>
              {l.label}
            </a>
          ))}
        </nav>

        <button className="hamburger" onClick={()=>setOpen(true)} aria-label="Open menu">☰</button>
      </div>

      <div className={open ? 'sheet open' : 'sheet'} onClick={()=>setOpen(false)}>
        <div className="sheet-panel" onClick={(e)=>e.stopPropagation()}>
          <div className="sheet-grid">
            {LINKS.map(l => (
              <a key={l.id} href={`#${l.id}`} onClick={(e)=>{e.preventDefault(); onNav(l.id);}}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
