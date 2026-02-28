import { useState } from "react";
import type { Lang } from "../App";

const T = {
  ar: { home: "الرئيسية", contact: "تواصل" },
  en: { home: "HOME", contact: "CONTACT" },
};

interface Props { lang: Lang; setLang: (l: Lang) => void; }

const SiteHeader = ({ lang, setLang }: Props) => {
  const t = T[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-[#b8962e] text-black text-center py-1.5 text-[11px] font-black tracking-[0.2em] uppercase">
        ABA Target
      </div>
      <header className="sticky top-0 z-50 bg-white border-b-2 border-black">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-10 flex items-center justify-between py-[10px] sm:py-[14px]">
          <div className="flex items-center gap-[10px] sm:gap-[14px]">
            <img src="/ola-logo.png" alt="ABA Logo" className="h-[40px] sm:h-[52px] w-auto" />
            <div>
              <div className="text-[13px] sm:text-[15px] font-black text-black leading-tight">علا عبدالهادي</div>
              <div className="text-[10px] sm:text-[11px] font-medium text-[#666] tracking-[0.08em] uppercase">Ola Abdelhady</div>
              <div className="text-[9px] sm:text-[10px] font-bold text-[#b8962e] tracking-[0.12em] uppercase mt-[1px]">ABA Target</div>
            </div>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-7">
            <a href="#" className="text-[13px] font-bold text-black tracking-[0.04em] uppercase pb-0.5 border-b-2 border-transparent hover:border-[#b8962e] transition-colors">
              {t.home}
            </a>
            <a href="#contact" className="text-[13px] font-bold text-black tracking-[0.04em] uppercase pb-0.5 border-b-2 border-transparent hover:border-[#b8962e] transition-colors">
              {t.contact}
            </a>
            <div className="flex items-center border-[1.5px] border-black rounded-[3px] overflow-hidden">
              <button
                onClick={() => setLang("ar")}
                className={`px-3 py-[5px] text-[11px] font-bold tracking-[0.05em] transition-all font-cairo ${lang === "ar" ? "bg-black text-white" : "text-[#666] hover:text-black"}`}
              >AR</button>
              <div className="w-px h-6 bg-black" />
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-[5px] text-[11px] font-bold tracking-[0.05em] transition-all font-cairo ${lang === "en" ? "bg-black text-white" : "text-[#666] hover:text-black"}`}
              >EN</button>
            </div>
          </nav>
          {/* Mobile Nav */}
          <div className="flex sm:hidden items-center gap-3">
            <div className="flex items-center border-[1.5px] border-black rounded-[3px] overflow-hidden">
              <button
                onClick={() => setLang("ar")}
                className={`px-2.5 py-[4px] text-[10px] font-bold tracking-[0.05em] transition-all font-cairo ${lang === "ar" ? "bg-black text-white" : "text-[#666] hover:text-black"}`}
              >AR</button>
              <div className="w-px h-5 bg-black" />
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-[4px] text-[10px] font-bold tracking-[0.05em] transition-all font-cairo ${lang === "en" ? "bg-black text-white" : "text-[#666] hover:text-black"}`}
              >EN</button>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1 p-1"
              aria-label="Menu"
            >
              <span className={`block w-5 h-0.5 bg-black transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-5 h-0.5 bg-black transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="sm:hidden bg-white border-t border-[#e8e8e8] px-4 py-3 flex flex-col gap-3">
            <a href="#" onClick={() => setMenuOpen(false)} className="text-[13px] font-bold text-black tracking-[0.04em] uppercase py-2 border-b border-[#e8e8e8]">
              {t.home}
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-[13px] font-bold text-black tracking-[0.04em] uppercase py-2">
              {t.contact}
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default SiteHeader;
