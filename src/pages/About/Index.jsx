import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader.jsx";

export default function About() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <h2>Biz haqimizda</h2>
        <p className="lead">
          Baraka Water — Zarkent tog'laridan olinadigan, tabiiy filtrdan o'tgan
          sof ichimlik suvi.
        </p>

        {loading ? (
          <div className="skeleton" style={{ height: 140 }} />
        ) : (
          <div className="card">
            <p>
              Biz 2025-yildan beri O'zbekiston bo'ylab ofislar va xonadonlarga
              sifatli ichimlik suvi yetkazib berib kelamiz. Suvimiz zamonaviy
              qayta ishlash texnologiyalari orqali nazoratdan o'tadi va har bir
              idish sanitariya talablariga to'liq javob beradi.
            </p>
            <p>
              Logistika tizimimiz orqali Toshkent va yaqin hududlarda tezkor
              yetkazib berish yo'lga qo'yilgan. Mijozlarimiz uchun qulay obuna
              tariflari mavjud.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
