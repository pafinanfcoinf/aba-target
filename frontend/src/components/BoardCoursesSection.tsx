import type { Lang } from "../App";

const T = {
  ar: {
    eyebrow: "شهادات دولية",
    title: "مستويات اعتماد البورد الأمريكي",
    courses: [
      { name: "كورس فني تحليل سلوك معتمد", badge: "ABAT", desc: "المستوى الأول في تحليل السلوك التطبيقي" },
      { name: "كورس مشرف توحد دولي معتمد", badge: "QASP-S", desc: "المستوى الثاني للمشرفين المتخصصين" },
      { name: "كورس محلل سلوكي دولي معتمد", badge: "QBA", desc: "أعلى مستوى في تحليل السلوك" },
    ],
    btn: "احجز الآن",
  },
  en: {
    eyebrow: "INTERNATIONAL CERTIFICATIONS",
    title: "American Board Certification Levels",
    courses: [
      { name: "Certified Behavior Analyst Technician", badge: "ABAT", desc: "Level 1 in Applied Behavior Analysis" },
      { name: "Certified International Autism Supervisor", badge: "QASP-S", desc: "Level 2 for specialized supervisors" },
      { name: "Certified International Behavior Analyst", badge: "QBA", desc: "Highest level in behavior analysis" },
    ],
    btn: "Book Now",
  },
};

const BoardCoursesSection = ({ lang }: { lang: Lang }) => {
  const t = T[lang];
  return (
    <section className="py-12 sm:py-[72px] bg-white border-b border-[#e8e8e8]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-10">
        <div className="text-right mb-8 sm:mb-11">
          <span className="block text-[10px] font-bold tracking-[0.18em] uppercase text-[#b8962e] mb-2.5">{t.eyebrow}</span>
          <h2 className="text-[clamp(22px,4vw,38px)] font-black text-black leading-[1.1] mb-1">{t.title}</h2>
          <span className="block text-[11px] font-bold tracking-[0.14em] uppercase text-[#b8962e]">QABA</span>
        </div>
        <div className="flex flex-col gap-4">
          {t.courses.map((c, i) => (
            <div key={i} className="flex items-center gap-4 p-5 sm:p-6 bg-[#f8f7f5] border border-[#e8e8e8] hover:border-[#b8962e] transition-all text-right">
              <div className="flex-shrink-0 w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-black flex items-center justify-center">
                <span className="text-[10px] sm:text-[11px] font-black text-[#b8962e] tracking-[0.05em] text-center leading-tight">{c.badge}</span>
              </div>
              <div className="flex-1">
                <p className="text-[14px] sm:text-[16px] font-black text-black mb-1">{c.name}</p>
                <p className="text-[12px] sm:text-[13px] text-[#666]">{c.desc}</p>
              </div>
              <span className="text-[22px] sm:text-[28px] font-black text-[#b8962e]/20 tracking-tighter flex-shrink-0">{String(i+1).padStart(2,'0')}</span>
            </div>
          ))}
          <div className="mt-2">
            <a href="https://wa.me/201005025821" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-black text-white text-[12px] sm:text-[13px] font-bold py-[13px] px-6 tracking-[0.06em] uppercase hover:bg-[#2a2a2a] transition-colors">
              {t.btn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardCoursesSection;
