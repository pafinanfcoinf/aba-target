import type { Lang } from "../App";

const FloatingWhatsApp = ({ lang }: { lang: Lang }) => {
  return (
    <a
      href="https://wa.me/201005025821"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#25D366] text-white border-2 border-[#25D366] px-[18px] py-[10px] text-[12px] font-bold tracking-[0.06em] uppercase font-cairo hover:bg-[#128C7E] hover:border-[#128C7E] transition-all"
      style={{ boxShadow: '4px 4px 0 #075e54' }}
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
      </svg>
      {lang === "ar" ? "واتساب" : "WhatsApp"}
    </a>
  );
};

export default FloatingWhatsApp;
