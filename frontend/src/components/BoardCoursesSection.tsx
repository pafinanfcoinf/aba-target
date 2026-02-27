import type { Lang } from "../App";

const T = {
  ar: {
    eyebrow: "شهادات دولية",
    title: "مستويات اعتماد البورد الأمريكي",
    courses: [
      { name: "كورس فني تحليل سلوك معتمد", badge: "ABAT" },
      { name: "كورس مشرف توحد دولي معتمد", badge: "QASP-S" },
      { name: "كورس محلل سلوكي دولي معتمد", badge: "QBA" },
    ],
    btn: "احجز الآن",
  },
  en: {
    eyebrow: "INTERNATIONAL CERTIFICATIONS",
    title: "American Board Certification Levels",
    courses: [
      { name: "Certified Behavior Analyst Technician", badge: "ABAT" },
      { name: "Certified International Autism Supervisor", badge: "QASP-S" },
      { name: "Certified International Behavior Analyst", badge: "QBA" },
    ],
    btn: "Book Now",
  },
};

const BoardCoursesSection = ({ lang }: { lang: Lang }) => {
  const t = T[lang];
  return (
    <section className="py-[72px] bg-white border-b border-[#e8e8e8]">
      <div className="max-w-[1080px] mx-auto px-10">
        <div className="text-right mb-11">
          <span className="block text-[10px] font-bold tracking-[0.18em] uppercase text-[#b8962e] mb-2.5">{t.eyebrow}</span>
          <h2 className="text-[clamp(26px,3vw,38px)] font-black text-black leading-[1.1] mb-1">{t.title}</h2>
          <span className="block text-[11px] font-bold tracking-[0.14em] uppercase text-[#b8962e]">QABA</span>
        </div>
        <div className="flex items-center gap-[60px]">
          <div className="flex-1">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=474,fit=crop/YrDNOPxN1qTZDL2L/generated/generated-m2WQO66gnlsD9ajo.png"
              alt="QABA"
              className="w-full rounded-sm"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            {t.courses.map((c, i) => (
              <div key={i} className="flex items-center gap-3.5 py-[15px] border-b border-[#e8e8e8] first:border-t first:border-[#e8e8e8] hover:pr-2 transition-all text-right">
                <span className="text-[11px] font-bold text-[#b8962e] tracking-[0.08em] flex-shrink-0 w-[26px] text-center">{String(i+1).padStart(2,'0')}</span>
                <span className="flex-1 text-[15px] font-bold text-black text-right">{c.name}</span>
                <span className="text-[10px] font-bold tracking-[0.08em] uppercase bg-black text-white px-[10px] py-[3px] flex-shrink-0">{c.badge}</span>
              </div>
            ))}
            <div className="mt-[22px]">
              <a href="https://wa.me/201005025821" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-black text-white text-[13px] font-bold py-[13px] px-6 tracking-[0.06em] uppercase hover:bg-[#2a2a2a] transition-colors">
                {t.btn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardCoursesSection;
