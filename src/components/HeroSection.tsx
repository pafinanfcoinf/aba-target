import type { Lang } from "../App";

const T = {
  ar: {
    tag: "محلل سلوكي دولي معتمد",
    name: "علا عبدالهادي",
    cred1: "مقدم كورسات معتمد من QABA للمستويات الثلاثة QBA, QASP-S, ABAT",
    cred2: "حاصل على درجة الماجستير في التوحد",
    cred3: "المشرف الإكلينيكي لمراكز رابا بالرياض",
    btn: "احجز استشارتك",
  },
  en: {
    tag: "Certified International Behavior Analyst",
    name: "Ola Abdelhady",
    cred1: "QABA Certified Course Provider — QBA, QASP-S, ABAT",
    cred2: "Master's Degree in Autism",
    cred3: "Clinical Supervisor at RABA Centers, Riyadh",
    btn: "Book a Consultation",
  },
};

const HeroSection = ({ lang }: { lang: Lang }) => {
  const t = T[lang];
  return (
    <section className="bg-black text-white border-b-[3px] border-[#b8962e] overflow-hidden">
      <div className="max-w-[1080px] mx-auto flex min-h-[520px]">
        {/* Image — always on the left */}
        <div className="w-[360px] flex-shrink-0 overflow-hidden">
          <img
            src="/ola-photo.jpeg"
            alt="علا عبدالهادي"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
        </div>
        {/* Text — always on the right */}
        <div className="flex-1 flex flex-col justify-center py-[72px] px-12 text-right border-r border-white/[0.07]">
          <div className="inline-block text-[10px] font-bold tracking-[0.18em] uppercase text-[#b8962e] border border-[#b8962e] px-[14px] py-[5px] mb-[22px] w-fit mr-0 ml-auto">
            {t.tag}
          </div>
          <h1 className="text-[clamp(40px,4.5vw,62px)] font-black leading-[1.05] text-white mb-1.5">
            {t.name}
          </h1>
          <p className="text-[13px] font-medium text-white/40 tracking-[0.14em] uppercase mb-6">
            Ola Abdelhady · MA, QBA, IBA
          </p>
          <div className="w-11 h-0.5 bg-[#b8962e] mb-5 mr-0 ml-auto" />
          <ul className="list-none mb-8 space-y-0">
            {[t.cred1, t.cred2, t.cred3].map((c, i) => (
              <li key={i} className="text-[14px] text-white/62 py-2 border-b border-white/[0.07] flex items-center gap-2.5 justify-end">
                <span>{c}</span>
                <span className="text-[#b8962e] text-xs flex-shrink-0">—</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-end">
            <a
              href="https://wa.me/966545263917"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black text-[13px] font-bold px-6 py-[13px] tracking-[0.06em] uppercase hover:bg-[#f5eedc] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
              </svg>
              {t.btn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
