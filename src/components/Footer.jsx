import React from 'react';

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div>
          <h3 style={{margin:'0 0 6px'}}>Baraka Water</h3>
          <small>Zarkentdan olib kelingan sof va sifatli suv — ofislar va xonadonlar uchun.</small>
        </div>
        <div>
          <div className="links">
            <a href="#home">Asosiy menyu</a>
            <a href="#partners">Hamkorlar</a>
            <a href="#about">Biz haqimizda</a>
            <a href="#contact">Bog'lanish</a>
          </div>
          <small>© {year} Baraka Water. Barcha huquqlar himoyalangan.</small>
        </div>
      </div>
    </footer>
  );
}
