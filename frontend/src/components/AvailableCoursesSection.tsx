import type { Lang } from "../App";

const T = {
  ar: {
    eyebrow: "سجّل الآن",
    title: "كورسات متاحة للتسجيل",
    courses: [
      "كورس VB-MAPP",
      "كورس التدريب على الطلب Mand",
      "كورس تدريب أولياء الأمور",
      "كورس بناء سيستم ABA داخل المركز",
      "كورس إنشاء رسم بياني على طريقة ABA",
      "كورس السلوك اللغوي Verbal Behavior",
    ],
    btn: "احجز الآن",
  },
  en: {
    eyebrow: "ENROLL NOW",
    title: "Available Courses",
    courses: [
      "VB-MAPP Course",
      "Mand Training Course",
      "Parent Training Course",
      "Building an ABA System in the Center",
      "ABA-Style Graphing Course",
      "Verbal Behavior Course",
    ],
    btn: "Book Now",
  },
};

const AvailableCoursesSection = ({ lang }: { lang: Lang }) => {
  const t = T[lang];
  return (
    <section className="py-[72px] bg-[#f8f7f5]" style={{ borderTop: '4px solid', borderImage: 'linear-gradient(90deg, #b8962e, #0a0a0a, #b8962e) 1' }}>
      <div className="max-w-[1080px] mx-auto px-10">
        <div className="text-right mb-11">
          <span className="block text-[10px] font-bold tracking-[0.18em] uppercase text-[#b8962e] mb-2.5">{t.eyebrow}</span>
          <h2 className="text-[clamp(26px,3vw,38px)] font-black text-black leading-[1.1]">{t.title}</h2>
        </div>
        <div className="flex items-center gap-[60px] flex-row-reverse">
          <div className="flex-1">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=474,fit=crop/YrDNOPxN1qTZDL2L/generated/generated-dJo4xqq7LZC6MG6a.png"
              alt="Courses"
              className="w-full rounded-sm"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            {t.courses.map((c, i) => (
              <div key={i} className="flex items-center gap-3.5 py-[15px] border-b border-[#e8e8e8] first:border-t first:border-[#e8e8e8] hover:pr-2 transition-all text-right">
                <span className="text-[11px] font-bold text-[#b8962e] tracking-[0.08em] flex-shrink-0 w-[26px] text-center">{String(i+1).padStart(2,'0')}</span>
                <span className="flex-1 text-[15px] font-bold text-black text-right">{c}</span>
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

export default AvailableCoursesSection;
