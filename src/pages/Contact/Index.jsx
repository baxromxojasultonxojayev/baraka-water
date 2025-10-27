import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader.jsx';

export default function Contact(){
  const [loading, setLoading] = useState(true);
  const [sent, setSent] = useState(false);

  useEffect(()=>{ const t=setTimeout(()=>setLoading(false), 700); return ()=>clearTimeout(t); },[]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(()=>setSent(false), 1800);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Biz bilan bog'laning</h2>
        <p className="lead">Buyurtma va savollar uchun formani to'ldiring — siz bilan tez orada aloqaga chiqamiz.</p>

        {loading ? (
          <div className="skeleton" style={{height:220}}/>
        ) : (
          <form className="card contact-form" onSubmit={onSubmit}>
            <input className="field" placeholder="Ism Familiya" required/>
            <input className="field" placeholder="Telefon (+998…)" required/>
            <textarea placeholder="Xabar…"/>
            <button className="submit" type="submit">Yuborish</button>
            {sent && <div style={{gridColumn:'1/-1', color:'seagreen', fontWeight:600}}>Xabar yuborildi ✅</div>}
          </form>
        )}
      </div>
    </section>
  );
}
