import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader.jsx';

const mock = [
  { name: 'Techno Park', img: 'https://dummyimage.com/96x96/90caf9/ffffff&text=T' },
  { name: 'Bank Invest', img: 'https://dummyimage.com/96x96/81d4fa/ffffff&text=B' },
  { name: 'Soft City', img: 'https://dummyimage.com/96x96/4fc3f7/ffffff&text=S' },
  { name: 'LogiPro', img: 'https://dummyimage.com/96x96/29b6f6/ffffff&text=L' },
  { name: 'Green Office', img: 'https://dummyimage.com/96x96/03a9f4/ffffff&text=G' },
  { name: 'Mega Mall', img: 'https://dummyimage.com/96x96/00bcd4/ffffff&text=M' },
];

export default function Partners(){
  const [loading, setLoading] = useState(true);
  useEffect(()=>{ const t=setTimeout(()=>setLoading(false), 800); return ()=>clearTimeout(t); },[]);

  return (
    <section id="partners" className="section">
      <div className="container">
        <h2>Bizning hamkorlar</h2>
        <p className="lead">Yirik korxonalar va tashkilotlar bizga ishonch bildirgan.</p>

        {loading ? (
          <div className="grid-3">
            {Array.from({length:6}).map((_,i)=>(<div key={i} className="card"><div className="skeleton" style={{height:64}}/></div>))}
          </div>
        ) : (
          <div className="grid-3">
            {mock.map((p, i)=>(
              <div key={i} className="card partner">
                <img src={p.img} alt={p.name} loading="lazy"/>
                <div>
                  <b>{p.name}</b>
                  <div style={{color:'var(--muted)'}}>Uzoq muddatli hamkorlik</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
