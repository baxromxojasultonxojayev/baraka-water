import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader.jsx';

export default function Home(){
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const t = setTimeout(()=>setLoading(false), 700); // fake loading
    return ()=>clearTimeout(t);
  },[]);

  return (
    <section id="home" className="hero container">
      <div className="hero-grid">
        <div>
          {loading ? (<>
            <Loader height={44}/>
            <Loader height={18} style={{marginTop:12}}/>
            <Loader height={18} style={{marginTop:10, width:'80%'}}/>
            <Loader height={42} style={{marginTop:16, width:'60%'}}/>
          </>) : (<>
            <h1>Baraka Water — Zarkentdan sof suv</h1>
            <p>Eng sifatli tog' suvi, to'g'ridan-to'g'ri ofisingiz va xonadoningizgacha yetkazib beramiz. Yangi mijozlar uchun maxsus takliflar mavjud.</p>
            <div className="cta">
              <button className="btn">Buyurtma qilish</button>
              <button className="btn ghost" onClick={()=>{
                const el = document.getElementById('about'); if(el) window.scrollTo({top: el.offsetTop - 72, behavior:'smooth'});
              }}>Batafsil ma'lumot</button>
            </div>
          </>)}
        </div>
        <div>
          {loading ? <Loader height={280} radius={24}/> : (
            <div className="hero-card">
              <div>
                <img src="/src/assets/logo.svg" alt="Baraka Water" width="96" height="96" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
