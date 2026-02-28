import type { Lang } from "../App";

const T = {
  ar: {
    eyebrow: "استشارات متخصصة",
    title: "احجز استشارتك اليوم",
    desc: "استشارات متخصصة للأطفال ذوي التوحد والاضطرابات النفسية",
    btn: "استشارة عبر واتساب",
  },
  en: {
    eyebrow: "SPECIALIZED CONSULTATIONS",
    title: "Book Your Consultation Today",
    desc: "Specialized consultations for children with autism and psychological disorders.",
    btn: "WhatsApp Consultation",
  },
};

const ConsultationCTA = ({ lang }: { lang: Lang }) => {
  const t = T[lang];
  return (
    <section className="bg-black py-12 sm:py-16 text-center border-t-2 border-b-2 border-[#b8962e]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-10">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#b8962e] mb-3">{t.eyebrow}</p>
        <h2 className="text-[clamp(22px,5vw,42px)] font-black text-white mb-3">{t.title}</h2>
        <p className="text-[14px] sm:text-[15px] text-white/50 max-w-[460px] mx-auto leading-[1.8] mb-6">{t.desc}</p>
        <a
          href="https://wa.me/201005025821"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#b8962e] text-white text-[12px] sm:text-[13px] font-bold px-6 sm:px-7 py-[12px] sm:py-[13px] tracking-[0.06em] uppercase hover:bg-[#d4a93a] transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
          </svg>
          {t.btn}
        </a>
      </div>
    </section>
  );
};

export default ConsultationCTA;
