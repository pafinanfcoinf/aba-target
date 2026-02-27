import type { Lang } from "../App";

const T = {
  ar: { home: "الرئيسية", contact: "تواصل" },
  en: { home: "HOME", contact: "CONTACT" },
};

interface Props { lang: Lang; setLang: (l: Lang) => void; }

const SiteHeader = ({ lang, setLang }: Props) => {
  const t = T[lang];
  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-black">
      <div className="max-w-[1080px] mx-auto px-10 flex items-center justify-between py-[14px]">
        <div className="flex items-center gap-[14px]">
          <img src="/ola-logo.png" alt="ABA Logo" className="h-[52px] w-auto" />
          <div>
            <div className="text-[15px] font-black text-black leading-tight">علا عبدالهادي</div>
            <div className="text-[11px] font-medium text-[#666] tracking-[0.08em] uppercase">Ola Abdelhady</div>
          </div>
        </div>
        <nav className="flex items-center gap-7">
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
      </div>
    </header>
  );
};

export default SiteHeader;
