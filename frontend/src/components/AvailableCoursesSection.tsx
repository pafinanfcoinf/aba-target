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
    <section className="py-12 sm:py-[72px] bg-[#f8f7f5]" style={{ borderTop: '4px solid', borderImage: 'linear-gradient(90deg, #b8962e, #0a0a0a, #b8962e) 1' }}>
      <div className="max-w-[1080px] mx-auto px-4 sm:px-10">
        <div className="text-right mb-8 sm:mb-11">
          <span className="block text-[10px] font-bold tracking-[0.18em] uppercase text-[#b8962e] mb-2.5">{t.eyebrow}</span>
          <h2 className="text-[clamp(22px,4vw,38px)] font-black text-black leading-[1.1]">{t.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {t.courses.map((c, i) => (
            <div key={i} className="flex items-center gap-3.5 p-4 sm:py-[15px] bg-white border border-[#e8e8e8] hover:border-[#b8962e] transition-all text-right">
              <span className="text-[11px] font-bold text-[#b8962e] tracking-[0.08em] flex-shrink-0 w-[26px] text-center">{String(i+1).padStart(2,'0')}</span>
              <span className="flex-1 text-[14px] sm:text-[15px] font-bold text-black text-right">{c}</span>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a href="https://wa.me/201005025821" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-black text-white text-[12px] sm:text-[13px] font-bold py-[13px] px-6 tracking-[0.06em] uppercase hover:bg-[#2a2a2a] transition-colors">
            {t.btn}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AvailableCoursesSection;
